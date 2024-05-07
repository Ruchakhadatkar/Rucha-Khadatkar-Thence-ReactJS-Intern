import React from "react";
import "./Footer.css";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="left-footer">
        <i>
          <FaRegCopyright />
        </i>
        <p>Talup 2023. All rights reserved</p>
      </div>
      <div className="right-footer">
        <a href="">
          <p>Terms & Conditions</p>
        </a>
        <a href="">
          <p>Privacy Policy</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
