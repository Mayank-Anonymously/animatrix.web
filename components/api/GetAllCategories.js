import axios from "axios";
import { host } from "static";
const GetAllCategories = ({ setCategoryData, setErrorState, setIsloading }) => {
  const options = { method: "GET", url: `${host}getAllCategories` };

  axios
    .request(options)
    .then(function (response) {
      if (response.data.baseResponse.status === 1) {
        setIsloading(false);
        setCategoryData(response.data.response);
      } else {
        setIsloading(false);
        setErrorState(response.data.baseResponse.messsage);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default GetAllCategories;
