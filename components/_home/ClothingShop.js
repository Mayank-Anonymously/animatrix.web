import React from "react";

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
            <button>SHOP NOW</button>
          </div>
          <div className="col-md-8">
            <img
              style={{ width: "100%", height: "90%" }}
              src="/resource/images/tshirtbg.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClothingShop;
