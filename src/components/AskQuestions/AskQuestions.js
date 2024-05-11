import React from "react";
import "./AskQuestions.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const AskQuestions = () => {
  return (
    <div className="askQuestion-container">
      <div className="left-side">
        <p className="top-left">What's on your mind</p>
        <p className="heading-left">Ask Questions</p>
        <div className="arrow-container">
          {/* <i className="first-vector">
            < TbCurrencyLeu className="vector" />
          </i>
          <i>
            <FaWindowMinimize  className="union" />
          </i> */}
        </div>
      </div>
      <div className="right-side">
        <div className="question">
          <p>Do you offer freelancers?</p>
          <i>
            <FaPlus />
          </i>
        </div>
        <hr />
        <div className="question">
          <p>
            What's the guarantee that I will be satisfied with the hired talent?
          </p>
          <i>
            <FaPlus />
          </i>
        </div>
        <hr />

        <div className="question">
          <div className="QandA">
            <div className="question ques-ans">
              {" "}
              <p>Can I hire multiple talents at once?</p>
              <i>
                <FaMinus />
              </i>
            </div>
            <p className="answer">
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and refer to the agreement. Escalate to platform
              support if needed, considering mediation. Review policies, seek
              collaborative solutions for resolution.
            </p>
          </div>
        </div>
        <hr />

        <div className="question">
          <p> Why should i not go to an agency directly?</p>
          <i>
            <FaPlus />
          </i>
        </div>
        <hr />

        <div className="question">
          <p>Who can help me pick a right skillset and duration for me?</p>
          <i>
            <FaPlus />
          </i>
        </div>
      </div>
    </div>
  );
};

export default AskQuestions;
