import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WebsiteSolutions.css";
import choose from "../../../public/choose.png";

function WebsiteSolutions() {
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
    <div className="website-solutions-section">
      <div className="content" data-aos="fade-right">
        <h2>
          Creating <span>Website</span> Solutions
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="solutions-container">
          <button
            className="solution-card active"
            data-aos="fade-up"
            data-aos-delay="100">
            <span>E-Commerce Development</span>
          </button>
          <button
            className="solution-card"
            data-aos="fade-up"
            data-aos-delay="200">
            <span>Web Design</span>
          </button>
          <button
            className="solution-card"
            data-aos="fade-up"
            data-aos-delay="300">
            <span>WordPress Development</span>
          </button>
          <button
            className="solution-card"
            data-aos="fade-up"
            data-aos-delay="400">
            <span>Network Monitoring</span>
          </button>
          <button
            className="solution-card"
            data-aos="fade-up"
            data-aos-delay="500">
            <span>Page Speed Optimization</span>
          </button>
          <button
            className="solution-card"
            data-aos="fade-up"
            data-aos-delay="600">
            <span>Shopify Development</span>
          </button>
        </div>
      </div>
      <div className="image-container" data-aos="zoom-in">
        <img src={choose} alt="Creating Website Solutions" />
      </div>
    </div>
  );
}

export default WebsiteSolutions;
