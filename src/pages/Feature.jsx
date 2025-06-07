// src/pages/Feature.jsx
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import productImg from "../assets/images/img_unsplashqrwadbcqysc.png";
import star from "../assets/images/img_star.svg";
import vectorIcon from "../assets/images/img_vector.svg";
import "../styles/Feature.css";
import bgImage from "../assets/images/img_.png"; // Add at the top with other imports

function Feature() {
  return (
    <div className="feature-wrapper">
      <Navbar />

      <section className="feature-section">
        <div className="feature-container">
          <div className="feature-text">
            <h2>THE eWatch with the newest microchip technology</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget diam.
            </p>
            <div className="feature-buttons">
              <button>
                <div>
                  <img src={vectorIcon} alt="Icon" />
                </div>
                <span>Get In Touch</span>
              </button>
              <button>
                <div>
                  <img src={vectorIcon} alt="Icon" />
                </div>
                <span>Get In Touch</span>
              </button>
            </div>
          </div>

          <div className="feature-image-block">
            <div className="outer-box">
              <div className="inner-box"></div>
              <img src={productImg} alt="Product" className="product-image" />

              <img src={star} alt="Star" className="star-top-left" />
              <img src={star} alt="Star" className="star-bottom-right" />

              <div className="circle-outline"></div>

              <div className="label-ergonomic">
                <p>Ergonomic design</p>
              </div>
              <div className="label-award">
                <p>Award winning product</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
  className="testimonial-section"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="testimonial-container">
    <h3>Emily Rolando</h3>
    <p>
      I recently started learning to code with Tian and it's been a game-changer.
      The lessons are clear and engaging, perfect for beginners like me. I've already built my first app
      thanks to their hands-on approach. Highly recommend Tian for anyone starting their coding journey!
    </p>
  </div>
</section>


      <Footer />
    </div>
  );
}

export default Feature;
