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
              <li>Small - 42</li>
              <li>Medium - 43.5</li>
              <li>Large - 45</li>
              <li>Extra Large - 46</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Product Details</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>100% Cotton Bio Washed</li>
              <li>180GSM Fabric weight</li>
              <li>Breathable and top quality fabric</li>
              <li>Long Lasting 3D Puff and screen printing </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Specification;
