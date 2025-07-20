import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../styles/Service.css";

import serviceImg0 from "../assets/images/img__0x0.png";
import serviceImg1 from "../assets/images/img__1.png";
import serviceImg2 from "../assets/images/img__2.png";
import serviceImg3 from "../assets/images/img__3.png";

function Services() {
  const services = [
    { id: "01", img: serviceImg0 },
    { id: "02", img: serviceImg1 },
    { id: "03", img: serviceImg2 },
    { id: "04", img: serviceImg3 },
  ];

  return (
    <div className="service-wrapper">
      
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2>Design Service We Provide Our Clients</h2>
            <button className="view-all-button">
              <span>VIEW ALL</span>
            </button>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <h3>{service.id}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${service.img})` }}
                >
                  <div className="card-overlay">
                    <h4>Title</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero
                      risus
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
<section className="tools-section">
  <div className="container">
    <div className="tools-content">
      <div className="tools-text">
        <h2>Tool That We For Our Projects</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer facilisi eget.
        </p>
      </div>

      <div className="tools-grid">
        <img src="../assets/images/img_frame_14196.png" alt="Tool" />
        <img src="../assets/images/img_frame_14196_135x121.png" alt="Tool" />
        <img src="../assets/images/img_frame_14198_135x121.png" alt="Tool" />
        <img src="../assets/images/img_frame_14197_1.png" alt="Tool" />
        <img src="../assets/images/img_frame_14197.png" alt="Tool" />
        <img src="../assets/images/img_frame_14197_135x121.png" alt="Tool" />
        <img src="../assets/images/img_frame_14198_1.png" alt="Tool" />
        <img src="../assets/images/img_frame_14198_2.png" alt="Tool" />
        <img src="../assets/images/img_frame_14198.png" alt="Tool" />
        <img src="../assets/images/img_frame_14199.png" alt="Tool" />
      </div>
    </div>
  </div>
</section>


      
    </div>
  );
}

export default Services;
