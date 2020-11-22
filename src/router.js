import React from "react";
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
const routes = {
  "/": () => <Home />,
  "/home": () => <Home />,
  "/home/": () => <Home />,
  "/about": () => <About />,
  "/about/": () => <About />,
  "/contact": () => <Contact />,
  "/contact/": () => <Contact />,
  "/gallery": () => <Gallery />, 
  "/gallery/": () => <Gallery />, 
  "/skills": () => <Skills />,
  "/skills/": () => <Skills />
};

export default routes;