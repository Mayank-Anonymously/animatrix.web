import AccessToken from "components/api/AccessToken";
import GetDetailsByRequestId from "components/api/GetDetailsByRequestId";
import GetOrderByOrderId from "components/api/GetOrderByOrderId";
import GetPaymentsByRequestId from "components/api/GetPaymentStatus";
import Failed from "components/paymentstatus/Failed";
import Success from "components/paymentstatus/Success";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const status = (props) => {
  const { payment_request_id, payment_id } = props;
  const [orderDetails, setDetails] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);

  useEffect(() => {
    AccessToken();
    GetDetailsByRequestId({ payment_request_id, setDetails });
    GetPaymentsByRequestId({ payment_id, setPaymentDetails });
  }, []);

  const success =
    orderDetails.status === "Completed" && paymentDetails.status === true
      ? "We are happy to let you know that your order was placed successfully and is now being processed. We appreciate you choose Animatrix as your shopping partner."
      : "";
  const Failure =
    orderDetails.status === "Pending" ||
    (orderDetails.status === "Sent" && paymentDetails.status === false)
      ? "We regret to notify you that there was a problem with Animatrix processing your most recent order. We sincerely regret any trouble this may have brought about. It seems like you payment has been failed due some reason. Please contact on -> 9971790511  for any other details."
      : orderDetails.status === "Completed" && paymentDetails.status === false
      ? "We are delighted to inform you that your order with Animatrix has been completed successfully and is on its way to you. Your complete happiness is our first goal, and we are honored to have served you. We regret to inform you that Animatrix has trouble processing your most recent payment. We sincerely regret any trouble this may have brought about."
      : orderDetails.status === "Pending" ||
        (orderDetails.status === "Sent" && paymentDetails.status === true)
      ? "Your order is currently being processed and is marked as pending. Please keep in mind that your things will not be dispatched until your payment has been successfully processed. We are delighted to notify you that your payment for the order with Animatrix has been processed successfully"
      : "";

  return (
    <div>
      {orderDetails.status === "Completed" && paymentDetails.status === true ? (
        <Success success={success} orderDetails={orderDetails} />
      ) : orderDetails.status === "Pending" ||
        (orderDetails.status === "Sent" && paymentDetails.status === false) ? (
        <Failed Failure={Failure} />
      ) : orderDetails.status === "Completed" &&
        paymentDetails.status === false ? (
        <Failed Failure={Failure} />
      ) : orderDetails.status === "Pending" ||
        (orderDetails.status === "Sent" && paymentDetails.status === true) ? (
        <Failed Failure={Failure} />
      ) : null}
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const { payment_request_id, payment_id } = context.query;

  return {
    props: { payment_request_id: payment_request_id, payment_id: payment_id },
  };
};
export default status;
