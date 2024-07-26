import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PortfolioSection.css";
import axios from "axios";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);

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

    const fetchProjectsData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/portfolio");
        console.log(response.data);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchProjectsData();
  }, []);

  return (
    <div className="portfolio-section">
      <span className="portfolio-heading" data-aos="fade-up">
        CASE STUDIES
      </span>
      <h2
        className="portfolio-subheading"
        data-aos="fade-down"
        data-aos-delay="100">
        Our Portfolio
      </h2>
      <div className="portfolio-cards">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="portfolio-card"
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 100}>
            <img
              src={`http://localhost:5000${project.thumbnail}`}
              alt={project.title}
              className="portfolio-image"
            />
            <h3 className="portfolio-title">{project.title}</h3>
            <p className="portfolio-description">{project.description}</p>
            <Link to={`/portfolio`} className="portfolio-button">
              Read More
            </Link>
          </div>
        ))}
      </div>
      <Link to="#">
        <button
          className="see-more-button"
          data-aos="fade-up"
          data-aos-delay="700">
          See More
        </button>
      </Link>
    </div>
  );
};

export default PortfolioSection;
