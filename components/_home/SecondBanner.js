import React from "react";

const SecondBanner = (props) => {
  const { mainhead, title, image } = props;

  return (
    <>
      <div
        className="container-fluid secondbanner"
        style={{
          backgroundImage: `url(${image})`,
          // backgroundImage: `url("/images/girl.jpg")`,
          backgroundBlendMode: "multiply",
          backgroundColor: "#0000004f",
        }}
      >
        <div
          className="container second-banner-container"
          style={{ paddingTop: "200px" }}
        >
          <h1 data-aos="fade-up">{mainhead}</h1>
          <h3 data-aos="fade-up">{title}</h3>
        </div>
      </div>
    </>
  );
};

export default SecondBanner;
