import GetAllProduct from "components/api/GetAllProduct";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { host } from "static";

const productData = [
  {
    id: 1,
    image: "/resources/images/image-one.jpeg",
  },
  {
    id: 2,
    image: "/resources/images/image-two.jpeg",
  },
  {
    id: 3,
    image: "/resources/images/image-three.jpeg",
  },
  {
    id: 4,
    image: "/resources/images/image-four.jpeg",
  },
  {
    id: 5,
    image: "/resources/images/image-five.jpeg",
  },
  {
    id: 6,
    image: "/resources/images/image-six.jpeg",
  },
];

const CollectionSection = () => {
  const router = useRouter();
  const { cd } = router.query;
  const [checkState, setCheckState] = useState("");

  return (
    <div id="product-List">
      {productData.length !== 0 ? (
        <>
          <div className="auto-container">
            <div className="row card-container collection-card">
              <h2 className="collection-head">Our Best Sellers</h2>
              {productData.map((item, index) => {
                console.log(item.image);
                return (
                  <div className="col-lg-4 col-md-8 col-sm-10 image-container">
                    <div className="card-inner-container">
                      <img src={item.image} />
                      <div
                        className="tshirt-detail"
                        style={{ textAlign: "center" }}
                      >
                        {/* <p className="collection-para">{item.title}</p>
                        <span id="price">
                          <h5>Rs.{item.priceSale}</h5>
                          <h6 style={{ marginRight: "10px" }}>
                            Rs.{item.price}
                          </h6>
                          <p className="discount-price">44%</p>
                        </span> */}
                        <Link href={`/product/${item.id}`}>
                          <button className="collection-btn">Buy Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="center">
          <span>NO PRODUCT FOUND</span>
        </div>
      )}
    </div>
  );
};

export default CollectionSection;
