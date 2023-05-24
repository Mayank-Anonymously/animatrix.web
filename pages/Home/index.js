import NavbarSection from "../../components/_home/NavbarSection";
import React from "react";
import HomeSection from "../../components/_home/HomeSection";
import CollectionSection from "../../components/_home/CollectionSection";
import ContactSection from "../../components/_home/ContactSection";
import Footer from "../../components/Common/Footer";
import Homebanner from "components/_home/HomeBanner";
import Categories from "pages/Category/Categories";
import ClothingShop from "components/_home/ClothingShop";

const index = () => {
  return (
    <div>
      <NavbarSection />
      <Homebanner />
      <ClothingShop />
      <section id="collection">
        <CollectionSection />
      </section>
      {/* <section id="categorySection">
        <Categories />
      </section> */}

      {/* <section id="collection">

      <Testimoials />
      </section> */}

      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
};

export default index;
