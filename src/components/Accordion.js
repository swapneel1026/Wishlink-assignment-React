import React from "react";
import { Accordion } from "react-bootstrap";
import ProductCard from "./ProductCard";

const AccordionComp = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h4>DIOR Backstage Foundation</h4>
        </Accordion.Header>
        <Accordion.Body>
          <div className="Accordion-content">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h4>DIOR Backstage Foundation</h4>
        </Accordion.Header>
        <Accordion.Body>
          <div className="Accordion-content">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionComp;
