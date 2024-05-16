import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CounterSection.css";

function CounterSection() {
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    awards: 0,
  });

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

    const incrementCounts = () => {
      setCounts((prevCounts) => ({
        experience: prevCounts.experience < 27 ? prevCounts.experience + 1 : 27,
        projects: prevCounts.projects < 3000 ? prevCounts.projects + 30 : 3000,
        clients: prevCounts.clients < 1500 ? prevCounts.clients + 15 : 1500,
        awards: prevCounts.awards < 20 ? prevCounts.awards + 1 : 20,
      }));
    };

    const interval = setInterval(incrementCounts, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter-section">
      <div className="counter-container">
        <div className="counter" data-aos="fade-up">
          <h2>{counts.experience}+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="counter" data-aos="fade-up" data-aos-delay="100">
          <h2>{counts.projects}</h2>
          <p>Complete Projects</p>
        </div>
        <div className="counter" data-aos="fade-up" data-aos-delay="200">
          <h2>{counts.clients}+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="counter" data-aos="fade-up" data-aos-delay="300">
          <h2>{counts.awards}+</h2>
          <p>Award Winning</p>
        </div>
      </div>
    </div>
  );
}

export default CounterSection;
