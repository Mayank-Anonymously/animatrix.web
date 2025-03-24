import React from "react";
import axios from "axios";
import { host } from "static";
const CreateOrder = ({ values, ProductOrderDetails, router }) => {
  const totalPrice = ProductOrderDetails.reduce(function (prev, current) {
    return prev + current.Price * current.quantity;
  }, 0);
  const Orderdetails = {
    userId: "0",
    orderDetails: ProductOrderDetails,
    customerDetails: {
      Name: values.firstName + "-" + values.lastName,
      AddressOne: values.address,
      City: values.city,
      State: values.state,
      Pincode: values.zip,
      Email: values.email,
      ContactNumber: values.phone,
    },
    total: totalPrice,
  };

  const options = {
    method: "POST",
    url: `${host}order/createOrder/`,
    headers: { "Content-Type": "application/json" },
    data: Orderdetails,
  };

  axios
    .request(options)
    .then(function (response) {
      const result = response.data.response;
      // router.push(`/checkout/payment/${result.OrderId}`);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default CreateOrder;
