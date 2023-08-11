import axios from "axios";
import CreatePayment from "components/api/CreatePayment";
import GetOrderByOrderId from "components/api/GetOrderByOrderId";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { host } from "static";

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
    } else {
      setLoading(false);
      setErrorText("Some Error Occured While Fetching Data");
    }
  };

  useEffect(() => {
    // if (data.length !== 0) {
    // }
    OrderByID();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      Payment
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { orderid } = context.query;

  return { props: { orderid: orderid } };
};
export default Payment;
