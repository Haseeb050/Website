import React from "react";
import AboutNavbar from "./components/About/AboutNavbar/AboutNavbar";
import PortfolioHeroSection from "./components/Portfolio/PortfolioHeroSection/PortfolioHeroSection";
import ShowcaseSection from "./components/Portfolio/ShowcaseSection/ShowcaseSection";
import Footer from "./components/Home/Footer/Footer";

const Portfolio = () => {
  return (
    <div>
      <AboutNavbar />
      <PortfolioHeroSection />
      <ShowcaseSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
