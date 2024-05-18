// src/components/AboutSectionComponent.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutSectionComponent.css";
import rightImage from "../../../../public/about.jpg"; // Ensure the path is correct

const AboutSectionComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });

    const progressBars = document.querySelectorAll(".about-progress-bar");

    progressBars.forEach((bar) => {
      bar.style.width = "0%";
    });

    const fillProgressBars = () => {
      progressBars.forEach((bar) => {
        const value = bar.getAttribute("data-value");
        bar.style.width = `${value}%`;
      });
    };

    window.addEventListener("load", fillProgressBars);

    return () => {
      window.removeEventListener("load", fillProgressBars);
    };
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <div className="about-heading">
              Our <span className="about-highlight">Mission</span> Is To Make
              Your Business Better Through Technology.
            </div>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="about-skills">
              <div
                className="about-skill"
                data-aos="fade-up"
                data-aos-delay="500">
                <span>Web Development</span>
                <div className="about-progress">
                  <div className="about-progress-bar" data-value="90"></div>
                </div>
                <span className="about-percentage">90%</span>
              </div>
              <div
                className="about-skill"
                data-aos="fade-up"
                data-aos-delay="100">
                <span>iOS Apps</span>
                <div className="about-progress">
                  <div className="about-progress-bar" data-value="75"></div>
                </div>
                <span className="about-percentage">75%</span>
              </div>
              <div
                className="about-skill"
                data-aos="fade-up"
                data-aos-delay="200">
                <span>Discovery & Strategy</span>
                <div className="about-progress">
                  <div className="about-progress-bar" data-value="95"></div>
                </div>
                <span className="about-percentage">95%</span>
              </div>
            </div>
          </div>
          <div className="about-image" data-aos="fade-up" data-aos-delay="400">
            <img src={rightImage} alt="Right side illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionComponent;
