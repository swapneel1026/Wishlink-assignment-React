import React from "react";
import "../css/ProductCard.css";

const ProductCard = () => {
  return (
    <div className="productCard-container">
      <div className="productCard1"></div>
      <div className="productCard2">
        <div className="productBrand">OLAY</div>
        <div className="productTitle">Olay White Radiance Creame</div>
        <div>
          <span className="productMrp">₹2,500</span>
          <span className="productOff">(20% OFF)</span>
        </div>

        <div className="productdiscPrice">₹2,000</div>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
