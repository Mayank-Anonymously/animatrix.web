import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BreadCrumbs from "../Common/BreadCrumbs";
import Cart from "../Common/Cart";
import Counter from "../Common/Counter";
import { host } from "static";
import AddToCart from "components/api/AddToCart";
import Slider from "react-slick";
import axios from "axios";
import Link from "next/link";

const Details = ({ details }) => {
  const router = useRouter();
  const { id } = router.query;
  const [productData, setProductData] = useState([]);
  const [productSize, setProductSize] = useState("S");
  const {
    _id,
    title,
    description,
    image,
    price,
    priceSale,
    categoryId,
    categoryName,
    productCode,
    quantity,
    inStock,
    ProductId,
  } = details;

  const WithSize = { ...details, selSize: productSize };
  const navigatetocart = () => {
    AddToCart({ WithSize });
    router.push("/shop/cart");
  };

  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="product-details">
      <div class="auto-container">
        <span class="Options">
          <BreadCrumbs
            route={[
              { page: "shop", href: "/shop" },
              { page: "Mens Tshirt - Original tshirt", href: "" },
            ]}
          />
          <Cart />
        </span>

        <div className="container">
          <div className="row">
            <div className="col-md-6 slick-div-custom">
              <Slider {...settings}>
                <div>
                  <img src={`${host}resources/${image}`} />
                </div>
                <div>
                  <img src={`${host}resources/${image}`} />
                </div>
              </Slider>
            </div>
            <div className="col-md-6">
              <div class="details-container">
                <div class="product-details">
                  <span class="title">
                    <h2>{title}</h2>
                  </span>
                  <span class="prices">
                    <h5>₹ {priceSale}</h5>
                    <h6>₹ {price}</h6>
                  </span>
                  <span class="shipment-detail">
                    <p>
                      VAT not charged, plus shipping <br />
                      <strong>Free shipping</strong> on domestic orders over ₹50
                    </p>
                  </span>
                  <div className="size-selection">
                    <label style={{ fontWeight: "600" }} for="tshirt">
                      Select Size
                    </label>
                    <select
                      name="tshirt"
                      id="tshirt-size"
                      value={productSize}
                      onChange={(e) => setProductSize(e.target.value)}
                    >
                      <option value="small">S</option>
                      <option value="medium">M</option>
                      <option value="large">L</option>
                      <option value="xtra">XL</option>
                    </select>
                  </div>
                  <span class="cart-and-wishlist-btn">
                    <div
                      // href={`https://api.whatsapp.com/send?phone=919971790511&text=Product-Name:${JSON.stringify(
                      //   object
                      // )}`}
                      class="add-to-cart-btn"
                      onClick={() => navigatetocart()}
                    >
                      <button class="btn text-white">Buy Now</button>
                    </div>
                  </span>
                  <span class="delivery-timing">
                    <h6>
                      <strong>Delivery Timing</strong>
                    </h6>
                    <h6>
                      1-2 Week <span class="stock-left">Only 1 left !!!</span>
                    </h6>
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Slider> */}
        {/* <div className="big-image">
              <img src={`${host}resources/${image}`} />
            </div>
            <div className="image-thumbnail">
              <img src="/resource/images/product-images/itachig.jpg" />
              <img src="/resource/images/product-images/itachig.jpg" />
              <img src="/resource/images/product-images/itachig.jpg" />
              <img src="/resource/images/product-images/itachig.jpg" />
            </div> */}
      </div>
    </section>
  );
};

export default Details;
