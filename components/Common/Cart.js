import Link from "next/link";
import React from "react";
import { BsCartDash } from "react-icons/bs";
const Cart = () => {
  return (
    <div>
      <Link href="/shop/cart">
        <BsCartDash size={25} />
      </Link>
    </div>
  );
};

export default Cart;
