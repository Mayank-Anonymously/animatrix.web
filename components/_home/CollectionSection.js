import GetAllProduct from "components/api/GetAllProduct";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { host } from "static";

const CollectionSection = () => {
  const router = useRouter();
  const { cd } = router.query;
  const [productData, setProductData] = useState([]);
  const [checkState, setCheckState] = useState("");

  useEffect(() => {
    GetAllProduct({ setProductData, setCheckState });
  }, []);

  return (
    <div id="product-List">
      {checkState.status === 1 ? (
        <>
          {productData.length !== 0 ? (
            <>
              <div className="auto-container">
                <div className="row card-container collection-card">
                  <h2 className="collection-head">Our Best Sellers</h2>
                  {productData.slice(0, 3).map((item, index) => {
                    return (
                      <div className="col-lg-4 col-md-8 col-sm-10 image-container">
                        <div className="card-inner-container">
                          <img src={`${host}resources/${item.image}`} />
                          <div
                            className="tshirt-detail"
                            style={{ textAlign: "center" }}
                          >
                            <p className="collection-para">{item.title}</p>
                            <Link href={`/product/${item._id}`}>
                              <button className="collection-btn">
                                Buy Now
                              </button>
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
