import axios from "axios";
import { host } from "static";
const AccessToken = () => {
  const options = { method: "GET", url: `${host}order/generateToken` };

  axios
    .request(options)
    .then(function (response) {
      localStorage.setItem("token", JSON.stringify(response.data.token));
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default AccessToken;
