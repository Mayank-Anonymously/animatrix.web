import Footer from "components/Common/Footer";
import Imagebanner from "components/_home/ImageBanner";
import SecondBanner from "components/_home/SecondBanner";
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
const List = () => {
  const router = useRouter();
  const { cd } = router.query;
  const [checkState, setCheckState] = useState("");

  const filteredData = productData.filter(
    (item, index) => cd == item.categoryId
  );

  return (
    <>
      <SecondBanner
        mainhead="Our Collection"
        title=""
        image={"/resources/images/collection-banner.png"}
      />
      <div id="product-List">
        <div className="auto-container">
          {productData.length === 0 ? (
            <>
              <div className="loader">
                <section class="spin-loader"></section>
              </div>
            </>
          ) : (
            <div className="row card-container">
              {productData.map((item, index) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-8 col-sm-10 image-container">
                      <div className="card-inner-container">
                        <img src={item.image} />

                        {/* <div
                          className="tshirt-detail"
                          style={{ textAlign: "center" }}
                        >
                          <p className="collection-para">{item.title}</p>
                          <span id="price">
                            <h5>Rs.{item.priceSale}</h5>
                            <h6 style={{ marginRight: "10px" }}>
                              Rs.{item.price}
                            </h6>
                            <p className="discount-price">44%</p>
                          </span>
                          <Link href={`/product/${item.ProductId}`}>
                            <button className="collection-btn">Buy Now</button>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Imagebanner imagebtn="Click Here" />
      <Footer />
    </>
  );
};

export default List;
