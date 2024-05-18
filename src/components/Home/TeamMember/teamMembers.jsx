import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./teamMembers.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import team1 from "../../../../public/team1.jpg";
import team from "../../../../public/team.jpg";
import team4 from "../../../../public/team4.jpg";
import team2 from "../../../../public/team2.jpg";

const teamMembers = [
  {
    name: "Lewis Lucas",
    position: "IT Manager",
    image: team1,
  },
  {
    name: "Arturo Fuller",
    position: "Service Manager",
    image: team,
  },
  {
    name: "Velma Cain",
    position: "Managing Director",
    image: team2,
  },
  {
    name: "Marc Gibbs",
    position: "Executive Assistant",
    image: team4,
  },
];

function TeamSection() {
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
    <div className="team-section">
      <span data-aos="zoom-in">Our experience experts</span>
      <h2 data-aos="zoom-in" data-aos-delay="100">
        Team Member
      </h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-card"
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 100}>
            <div className="image-container">
              <img src={member.image} alt={member.name} />
              <div className="overlay">
                <div className="social-icons">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
