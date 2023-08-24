import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Homebanner = () => {
  return (
    <>
      <div
        className="container-fluid homebanner"
        style={{
          backgroundImage: `url("/resource/images/storeimg.png")`,
          backgroundBlendMode: "multiply",
          backgroundColor: "#00000045",
        }}
        roboto
      >
        <h1 data-aos="fade-up" style={{ fontFamily: "Dela Gothic one" }}>
          JUST DROPPED
        </h1>
        <h1 data-aos="fade-up" className="type-heading">
          EXPLORE NEW ARRIVALS
        </h1>
        {/* <h5>UP TO 40% OFF</h5> */}
        <div data-aos="fade-in" className="redirect-btn">
          <Link href="/shop">Shop Now</Link>
        </div>
        <div data-aos="fade-in" data-aos-delay="50" className="scroll-icon">
          <a href="#collection">
            <div class="mouse-icon">
              <div class="wheel"></div>
            </div>
          </a>
        </div>
      </div>
      <div
        className="container-fluid video-banner"
        style={{
          backgroundImage: `url("/resource/images/mobile.gif")`,
          backgroundBlendMode: "multiply",
          backgroundColor: "#00000045",
        }}
      >
        <h1
          className="launch-heading"
          data-aos="fade-up"
          style={{ fontFamily: "Dela Gothic one" }}
        >
          JUST DROPPED
        </h1>
        <h1 data-aos="fade-up" className="type-heading-video">
          EXPLORE NEW ARRIVALS
        </h1>
        {/* <h5>UP TO 40% OFF</h5> */}
        <div data-aos="fade-in" className="redirect-btn">
          <Link href="/shop">Shop Now</Link>
        </div>
        <div data-aos="fade-in" data-aos-delay="50" className="scroll-icon">
          <a href="#collection">
            <div class="mouse-icon">
              <div class="wheel"></div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Homebanner;
