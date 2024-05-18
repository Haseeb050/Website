import React from "react";
import Navbar from "./components/Home/Header/Nav";
import Services from "./components/Home/Services/Services";
import WebsiteSolutions from "./components/Home/WebsiteSolutions/WebsiteSolutions";
import Expert from "./components/Home/Expert/Expert";
import CounterSection from "./components/Home/CounterSection/CounterSection";
import TeamSection from "./components/Home/TeamMember/teamMembers";
import ClientCarousel from "./components/Home/Testimonials/ClientCarousel";
import ContactSection from "./components/Home/ContactSection/ContactSection";
import PortfolioSection from "./components/Home/PortfolioSection/PortfolioSection";
import HeroSection from "./components/Home/Hero/Hero";
import Footer from "./components/Home/Footer/Footer";

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
