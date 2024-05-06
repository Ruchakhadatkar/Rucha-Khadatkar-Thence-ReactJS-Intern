import React from "react";
import "./Navbar.css";
import brunelName from "../Assets/brunel-name.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="brand-name">
        <img src={brunelName} alt="app-name" />
      </div>
      <div className="button-list">
        <button className="get-projects-btn">Get Projects</button>
        <button className="onboard-btn">Onboard Talent</button>
      </div>
    </div>
  );
};

export default Navbar;
