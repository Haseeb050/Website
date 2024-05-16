import React from "react";
import HeroSection from "./components/Hero/Hero";
import Navbar from "./components/Header/Nav";
import Services from "./components/Services/Services";
import WebsiteSolutions from "./components/WebsiteSolutions/WebsiteSolutions";
import Expert from "./components/Expert/Expert";
import CounterSection from "./components/CounterSection/CounterSection";
import TeamSection from "./components/TeamMember/teamMembers";
import ClientCarousel from "./components/Testimonials/ClientCarousel";
import ContactSection from "./components/ContactSection/ContactSection";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div id="main">
      <Navbar />
      <HeroSection />
      <Services />
      <WebsiteSolutions />
      <Expert />
      <CounterSection />
      <TeamSection />
      <ClientCarousel />
      <ContactSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default App;
