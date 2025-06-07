import React from 'react';
import { useEffect } from 'react';
import '../styles/Resource.css';
import Navbar from '../Components/Navbar';
import img1 from '../assets/images/img_rectangle_82.png';
import img2 from '../assets/images/img__4.png';
import img3 from '../assets/images/img_rectangle_83.png';
import img4 from '../assets/images/img_rectangle_85.png';
import img5 from '../assets/images/img_rectangle_86.png';
import img6 from '../assets/images/img_rectangle_85_236x301.png';
import ctaBg from '../assets/images/img_rectangle_4311.png';
import ctaMask from '../assets/images/img_mask_group.png';

const Resources = () => {
  useEffect(() => {
    // Mobile menu toggle
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Smooth scrolling
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Hover effect on cards
    const serviceCards = document.querySelectorAll('.card-hover');
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  }, []);
  return (
    <>
    <Navbar />
    <section className="industry-section">
      <div className="industry-container">
        <h2 className="industry-title">Industry We Service Provide</h2>
        <p className="industry-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel.
        </p>

        <div className="industry-grid">
          {/* Left Column */}
          <div className="industry-column">
            <div className="image-wrapper">
              <img src={img1} alt="Industry" className="industry-image" />
              <div className="overlay">
                <p className="overlay-text">Lorem ipsum dolor sit amet, consectetur elit.</p>
              </div>
            </div>

            <div className="bg-card" style={{ backgroundImage: `url(${img2})` }}>
              <h3 className="card-title">Title 2</h3>
            </div>
          </div>

          {/* Middle Column */}
          <div className="industry-column">
            <img src={img3} alt="Industry" className="industry-image" />
            <div className="image-wrapper">
              <div className="overlay">
                <p className="overlay-text">Lorem ipsum dolor sit amet, consectetur elit.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <div className="image-wrapper">
              <img src={img4} alt="Industry" className="large-image" />
              <h3 className="card-title-top">Title 1</h3>
            </div>
          </div>

          {/* Additional Images */}
          <div className="image-wrapper small">
            <img src={img5} alt="Industry" className="industry-image" />
            <div className="overlay">
              <p className="overlay-text">Lorem ipsum dolor sit amet, consectetur elit.</p>
            </div>
          </div>

          <div className="text-image">
            <img src={img6} alt="Industry" className="industry-image" />
            <p className="below-text">Lorem ipsum dolor sit amet, consectetur elit.</p>
          </div>
        </div>
      </div>
    </section><section className="cta-section">
        <img src={ctaBg} alt="CTA Background" className="cta-bg" />
        <div className="cta-content">
          <div className="cta-inner">
            <div className="cta-label">
              <div className="cta-line" />
              <span className="cta-tag">CTA</span>
            </div>
            <h2 className="cta-title">Browse our collection of 50+ Webflow Templates</h2>
            <button className="cta-button">Browse templates</button>
          </div>
          <img src={ctaMask} alt="Decorative" className="cta-mask" />
        </div>
      </section>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <h3 className="footer-heading-lg">Ready to get started?</h3>
              <button className="footer-cta-button">Get started</button>
            </div>
            <div>
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-links">
                <li><a href="#">Email Marketing</a></li>
                <li><a href="#">Campaigns</a></li>
                <li><a href="#">Branding</a></li>
                <li><a href="#">Offline</a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-heading">About</h3>
              <ul className="footer-links">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Benefits</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-heading">Help</h3>
              <ul className="footer-links">
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-legal">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="footer-social">
              <a href="#"><img src="../assets/images/img_path.svg" alt="Twitter" /></a>
              <a href="#"><img src="../assets/images/img_path_white_a700.svg" alt="Facebook" /></a>
              <a href="#"><img src="../assets/images/img_004instagram.svg" alt="Instagram" /></a>
            </div>
          </div>
        </div>
      </footer>

      </>

    
  );
};

export default Resources;
