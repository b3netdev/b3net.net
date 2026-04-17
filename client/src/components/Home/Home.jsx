import React from "react";
import About from "../About/About";
import { Service } from "../Service/Service";
import Works from "../Works/Works";
import Expertise from "../Expertise/Expertise";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import HeroSection from "../Hero/HeroSection";

const Home = () => {
  return (
    <>
      <section id="home">
      <HeroSection/>
      </section>
      <section id="about" class="services-section sp">
        <About />
      </section>
      <section id="services" class="services-section services-section-2 sp">
        <Service />
      </section>
      <section id="works" class="works-section sp">
        <Works />
      </section>
      <section id="expertise" class="sp expertise-section">
        <Expertise />
      </section>
      <section id="contact" class="contact-section sp">
        <Contact />
      </section>
    </>
  );
};

export default Home;
