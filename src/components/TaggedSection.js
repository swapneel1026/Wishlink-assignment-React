// import React, { useRef } from "react";
import "../css/TaggedSectionContainer.css";
import ProductCard from "./ProductCard";
import offerTag from "../assets/offerTag.svg";
// import { TbBrandWhatsapp } from "react-icons/tb";

const TaggedSection = () => {
  // const whtsapp = useRef();
  return (
    <div className="TaggedSectionContainer">
      <div className="TaggedSectionHeading">Tagged Products (2)</div>
      <div className="TaggedProductsList">
        <ProductCard />
        <ProductCard />
        <img className="offertag" src={offerTag} alt={"offer"} />
      </div>
      {/* <div className="whatsapp-container">
        <TbBrandWhatsapp ref={whtsapp} size={"2.25rem"} color={"white"} />
      </div> */}
    </div>
  );
};

export default TaggedSection;
