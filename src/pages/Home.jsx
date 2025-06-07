// src/pages/Home.jsx
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import heroRobot from "../assets/images/img_genkub_greeting_robot11536x730_1.png";
import bgShape from "../assets/images/img_subtract.png";
import bgAbstract from "../assets/images/img_abstractflowingneonwavebackground_1.png";
import partner1 from "../assets/images/img_4_2.png";
import partner2 from "../assets/images/img_4_2_63x210.png";
import partner3 from "../assets/images/img_4_2_1.png";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home-wrapper">
      <Navbar />

      <section className="hero-section">
        <img src={bgShape} alt="Background Shape" className="bg-shape" />
        <img src={bgAbstract} alt="Abstract BG" className="bg-abstract" />

        <div className="hero-content">
          <h1>Transform Your Imagination to <br /><span>3D Visuals</span></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="about-btn">
            <span>About Us</span>
          </button>
        </div>

        <div className="hero-image float-animation">
          <img src={heroRobot} alt="3D Robot" />
        </div>

        <div className="partner-logos">
          {[partner1, partner2, partner3, partner1, partner2, partner3].map((logo, index) => (
            <img src={logo} alt={`Partner ${index}`} key={index} />
          ))}
        </div>

        <div className="bottom-fade"></div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
