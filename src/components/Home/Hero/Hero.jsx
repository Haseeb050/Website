import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";
import hero from "../../../../public/hero.png";

function HeroSection() {
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
    <div className="hero-section">
      <div className="hero-content" data-aos="fade-right" data-aos-delay="200">
        <h3>TECHNOLOGY THAT MAKES A DIFFERENCE</h3>
        <h2>
          Reliable <span>IT</span> Support And
          <br /> Quality <span>Technology Solution</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua, magna
          aliqua.
        </p>
        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="200">
          <button className="button-3">Learn More</button>
          <button className="button-2">Contact Us</button>
        </div>
      </div>
      <div className="hero-image" data-aos="fade-left">
        <img src={hero} alt="Innovative Technology" />
      </div>
    </div>
  );
}

export default HeroSection;
