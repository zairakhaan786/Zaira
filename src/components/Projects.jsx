import React, { useState } from 'react';
import './Projects.css';
import { FiExternalLink, FiGithub, FiFolder, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import virtualHumanImg from '../assets/virtual_human.png';
import genaiChatbotImg from '../assets/genai_chatbot.png';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects = [
    {
      title: "Virtual Human Clone",
      description: "An AI-powered digital human capable of realistic conversations, memory, personality, facial appearance, and voice cloning.",
      tech: ["Python", "FastAPI", "React", "LLMs", "AWS"],
      image: virtualHumanImg
    },
    {
      title: "GenAI Banking Support",
      description: "Enterprise chatbot using Retrieval-Augmented Generation and semantic document search.",
      tech: ["LangChain", "ChromaDB", "FastAPI", "AWS"],
      image: genaiChatbotImg
    }
  ];

  const secondaryProjects = [
    {
      title: "SimpliTrip",
      description: "AI-powered travel itinerary and budget planning platform with personalized recommendations.",
      tech: ["React", "Firebase", "FastAPI", "Ollama"]
    },
    {
      title: "Mind Serenity",
      description: "AI-powered mental wellness platform featuring emotion detection and personalized support.",
      tech: ["TensorFlow", "React", "Firebase"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-header projects-header-flex">
        <h2><span className="accent-slash">/</span> software</h2>
        <a href="https://github.com/zairakhaan786" target="_blank" rel="noreferrer" className="view-all-link">
          View all projects →
        </a>
      </div>

      {/* Featured Projects Carousel */}
      <div className="carousel-container glass-card">
        <button className="carousel-btn left" onClick={prevSlide}><FiChevronLeft /></button>
        <button className="carousel-btn right" onClick={nextSlide}><FiChevronRight /></button>
        
        <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {featuredProjects.map((project, index) => (
            <div key={index} className="carousel-slide">
              <img src={project.image} alt={project.title} className="carousel-image" />
              <div className="carousel-content-overlay">
                <h3 className="carousel-title">{project.title}</h3>
                <p className="carousel-desc">{project.description}</p>
                <div className="carousel-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>
                <div className="carousel-links">
                  <FiGithub className="project-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="carousel-dots">
          {featuredProjects.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Secondary Projects Grid */}
      <div className="projects-grid">
        {secondaryProjects.map((project, index) => (
          <div key={index} className="project-card glass-card secondary-card">
            <div className="project-header">
              <div className="folder-icon-wrapper">
                <FiFolder className="folder-icon" />
              </div>
              <div className="project-links">
                <FiGithub className="project-icon" />
                <FiExternalLink className="project-icon" />
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge-text">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
