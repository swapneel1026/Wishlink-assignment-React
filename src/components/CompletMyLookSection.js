import React from "react";
import "../css/CompleteMyLook.css";

import AccordionComp from "./Accordion";

const CompletMyLookSection = () => {
  return (
    <>
      <div className="dropdown">
        <div className="dropdownHeading">Complete my look</div>
        <div>
          <AccordionComp />
        </div>
      </div>
    </>
  );
};

export default CompletMyLookSection;
