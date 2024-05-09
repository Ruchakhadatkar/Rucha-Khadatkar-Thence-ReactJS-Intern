import React, { useState } from "react";
import "./RegistrationPage.css";
import brunelImg from "../../Assets/brunel-name.png";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { MdError } from "react-icons/md";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({ email: "", name: "" });

  const handleSuccess = () => {
    navigate("/success");
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (!formErrors.email && !formErrors.name) {
      handleSuccess();
    }
  };

  const validate = () => {
    const formErrors = {};

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!validator.isEmail(email)) {
      formErrors.email = "Enter a valid email address";
    } else {
      formErrors.email = "";
    }

    // if (!name) {
    //   formErrors.name = "Name is required";
    // } else if (name.length < 2) {
    //   formErrors.name = "Name is too short";
    // } else {
    //   formErrors.name = "";
    // }

    return formErrors;
  };

  const isDisabled = !email || !name || errors.email || errors.name;

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
      <form onSubmit={handleSubmit}>
        <div className="head">
          <p>Registration Form</p>
        </div>
        <div className="heading">
          <p>Start your success journey here!</p>
        </div>
        <div className="inputs">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <div className="error">{errors.name}</div>}

          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <div className="error">
              <i>
                <MdError />
              </i>
              {errors.email}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isDisabled}
          className={isDisabled ? "disabled" : "enabled"}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
