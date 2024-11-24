import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      {" "}
      <div class="footer-container container">
        <div class="content_1">
          <img src={"/resources/images/art-logo.png"} alt="logo" />
          <p>
            The customer is at the heart of our
            <br />
            unique business model, which includes
            <br />
            design.
          </p>
          {/* <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" /> */}
        </div>

        <div class="content_2">
          <h4>About Our Shop</h4>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/refund">Refund Policy</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms and Condtions</Link>
        </div>
        {/* <div class="content_3">
          <h4>SHOPPING</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="https://payment-method-sb.netlify.app/" target="_blank">
            Payment Method
          </a>
          <a href="https://delivery-status-sb.netlify.app/" target="_blank">
            Delivery
          </a>
          <a
            href="https://codepen.io/sandeshbodake/full/Jexxrv"
            target="_blank"
          >
            Return and Exchange
          </a>
        </div> */}
        <div class="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Be the first to know about new
            <br />
            arrivals, look books, sales & promos!
          </p>
          <div class="f-mail">
            <input type="email" placeholder="Your Email" />
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
