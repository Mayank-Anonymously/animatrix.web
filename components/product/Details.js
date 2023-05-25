import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BreadCrumbs from "../Common/BreadCrumbs";
import Cart from "../Common/Cart";
import Counter from "../Common/Counter";
import { host } from "static";
import AddToCart from "components/api/AddToCart";
import axios from "axios";
// import OwlCarousel from "react-owl-carousel";

const Details = ({ details }) => {
  const router = useRouter();

  const { id } = router.query;
  const [productData, setProductData] = useState([]);
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

  const navigatetocart = () => {
    AddToCart({ details });
    router.push("/shop/cart");
  };

  return (
    <section id="product-details">
      <div class="auto-container">
        <span class="Options">
          <BreadCrumbs
            route={[
              { page: "shop", href: "/shop" },
              { page: "Ice Ice Baby - Original oil painting", href: "" },
            ]}
          />
          <Cart />
        </span>

        <div class="details-container">
          <div class="image-carousel">
            {/* <div className="owl-car">
              <OwlCarousel className="owl-theme" loop margin={10} nav>
                <div class="item">
                  <h4>
                   
                    <img src={`${host}resources/${image}`} />
                  </h4>
                </div>
                <div class="item">
                  <h4>2</h4>
                </div>
                <div class="item">
                  <h4>3</h4>
                </div>
              </OwlCarousel>
            </div> */}
            <div className="big-image">
              <img src={`${host}resources/${image}`} />
            </div>
            <div className="image-thumbnail">
              <img src="/resource/images/product-images/itachig.jpg" />
              <img src="/resource/images/product-images/itachig.jpg" />
              <img src="/resource/images/product-images/itachig.jpg" />
              <img src="/resource/images/product-images/itachig.jpg" />
            </div>
          </div>
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

            <span class="cart-and-wishlist-btn">
              <div class="add-to-cart-btn" onClick={() => navigatetocart()}>
                <button class="btn text-white"> Add to Cart</button>
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
    </section>
  );
};

export default Details;
