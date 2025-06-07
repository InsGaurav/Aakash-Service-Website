// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/assets/images/img_social_media_twitch.svg" alt="Logo" />
          <span>Logo Here</span>
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/features">Feature</Link>
          <Link to="/resources">Resource</Link>
          {/* <Link to="/career">Career</Link> */}
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>

        <button className="navbar-button">
          <div className="navbar-icon">
            <img src="/assets/images/img_vector.svg" alt="Arrow Icon" />
          </div>
          <span>Get In Touch</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
