import React from "react";
import "./Homepage.css";
import AskQuestions from "../../components/AskQuestions/AskQuestions";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <div className="Home-container">
      <Navbar />
      <AskQuestions />
      <Footer />
    </div>
  );
};

export default Homepage;
