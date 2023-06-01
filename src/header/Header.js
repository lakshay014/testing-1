import React from "react";

import Logo from "../assets/logo.jpg";

import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="left">
        <div className="headerlogo">
          <img src={Logo} alt="logo" />
        </div>
        <p className="heading">Make your own email.</p>
      </div>
    </div>
  );
}

export default Header;
