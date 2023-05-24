import React from "react";

const DescriptionText = ({ description }) => {
  return (
    <div>
      <span>
        <h3>Product Information</h3>
      </span>
      <span>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </span>
    </div>
  );
};

export default DescriptionText;
