import React from "react";
import "../css/FavouritesSection.css";

import Img1 from "../assets/summerODTD.png";
import Img2 from "../assets/AfforableDresses.png";
import Img3 from "../assets/summerODTD2.png";
import Img4 from "../assets/summerODTD3.png";
const FavouritesSection = () => {
  return (
    <div className="favouritesContainer">
      <div className="favouritesHeading">More from my favorites</div>
      <div className="favouritesSubHeading">
        Shop all my posts specially curated for you
      </div>
      <div className="gallery">
        <div className="column">
          <img src={Img1} alt="Img1" />
          <img src={Img2} alt="Img2" />
          <img src={Img3} alt="Img3" />
          <img src={Img4} alt="Img4" />
        </div>
        <div className="column">
          <img src={Img2} alt="Img2" />
          <img src={Img1} alt="Img1" />
          <img src={Img1} alt="Img1" />
          <img src={Img4} alt="Img4" />
        </div>
      </div>
      <div className="btnDiv">
        <button className="favouritBtn">See All Products</button>
      </div>
      <p className="powered">Powered by Wishlink</p>
    </div>
  );
};

export default FavouritesSection;
