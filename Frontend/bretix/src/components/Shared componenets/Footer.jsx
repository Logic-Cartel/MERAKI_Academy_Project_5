import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
     
        <div className="footer-section about">
          <h2 className="footer-logo">Bretix</h2>
          <p>
            Eco Essentials Planet-Friendly. We provide the best organic and 
            sustainable products for a better future.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>


        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/stores">Stores</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

      
        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>📍  Amman, Jordan</p>
          <p>📞 +962775570312</p>
          <p>✉️ support@bretix.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025-2026 Bretix. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;