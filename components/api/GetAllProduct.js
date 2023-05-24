import axios from "axios";
import { host } from "static";
const GetAllProduct = ({ setProductData, setCheckState }) => {
  const options = { method: "GET", url: `${host}getAllProducts` };

  axios
    .request(options)
    .then(function (response) {
      setProductData(response.data.response);
      setCheckState(response.data.baseResponse);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default GetAllProduct;
