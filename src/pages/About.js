import React from "react";
import Multiple from "../assets/banner.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Multiple})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        A React Website Tutorial | ReactJS Tutorial For Beginners

        </p>
      </div>
    </div>
  );
}

export default About;
