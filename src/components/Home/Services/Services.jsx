import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import {
  FaWrench,
  FaCode,
  FaNetworkWired,
  FaServer,
  FaDatabase,
  FaCloud,
} from "react-icons/fa"; // Example icons, use appropriate ones

function Services() {
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
    <div className="services-section">
      <span data-aos="fade-up">INDUSTRIES WE SERVE</span>
      <h2 data-aos="fade-up" data-aos-delay="300">
        Our Services
      </h2>
      <div className="services-container">
        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <FaWrench className="service-icon" />
          <h3>IT Solution</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim
            minim.
          </p>
          <a href="/servicesDetails">Read More</a>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <FaCode className="service-icon" />
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim
            minim.
          </p>
          <a href="/servicesDetails">Read More</a>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <FaNetworkWired className="service-icon" />
          <h3>Networking Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim
            minim.
          </p>
          <a href="/servicesDetails">Read More</a>
        </div>
        <div className="service-card" data-aos="zoom-in" data-aos-delay="700">
          <FaServer className="service-icon" />
          <h3>Server Management</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim
            minim.
          </p>
          <a href="/servicesDetails">Read More</a>
        </div>
        <div className="service-card" data-aos="zoom-in" data-aos-delay="600">
          <FaDatabase className="service-icon" />
          <h3>Database Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim
            minim.
          </p>
          <a href="/servicesDetails">Read More</a>
        </div>
        <div className="service-card" data-aos="zoom-in" data-aos-delay="1000">
          <FaCloud className="service-icon" />
          <h3>Cloud Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim
            minim.
          </p>
          <a href="/servicesDetails">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default Services;
