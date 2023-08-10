import axios from "axios";
import React from "react";
import { host } from "static";

const GetPaymentsByRequestId = ({ payment_id, setPaymentDetails }) => {
  const Token = localStorage.getItem("token");
  const AccessToken = JSON.parse(Token);
  const parsedToken = AccessToken.access_token;
  const options = {
    method: "GET",
    url: `${host}order/paymentStatus/${payment_id}/${parsedToken}`,
  };

  axios
    .request(options)
    .then(function (response) {
      setPaymentDetails(response.data.response);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default GetPaymentsByRequestId;
