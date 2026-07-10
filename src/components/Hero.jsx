import React, { useState, useEffect } from 'react';
import './Hero.css';
import CanvasSimulation from './CanvasSimulation';
import { FiMail, FiDownload, FiFolder } from 'react-icons/fi';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "hi, zaira here.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const renderText = () => {
    const parts = text.split(/(zaira)/);
    return parts.map((part, i) => 
      part === 'zaira' ? <span key={i} className="accent-text">{part}</span> : part
    );
  };

  return (
    <div id="intro">
      <CanvasSimulation />
      <div className="intro-block">
        <h1 className="hero-title">
          {renderText()}
          <span className="cursor">|</span>
        </h1>
        <div className="hero-subtitle">
          AI Engineer • Machine Learning Engineer • Software Engineer • Data Scientist
        </div>
        <p className="hero-bio">
          Building intelligent AI-powered products that solve real-world problems through modern software engineering, machine learning, and scalable cloud technologies.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            <FiFolder className="btn-icon" />
            View Projects
          </a>
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer" className="btn-secondary">
            <FiDownload className="btn-icon" />
            Download Resume
          </a>
          <a href="mailto:zaira.khan0304@gmail.com" className="btn-secondary">
            <FiMail className="btn-icon" />
            Say Hi!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
