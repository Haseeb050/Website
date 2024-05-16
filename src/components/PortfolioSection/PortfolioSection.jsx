import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PortfolioSection.css";
import blog from "../../../public/blog.jpg";
import blog1 from "../../../public/blog1.jpg";

const projects = [
  {
    image: blog,
    title: "The Biggest Trends in Technology We've Seen This Year",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: blog1,
    title: "The Biggest Trends in Technology We've Seen This Year",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: blog,
    title: "The 17 Most Misunderstood Facts About Technology",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    image: blog1,
    title: "Improving Business Performance With Augmented Intelligence!",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    image: blog,
    title: "The 17 Most Misunderstood Facts About Technology",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
  {
    image: blog1,
    title: "The Biggest Trends in Technology We've Seen This Year",
    description:
      "Mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const PortfolioSection = () => {
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
    <div className="portfolio-section">
      <span data-aos="fade-up">CASE STUDIES</span>
      <h2 className="section-heading" data-aos="fade-down" data-aos-delay="100">
        Our Portfolio
      </h2>
      <div className="portfolio-cards">
        {projects.map((project, index) => (
          <div
            key={index}
            className="portfolio-card"
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 100}>
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-image"
            />
            <h3 className="portfolio-title">{project.title}</h3>
            <p className="portfolio-description">{project.description}</p>
            <button className="portfolio-button">Read More</button>
          </div>
        ))}
      </div>
      <button
        className="see-more-button"
        data-aos="fade-up"
        data-aos-delay="700">
        See More
      </button>
    </div>
  );
};

export default PortfolioSection;
