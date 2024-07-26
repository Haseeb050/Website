import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Nav.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar sticky-top">
      <div className="logo">TECHMAX</div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={toggleMenu}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
      <button className="quote-button">Get Quotes</button>
      <div className="menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          style={{
            transform: isOpen ? "rotate(90deg)" : "none",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
