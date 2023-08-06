import axios from "axios";
import { host } from "static";
const GetProductById = ({ setProductData, id }) => {
  const options = {
    method: "GET",
    url: `${host}${id}/getProductById`,
  };

  axios
    .request(options)
    .then(function (response) {
      setProductData(response.data.response);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default GetProductById;
