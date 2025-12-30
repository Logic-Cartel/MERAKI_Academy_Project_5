import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* قسم التعريف بالشعار */}
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

        {/* قسم الروابط السريعة */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/stores">Stores</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* قسم التواصل */}
        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>📍 123 Eco Street, Amman, Jordan</p>
          <p>📞 +962 700 000 000</p>
          <p>✉️ support@bretix.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Bretix. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;