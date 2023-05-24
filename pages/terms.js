import NavbarSection from "components/_home/NavbarSection";
import SecondBanner from "components/_home/SecondBanner";
import React from "react";

const terms = () => {
  return (
    <>
      {/* <div className="container-fluid terms-page">
        <img style={{ width: "120px" }} src="/resource/images/notext.png" />
        <h2>ANIMATRIX</h2>
      </div>
      <div className="container">
        <h2>Terms and Conditions of Sale</h2>
      </div> */}
      <NavbarSection />
      <SecondBanner
        mainhead="Terms & Conditions"
        title="How We Help You Succeed"
        image={"/resource/images/terms.jpg"}
      />
    </>
  );
};

export default terms;
