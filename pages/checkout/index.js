import React, { useEffect, useState } from "react";
import Information from "../../components/checkout/Information";
import HeaderBreadCrumbs from "components/Common/HeaderBreadCrumbs";
import NavbarSection from "components/_home/NavbarSection";
import GetCart from "components/api/GetCart";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  const { id } = router.query;
  const [cartData, setCartData] = useState([]);
  const [qtyUpdate, setQtyUpdate] = useState([]);
  const {
    _id,
    title,
    description,
    image,
    price,
    categoryName,
    quantity,
    ProductId,
  } = cartData;
  console.log("cartData:", cartData);
  useEffect(() => {
    GetCart({ setCartData, setQtyUpdate });
  }, []);
  return (
    <>
      <div className="navbar-black">
        <NavbarSection />
      </div>
      <HeaderBreadCrumbs title={"Checkout"} root={"/home"} main={""} />
      <Information cartData={cartData} />
    </>
  );
};

export default index;
