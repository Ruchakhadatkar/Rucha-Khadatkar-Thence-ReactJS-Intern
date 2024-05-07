import React from "react";
import "./RegistrationPage.css";
import brunelImg from "../../Assets/brunel-name.png";
import { RxCross1 } from "react-icons/rx";

const RegistrationPage = () => {
  return (
    <div className="container-registration">
      <div className="nav">
        <img src={brunelImg} alt="" />
        <i>
          <RxCross1 />
        </i>
      </div>
      <form>
        <div className="head">
          <p> Registration Form</p>
        </div>
        <div className="heading">
          <p>Start your sucess Journey here!</p>
        </div>
        <div className="inputs">
          <input type="text" placeholder="Enter your name" />
          <input type="text" placeholder="Enter your email" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
