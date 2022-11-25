import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_wrapper">
        <div className="header_company">
          <img src="./assets/house.png" alt=""></img>
          <p>The Assetorium</p>
        </div>
        <div className="header_options">
          <div className="options">Buy</div>
          <div className="options">Rent</div>
          <div className="options">About Us</div>
          <div className="options">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
