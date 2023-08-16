import axios from "axios";
import CreatePayment from "components/api/CreatePayment";
import GetOrderByOrderId from "components/api/GetOrderByOrderId";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { host } from "static";
import redirectload from "../../../animation/redirect.json";
const Payment = (props) => {
  const { orderid } = props;
  const router = useRouter();
  const [getPaymentDetails, setPaymentDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const OrderByID = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    setLoading(true);
    const apifetch = await fetch(
      `${host}order/getOrderByOrderId/${orderid}`,
      requestOptions
    );
    const response = await apifetch.json();
    if (response) {
      const data = response.response;
      CreatePayment({ data, orderid, setPaymentDetails, router });
      setLoading(false);
      setErrorText("");
    } else {
      setLoading(false);
      setErrorText("Some Error Occured While Fetching Data");
    }
  };

  useEffect(() => {
    OrderByID();
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: redirectload,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const Redirectloader = () => {
    return (
      <div className="container-fluid justify-content-center align-items-center text-center">
        <Lottie options={defaultOptions} width={400} height={300} />
        <h3>Wait While We Redirect You To Payment Page.</h3>
      </div>
    );
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      {errorText === "" ? <Redirectloader /> : errorText}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { orderid } = context.query;

  return { props: { orderid: orderid } };
};
export default Payment;
