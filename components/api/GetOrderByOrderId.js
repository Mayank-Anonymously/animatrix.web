import axios from "axios";
import { host } from "static";
const GetOrderByOrderId = ({ orderid, setOrderDetails }) => {
  const options = {
    method: "GET",
    url: `${host}order/getOrderByOrderId/${orderid}`,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setOrderDetails(response.data.response);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default GetOrderByOrderId;
