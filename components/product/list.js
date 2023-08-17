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
  }, [productData]);

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
                        {item.title === "Fallen Angel" ? (
                          <img
                            src={`${host}resources/${item.image[1].filename}`}
                          />
                        ) : item.title === "Money Over Honey" ? (
                          <img
                            src={`${host}resources/${item.image[4].filename}`}
                          />
                        ) : (
                          <img
                            src={`${host}resources/${item.image[2].filename}`}
                          />
                        )}

                        <div
                          className="tshirt-detail"
                          style={{ textAlign: "center" }}
                        >
                          <p className="collection-para">{item.title}</p>
                          <span id="price">
                            <h5>Rs.{item.priceSale}</h5>
                            <h6 style={{ marginRight: "10px" }}>
                              Rs.{item.price}
                            </h6>
                            <p className="discount-price">56%</p>
                          </span>
                          <Link href={`/product/${item.ProductId}`}>
                            <button className="collection-btn">Buy Now</button>
                          </Link>
                        </div>
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
