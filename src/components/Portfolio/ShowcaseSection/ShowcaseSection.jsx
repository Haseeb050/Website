// src/components/ShowcaseSection.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ShowcaseSection.css";
// import image1 from "../../../../public/image1.jpg"; // Ensure the paths are correct
import team from "../../../../public/team.jpg";
// import image3 from "../../../../public/image3.jpg";
// import image4 from "../../../../public/image4.jpg";
// import image5 from "../../../../public/image5.jpg";
// import image6 from "../../../../public/image6.jpg";

const ShowcaseSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  const showcaseItems = [
    {
      id: 1,
      img: team,
      title: "Web Development",
      description: "Creating Website Solutions",
      category: "IT Solution",
    },
    {
      id: 2,
      img: team,
      title: "iOS Apps",
      description: "Developing iOS Applications",
      category: "App Development",
    },
    {
      id: 3,
      img: team,
      title: "UI/UX Design",
      description: "Designing User Interfaces",
      category: "Design",
    },
    {
      id: 4,
      img: team,
      title: "Digital Marketing",
      description: "Marketing Digital Products",
      category: "Marketing",
    },
    {
      id: 5,
      img: team,
      title: "Blockchain",
      description: "Building Blockchain Solutions",
      category: "Blockchain",
    },
    {
      id: 6,
      img: team,
      title: "Cyber Security",
      description: "Ensuring Cyber Security",
      category: "Security",
    },
  ];

  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <h2 className="showcase-heading" data-aos="fade-up">
          <span>case Study</span>
          <br />
          Our Portfolio
        </h2>
        <div className="showcase-grid">
          {showcaseItems.map((item) => (
            <div
              className="showcase-item"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={item.id * 100}>
              <img src={item.img} alt={item.title} className="showcase-image" />
              <div className="showcase-overlay">
                <div className="showcase-overlay-content">
                  <h3>{item.category}</h3>
                  <p>{item.description}</p>
                  <div className="showcase-link">
                    <span>&#8594;</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
