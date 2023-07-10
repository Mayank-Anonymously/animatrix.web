import React from "react";
import axios from "axios";
import { host } from "static";
const AddToCart = ({ WithSize }) => {
  const Product = {
    title: WithSize.title,
    description: WithSize.description,
    price: WithSize.price,
    priceSale: WithSize.priceSale,
    image: WithSize.image[0].filename,
    categoryId: WithSize.categoryId,
    categoryName: WithSize.categoryName,
    productSku: WithSize.productSku,
    productCode: WithSize.productCode,
    quantity: WithSize.quantity,
    size: WithSize.size,
    inStock: WithSize.inStock,
    stockQuantity: WithSize.stockQuantity,
    specification: WithSize.specification,
    ProductId: WithSize.ProductId,
    selSize: WithSize.selSize,
  };

  const options = {
    method: "POST",
    url: `${host}cart/addItemsToCart`,
    headers: { "Content-Type": "application/json" },
    data: Product,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default AddToCart;
