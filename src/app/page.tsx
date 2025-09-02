import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Menu from "./components/Menu"
import Header from "./components/Header";

const page = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Menu/>
      <Services/>
      <Gallery/>
      <Contact/>
    </div>
  );
};

export default page;
