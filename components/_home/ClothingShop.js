import Link from "next/link";
import React from "react";
import { host } from "static";

const ClothingShop = () => {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: "20px" }}>
        <div className="row">
          <div
            className="col-md-4 clothing-section"
            style={{ textAlign: "right" }}
          >
            <h1>
              OUR
              <br />
              COLLECTION
            </h1>
            <Link href="/shop">
              <button>SHOP NOW</button>
            </Link>
          </div>
          <div className="col-md-8">
            <img
              style={{ width: "100%", height: "90%" }}
              src={`/resources/images/eye-bg.jpeg`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClothingShop;
