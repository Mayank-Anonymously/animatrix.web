import React from "react";
import axios from "axios";
import { host } from "static";
const CreatePayment = ({ data, orderid, setPaymentDetails, router }) => {
  const Token = localStorage.getItem("token");
  const AccessToken = JSON.parse(Token);
  const parsedToken = AccessToken.access_token;
  const details = data.customerDetails;
  const total = data.total;
  const Payment = {
    buyername: details.Name,
    phone: details.ContactNumber,
    email: details.Email,
    orderid: orderid,
    amount: total,
    redirect_url: "https://www.asfiya art shop.store/checkout/payment/status",
  };

  const options = {
    method: "POST",
    url: `${host}order/createPaymentRequest/${parsedToken}`,
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(Payment),
  };

  axios
    .request(options)
    .then(function (response) {
      const url = response.data.response;
      setPaymentDetails(response.data.response);
      router.push(url.longurl);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default CreatePayment;
