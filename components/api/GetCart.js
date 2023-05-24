import axios from "axios";
import { host } from "static";

const GetCart = ({ setCartData, setQtyUpdate }) => {
  const options = {
    method: "GET",
    url: `${host}cart/getAllCartItems`,
  };

  axios
    .request(options)
    .then(function (response) {
      setCartData(response.data.response);
      setQtyUpdate(false);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default GetCart;
