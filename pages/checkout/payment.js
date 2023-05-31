import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { host } from "static";

const Payment = () => {
  const router = useRouter();
  const data = router.query;
  const ProductArray = [];
  console.log("cdcdcdcdc:", data);
  const CreateOrder = () => {
    var body = JSON.stringify({
      userId: 0,
      orderDetails: {
        ProductId: "",
        ProductName: "",
        ProductImage: "",
        Price: "",
      },

      customerDetails: {
        Name: data.firstName + data.lastName,
        AddressOne: data.address1,
        City: data.city,
        State: data.state,
        Pincode: data.pincode,
        Email: data.email,
        ContactNumber: data.phoneno,
      },
      PaymentDetails: {
        mode: "",
        CardNo: 0,
        ExpiryDate: "",
        CVV: 0,
      },
      discount: 0,
      subTotal: 0,
      total: 0,
    });
    const options = {
      method: "POST",
      url: `${host}createOrder`,
      headers: { "Content-Type": "application/json" },
      data: body,
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
  return (
    <div className="container d-flex justify-content-center align-items-center">
      Payment
    </div>
  );
};

export default Payment;
