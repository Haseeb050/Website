import React from "react";
import AboutNavbar from "./components/About/AboutNavbar/AboutNavbar";
import ServicesHeroSection from "./components/Services/ServicesHeroSection/ServicesHeroSection";
import ServicesPage from "./components/Services/ServicesPage/ServicesPage";
import WebsiteSolutions from "./components/Home/WebsiteSolutions/WebsiteSolutions";
import Expert from "./components/Home/Expert/Expert";
import Footer from "./components/Home/Footer/Footer";

const Services = () => {
  return (
    <>
      <AboutNavbar />
      <ServicesHeroSection />
      <ServicesPage />
      <WebsiteSolutions />
      <Expert />
      <Footer />
    </>
  );
};

export default Services;
