import React from 'react';
import '../asserts/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="home-footer">
      <div className="home-footer-content">
        <div className="home-footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to providing the best event management solutions.</p>
        </div>
        <div className="home-footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@ecofy.com</p>
          <p>Phone: +91 9894761721</p>
        </div>
        <div className="home-footer-section">
          <h3>Follow Us</h3>
          <div className="home-footer-socials">
            <a href="https://www.facebook.com/adish.adish.735" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://x.com/adish_aX" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/_adish_sta" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/adish-a-717735258/" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="home-footer-bottom">
        <p>&copy; 2024 EcoFy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
