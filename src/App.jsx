import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Github from './components/Github';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

import GameModeToggle from './components/GameModeToggle';

function App() {
  return (
    <div className="app-container">
      <GameModeToggle />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blogs />
        <Github />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
