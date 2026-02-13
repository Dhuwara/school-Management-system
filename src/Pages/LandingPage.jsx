import React from 'react'
import LandingNavbar from '../LandingPage/LandingNavbar/LandingNavbar'
import HeroSection from "../LandingPage/HeroSection/HeroSection";
import About from "../LandingPage/About/About";
import Features from "../LandingPage/Features";
import Contact from "../LandingPage/Contact";
import Footer from "../LandingPage/Footer";

const LandingPage = () => {
  return (
    <>
      <LandingNavbar />
      <HeroSection />
      <About />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage