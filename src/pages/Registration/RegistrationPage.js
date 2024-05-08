import React from "react";
import "./RegistrationPage.css";
import brunelImg from "../../Assets/brunel-name.png";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/success");
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="container-registration">
      <div className="nav">
        <img src={brunelImg} alt="" />
        <div className="close" onClick={handleClose}>
          <i>
            <RxCross1 />
          </i>
        </div>
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
        <button onClick={handleSuccess}>Submit</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
