import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DetailsHeroSection.css";
import background from "../../../../public/banner.jpg"; // Ensure the path is correct

const ServicesHeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div
      className="about-hero-section"
      style={{ backgroundImage: `url(${background})` }}
      data-aos="fade-in">
      <div className="about-hero-content" data-aos="fade-up">
        <h1>Services Details</h1>
        <p>
          <Link to="/" className="home-link">
            HOME
          </Link>{" "}
          • Details - SERVICES
        </p>
      </div>
    </div>
  );
};

export default ServicesHeroSection;
