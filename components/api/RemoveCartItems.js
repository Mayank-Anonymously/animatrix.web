import React from "react";
import axios from "axios";
import { host } from "static";
const AddToCart = ({ details }) => {
  const options = {
    method: "PUT",
    url: `${host}cart/addItemsToCart`,
    headers: { "Content-Type": "application/json" },
    data: details,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default AddToCart;
