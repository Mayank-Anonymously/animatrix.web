import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../animation/checked.json";
import Link from "next/link";

const Success = ({ success }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="container payment-main d-flex">
        <div class="container success-container">
          <div class="icon">
            <Lottie options={defaultOptions} height={170} width={170} />
          </div>
          <h1>Payment Successful!</h1>
          <p>Thank you for your purchase.</p>
          <p>{success}</p>
          <div className="payment-container">
            <div className="payment-details">
              <span>Shipping Charges</span>
              <p>₹ 0</p>
            </div>
            <Link href="/">
              <button className="continue-btn">Continue Shopping</button>
            </Link>
          </div>
        </div>
        <div className="success-logo">
          <img style={{ width: "500px" }} src="/resource/images/success.jpg" />
        </div>
      </div>
    </>
  );
};

export default Success;
