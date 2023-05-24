import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Specification = () => {
  return (
    <div class="specification">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Size</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>40 x 30 x 0,3 cm (15,7 x 11,9 x 0,12 inches).</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Product Details</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Original oil painting on wooden board</li>
              <li>Date of origin: 19.02.2022</li>
              <li>Unframed, signature on the back</li>
              <li>Certificate of authenticity included </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Specification;
