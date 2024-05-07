import React from "react";
import "./Homepage.css";
import AskQuestions from "../../components/AskQuestions/AskQuestions";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/Hero/HeroSection";

const Homepage = () => {
  return (
    <div className="Home-container">
      <Navbar />
      <HeroSection/>
      <AskQuestions />
      <Footer />
    </div>
  );
};

export default Homepage;
