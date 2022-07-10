import React from "react";
import "../css/NavbarComponent.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import profileimg from "../assets/profile.png";
import { MdVerified } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const NavbarComponent = () => {
  return (
    <div className="navbar">
      <AiOutlineArrowLeft className="arrow" />
      <div className="profileimg">
        <img src={profileimg} alt="Profile" />
      </div>
      <div className="profilename">Maitreya Dutta</div>
      <MdVerified className="verified" color="#76B6FB" size={"2rem"} />
      <IoIosSearch className="search" size={"2.6rem"} />
    </div>
  );
};

export default NavbarComponent;
