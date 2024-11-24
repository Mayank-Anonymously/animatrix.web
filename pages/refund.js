import React from "react";
import Footer from "components/Common/Footer";
import NavbarSection from "components/_home/NavbarSection";
import SecondBanner from "components/_home/SecondBanner";

const refund = () => {
  return (
    <>
      <NavbarSection />
      <SecondBanner
        mainhead="Refund Policy"
        image={"/resource/images/storeimg.png"}
      />
      <div className="container condition-container text-center">
        <h3>
          All Refunds will be made within 7 business days of receiving the
          product.
        </h3>
        <h3 style={{ marginTop: "50px" }}>
          Pre-paid Orders Customers will receive funds in the same account used
          during payment on www.asfiya art shop.store for their purchase.
        </h3>
        <h3 style={{ marginTop: "50px" }}>
          Refund amount will exclude any shipping charges paid at the time of
          purchase.
        </h3>
      </div>
      <Footer />
    </>
  );
};

export default refund;
