import React from "react";

const HomeSection = () => {
  return (
    <div class="home_page">
      <div class="home_img">
        <img src={"/resource/images/background.jpeg"} alt="img" />
      </div>
      <div class="home_img_responsive">
        <img src={"/resource/images/background_black.jpg"} alt="img" />
      </div>
      <div class="home_txt" data-aos="fade-up">
        <h2>
          Welcome To
          <br />
          My Shop
        </h2>
        <div class="home_label ">
          <p>
            A specialist label creating luxury essentials. Ethically crafted
            <br />
            with an unwavering commitment to exceptional quality.
          </p>
        </div>
        <button>
          <a href="/shop">SHOP NOW</a>
          <i class="bx bx-right-arrow-alt"></i>
        </button>
        <div class="home_social_icons">
          <a href="#">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i class="bx bxl-pinterest"></i>
          </a>
          <a href="#">
            <i class="bx bxl-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
