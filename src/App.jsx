import React from "react";
import { Routes, Route } from "react-router-dom";
import Project from "./Pages/Projects";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Skills from "./Pages/Skills";
import About from "./Pages/About";
import PageTransition from "./Component/PageTransition";
import Contact from "./Pages/Contact";
// import other pages if needed
// import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
        {/* example routes */}
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>}/>
      </Routes>
    </>
  );
};

export default App;
