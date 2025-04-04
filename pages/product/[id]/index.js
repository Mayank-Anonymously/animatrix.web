import Footer from "../../../components/Common/Footer";
import Seo from "../../../components/Common/Seo";
import Description from "../../../components/product/description";
import Details from "../../../components/product/Details";
import NavbarSection from "../../../components/_home/NavbarSection";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import GetProductById from "components/api/GetProductById";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const [productData, setProductData] = useState([]);
  const {
    title,
    description,
    image,
    price,
    priceSale,
    categoryId,
    categoryName,
    productCode,
    quantity,
    inStock,
    size,
  } = productData;

  useEffect(() => {
    GetProductById({ setProductData, id });
  }, []);

  return (
    <div>
      <Seo />
      <div className="navbar-black">
        <NavbarSection />
      </div>
      {productData.length !== 0 ? (
        <>
          <Details details={productData} />
          <div class="seperator" />
          <Description description={description} />
        </>
      ) : (
        <div className="loader">
          <section class="spin-loader"></section>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default index;
