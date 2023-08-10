import axios from "axios";
import React from "react";
import { host } from "static";

const GetDetailsByRequestId = ({ payment_request_id, setOrderDetails }) => {
  const Token = localStorage.getItem("token");
  const AccessToken = JSON.parse(Token);
  const parsedToken = AccessToken.access_token;
  const options = {
    method: "GET",
    url: `${host}order/orderStatus/${payment_request_id}/${parsedToken}`,
  };

  axios
    .request(options)
    .then(function (response) {
      setOrderDetails(response.data.response);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default GetDetailsByRequestId;
