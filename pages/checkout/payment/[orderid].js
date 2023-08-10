import axios from "axios";
import CreatePayment from "components/api/CreatePayment";
import GetOrderByOrderId from "components/api/GetOrderByOrderId";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { host } from "static";

const Payment = (props) => {
  const { orderid, data } = props;
  const [getPaymentDetails, setPaymentDetails] = useState([]);
  const router = useRouter();
  const details = data.customerDetails;
  const total = data.total;

  useEffect(() => {
    CreatePayment({ details, orderid, total, setPaymentDetails, router });
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      Payment
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { orderid } = context.query;
  var requestOptions = {
    method: "GET",

    redirect: "follow",
  };
  const apifetch = await fetch(
    `${host}order/getOrderByOrderId/${orderid}`,
    requestOptions
  );
  const response = await apifetch.json();
  console.log(response);
  return { props: { orderid: orderid, data: response.response } };
};
export default Payment;
