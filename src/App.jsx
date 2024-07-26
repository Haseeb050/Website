import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import ContactUs from "./ContactUs";
import BackToTop from "./components/Home/scrollToTop/scrollToTop";
import Details from "./Details";

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <BackToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />{" "}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/servicesDetails" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
