import React from "react";
import "./Homepage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="Home-container">
      <Navbar />
      <Footer/>
    </div>
  );
};

export default Homepage;
