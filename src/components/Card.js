import React from "react";
import "../css/Card.css";

const Card = () => {
  return (
    <div className="cardContainer">
      <div className="avatar"></div>
      <div className="cardDetailsAndButton">
        <div className="CardDetails">
          <div className="title">TRACE</div>
          <div className="description">Long red slit dress</div>
          <div className="CardPrices">
            <div className="price">₹1,600</div>
            <div className="priceDrop">₹2,000</div>
            <div className="priceOff">(20% OFF)</div>
          </div>
        </div>
        <button className="cardButton">Shop</button>
      </div>
    </div>
  );
};

export default Card;
