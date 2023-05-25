import Footer from "components/Common/Footer";
import Imagebanner from "components/_home/ImageBanner";
import SecondBanner from "components/_home/SecondBanner";
import GetAllProduct from "components/api/GetAllProduct";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { host } from "static";
const List = () => {
  const router = useRouter();
  const { cd } = router.query;
  const [productData, setProductData] = useState([]);
  const [checkState, setCheckState] = useState("");
  useEffect(() => {
    GetAllProduct({ setProductData, setCheckState });
  }, []);

  const filteredData = productData.filter(
    (item, index) => cd == item.categoryId
  );

  return (
    <>
      <SecondBanner
        mainhead="Our Collection"
        title="Unleash Your Style With Us"
        image={"/resource/images/redbg.jpeg"}
      />
      <div id="product-List">
        <div className="auto-container">
          {productData.length === 0 ? (
            "Wait while we fetch products for you"
          ) : (
            <div className="row card-container">
              {productData.map((item, index) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-8 col-sm-10 image-container">
                      <div className="card-inner-container">
                        <Link href={`/product/${item._id}`}>
                          <img src={`${host}resources/${item.image}`} />
                          {/* <img src="/resource/images/product-images/angle.jpeg" /> */}
                          <span>
                            <p className="tshirt-price">
                              {item.title} - {item.categoryName}
                            </p>
                            <span id="price">
                              <h5>Rs.{item.priceSale}</h5>
                              <h6>Rs.{item.price}</h6>
                              <button
                                className="collection-btn"
                                style={{ padding: "0px 30px" }}
                              >
                                Buy Now
                              </button>
                            </span>
                          </span>
                        </Link>
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
