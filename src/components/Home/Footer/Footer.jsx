import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content" data-aos="fade-up" data-aos-delay="400">
        <div className="footer-logo" data-aos="fade-up">
          <h2>TECHMAX</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco consectetur
            laboris.
          </p>
          <div className="footer-social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3>Our Services</h3>
            <hr />
            <ul>
              <li>
                <a href="#">IT Solution</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Networking Services</a>
              </li>
              <li>
                <a href="#">SEO Optimization</a>
              </li>
              <li>
                <a href="#">App Optimization</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <hr />
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Case Study</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Information</h3>
            <hr />
            <p>Phone: +000 313 577 111</p>
            <p>Email: demo@example.com</p>
            <p>Address: 4035 Heavens, Los Angeles, California</p>
            <div className="footer-subscribe">
              <input type="email" placeholder="Enter Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 Techmax - All Rights Reserved.</p>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
