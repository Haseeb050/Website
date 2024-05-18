import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Expert.css";
import Experts from "../../../../public/Expert.png";

function Expert() {
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
    <div className="website-solutions-left-section">
      <div className="image-container" data-aos="fade-right">
        <img src={Experts} alt="Creating Website Solutions" />
      </div>
      <div className="content" data-aos="fade-up">
        <span id="span">DISCOVER OUR COMPANY</span>
        <h2>Expert Advice to Grow Your Business</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="solutions-container">
          <button
            className="solution-card active"
            data-aos="zoom-in"
            data-aos-delay="100">
            <span>Discovery & Strategy</span>
          </button>
          <button
            className="solution-card"
            data-aos="zoom-in"
            data-aos-delay="200">
            <span>UX/UI Design</span>
          </button>
          <button
            className="solution-card"
            data-aos="zoom-in"
            data-aos-delay="300">
            <span>iOS apps (Swift)</span>
          </button>
          <button
            className="solution-card"
            data-aos="zoom-in"
            data-aos-delay="400">
            <span>Android apps (Java)</span>
          </button>
          <button
            className="solution-card"
            data-aos="zoom-in"
            data-aos-delay="500">
            <span>Managed IT Service</span>
          </button>
          <button
            className="solution-card"
            data-aos="zoom-in"
            data-aos-delay="600">
            <span>Cloud Services</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Expert;
