import Link from "next/link";
import React from "react";
import { host } from "static";

const Imagebanner = ({ imagebtn, image }) => {
  return (
    <>
      <div
        className="container-fluid image-banner"
        style={{
          backgroundImage: "/resources/images/terms.jpg",
        }}
      >
        <div className="container">
          <h2
            data-aos="fade-in"
            data-aos-delay="50"
            className="image-banner-heading"
            style={{ fontFamily: "poppins" }}
          >
            Subscribe for our <br />
            latest articles
          </h2>
          <div className="contact-btn text-center">
            <Link href="/#contact">
              <button data-aos="fade-in" data-aos-delay="50">
                {imagebtn}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imagebanner;
