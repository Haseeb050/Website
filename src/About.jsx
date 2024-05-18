import React from "react";
import AboutNavbar from "./components/About/AboutNavbar/AboutNavbar";
import AboutHeroSection from "./components/About/AboutHeroSection/AboutHeroSection";
import AboutSectionComponent from "./components/About/AboutSectionComponent/AboutSectionComponent";
import CounterSection from "./components/Home/CounterSection/CounterSection";
import TeamSection from "./components/Home/TeamMember/teamMembers";
import ClientCarousel from "./components/Home/Testimonials/ClientCarousel";
import Footer from "./components/Home/Footer/Footer";

const About = () => {
  return (
    <>
      <AboutNavbar />
      <AboutHeroSection />
      <AboutSectionComponent />
      <CounterSection />
      <TeamSection />
      <ClientCarousel />
      <Footer />
    </>
  );
};

export default About;
