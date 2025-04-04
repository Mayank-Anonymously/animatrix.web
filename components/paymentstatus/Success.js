// import React, { useEffect, useState } from "react";
// // import Lottie from "react-lottie";
// import * as animationData from "../../animation/checked.json";
// import Link from "next/link";
// import GetOrderByOrderId from "components/api/GetOrderByOrderId";
// import Mail from "components/Mail";

// const Success = ({ success, orderDetails }) => {
//   const [orderDetail, setOrderDetails] = useState([]);

//   // const defaultOptions = {
//   //   loop: true,
//   //   autoplay: true,
//   //   animationData: animationData,
//   //   rendererSettings: {
//   //     preserveAspectRatio: "xMidYMid slice",
//   //   },
//   // };
//   const orderid = orderDetails.purpose;
//   useEffect(() => {
//     GetOrderByOrderId({ orderid, setOrderDetails });
//   }, []);

//   return (
//     <>
//       <div className="container payment-main d-flex">
//         <div class="container success-container">
//           <div class="icon">
//             <Lottie options={defaultOptions} height={170} width={170} />
//           </div>
//           <h1>Payment Successful!</h1>
//           <p>Thank you for your purchase.</p>
//           <p>{success}</p>
//           <div className="payment-container">
//             <div className="payment-details">
//               <span>Shipping Charges</span>
//               <p>₹ 0</p>
//             </div>
//             <Link href="/">
//               <button className="continue-btn">Continue Shopping</button>
//             </Link>
//           </div>
//         </div>
//         <div className="success-logo">
//           <img style={{ width: "500px" }} src="/resource/images/success.jpg" />
//         </div>
//       </div>
//       <Mail data={orderDetail} />
//     </>
//   );
// };

// export default Success;

import React from "react";

const Success = () => {
  return <div>Success</div>;
};

export default Success;
