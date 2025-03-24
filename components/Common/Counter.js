import axios from "axios";
import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { host } from "static";
import DeleteCartItem from "components/api/RemoveCartItems";
import { BsTrash } from "react-icons/bs";
const Counter = ({ qty, id, setQtyUpdate }) => {
  const qtyNumber = parseInt(qty);
  const [counter, setCounter] = useState(qtyNumber);
  const updateQuantity = (qty) => {
    const options = {
      method: "PATCH",
      url: `${host}cart/updateCartItem/${id}`,
      data: { quantity: qty },
    };

    axios
      .request(options)
      .then(function (response) {
        setQtyUpdate(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const handleIncrement = () => {
    updateQuantity(counter + 1);
  };
  const handleDecrement = () => {
    if (counter === 1) {
      null;
    } else {
      updateQuantity(counter - 1);
    }
  };

  console.log("counter:", counter);

  return (
    <div class="quanity-div">
      <div class="plus" onClick={() => handleIncrement()}>
        <AiOutlinePlus size={15} />
      </div>
      <div class="input">{counter}</div>

      <div class="minus" onClick={() => handleDecrement()}>
        <AiOutlineMinus size={15} />
      </div>
    </div>
  );
};

export default Counter;
