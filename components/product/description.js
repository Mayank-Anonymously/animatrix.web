import React from "react";
import DescriptionText from "./product-text/description-text";
import Specification from "./specification";

const Description = ({ description }) => {
  return (
    <section id="description">
      <div class="auto-container">
        <div class="description-container">
          <div class="col col-lg-6 col-md-6 col-sm-8">
            <DescriptionText description={description} />
          </div>
          <div class="col col-lg-6 col-md-6 col-sm-8">
            <Specification />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
