// src/components/BackToTop.js
import React, { useState, useEffect } from "react";
import "./scrollToTop.css";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? "show" : ""}`}>
      <div onClick={scrollToTop} className="back-to-top-icon">
        <FaArrowUp />
      </div>
    </div>
  );
};

export default BackToTop;
