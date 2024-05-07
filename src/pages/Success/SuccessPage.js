import React from "react";
import "./SucessPage.css";
import brunelimg from "../../Assets/brunel-name.png";
import checkBox from "../../Assets/chech-box.webp"

const SuccessPage = () => {
  return (
    <div className="sucess-container">
      <div className="nav">
        <img src={brunelimg} alt="" />
      </div>
      <div className="main-container">
        <img src={checkBox} alt="sucess-info" />
        <p className="status-success">success submitted</p>
        <p className="cong">Congratulations</p>
        <p className="message">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
        <div className="end-message">
          <p>
            Redirecting you to homepage in <span>5 seconds</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
