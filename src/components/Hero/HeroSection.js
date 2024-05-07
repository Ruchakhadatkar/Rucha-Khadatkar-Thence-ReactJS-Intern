import React from "react";
import "./HeroSection.css";
import { GoDotFill } from "react-icons/go";
import { GrFormNextLink } from "react-icons/gr";
import girlImg from "../../Assets/hero-section-image.png";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="top-hero">
        <div className="head">
          <p>Success stories</p>
        </div>
        <div className="heading">
          <p>Every success journey we’ve encountered.</p>
        </div>
      </div>
      <div className="bottom-hero">
        <div className="left">
          <div className="image">
            {" "}
            <img src={girlImg} alt="hero-img" />
          </div>
          <div className="box-percent">
            <h5>40%</h5>
            <p>
              Achieved reduction in project execution time by optimising team
              availability
            </p>
          </div>
          <div className="days-box">
            <i>
              <BsFillRocketTakeoffFill />
            </i>
            <div className="text">
              <h4>10 DAYS</h4>
              <p>Staf Deployment</p>
            </div>
          </div>
          <div className="doller-box">
            <p>
              <span>$0.5</span> MILLION{" "}
            </p>
            <p>
              Reduced client expenses by saving on hiring and employee costs.
            </p>
          </div>
        </div>
        <div className="right">
          <p>
            Enhance fortune 50 company’s insights teams research capabilities
          </p>
          <div className="dots">
            <GoDotFill className="green-dot" />
            <GoDotFill className="gray-dot" />
            <GoDotFill className="gray-dot" />
          </div>
          <button className="explore-btn">
            Explore More{" "}
            <i>
              <GrFormNextLink />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
