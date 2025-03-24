import axios from "axios";
import { host } from "static";
import swal from "sweetalert";
const DeleteCartItem = (id, setQtyUpdate) => {
  const options = {
    method: "PUT",
    url: `${host}cart/deleteCartItem/${id}`,
    headers: { "Content-Type": "application/json" },
  };

  axios
    .request(options)
    .then(function (response) {
      if (response.data.baseResponse.status === 1) {
        swal({
          title: "Deleted",
          text: "Item removed successfully.",
          icon: "success",
        });
        setQtyUpdate(true);
      } else {
        null;
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default DeleteCartItem;
