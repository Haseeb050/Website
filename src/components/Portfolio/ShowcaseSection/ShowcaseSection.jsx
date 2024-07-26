import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ShowcaseSection.css";
import axios from "axios";
import Modal from "react-modal";

// Set app element for accessibility
Modal.setAppElement("#root");

const ShowcaseSection = () => {
  const [projects, setProjects] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetchProjectsData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/portfolio");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchProjectsData();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <h2 className="showcase-heading" data-aos="fade-up">
          <span>case Study</span>
          <br />
          Our Portfolio
        </h2>
        <div className="showcase-grid">
          {projects.map((project, index) => (
            <div
              className="showcase-item"
              key={project._id}
              data-aos="fade-up"
              data-aos-delay={index * 100}>
              <img
                src={`http://localhost:5000${project.thumbnail}`}
                alt={project.title}
                className="showcase-image"
              />
              <div className="showcase-overlay">
                <div className="showcase-overlay-content">
                  <h3>{project.title}</h3>

                  <div
                    className="showcase-link"
                    onClick={() => openModal(project)}>
                    <span>&#8594;</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Images"
          className="project-modal"
          overlayClassName="project-overlay">
          <button onClick={closeModal} className="close-modal-button">
            &times;
          </button>

          {selectedProject.images.length > 0 ? (
            <div className="project-images">
              {selectedProject.images.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:5000${image}`}
                  alt={`Project image ${index + 1}`}
                  className="modal-image"
                />
              ))}
            </div>
          ) : (
            <p className="no-images-message">
              No images available for this project.
            </p>
          )}
        </Modal>
      )}
    </section>
  );
};

export default ShowcaseSection;
