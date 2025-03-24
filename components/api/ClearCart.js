import React from "react";
import { host } from "static";

const ClearCart = () => {
  const options = {
    method: "PUT",
    url: `${host}cart/clearCartItems`,
    headers: { "Content-Type": "application/json" },
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

export default ClearCart;
