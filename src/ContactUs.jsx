import React from "react";
import AboutNavbar from "./components/About/AboutNavbar/AboutNavbar";
import ContactHeroSection from "./components/ContactUs/ContactHeroSection/ContactHeroSection";
import GetInTouchSection from "./components/ContactUs/GetInTouchSection/GetInTouchSection";
import Footer from "./components/Home/Footer/Footer";

const ContactUs = () => {
  return (
    <>
      <AboutNavbar />
      <ContactHeroSection />
      <GetInTouchSection />
      <Footer />
    </>
  );
};

export default ContactUs;
