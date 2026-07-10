import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-left">
        <a href="#home" className="nav-brand">Zaira Khan</a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      
      <div className="nav-right">
        <a href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume">
          <FiDownload />
        </a>
        <a href="mailto:zaira.khan0304@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
          <FiMail />
        </a>
        <a href="https://github.com/zairakhaan786" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/zaira-khan-064678216/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FiLinkedin />
        </a>
        <a href="https://medium.com/@zaira.khan0304" target="_blank" rel="noreferrer" aria-label="Medium">
          <SiMedium />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
