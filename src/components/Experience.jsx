import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "AI & Machine Learning Developer",
      description: "Building AI-powered applications using Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Computer Vision, and modern cloud technologies.",
      tech: ["Python", "FastAPI", "LangChain", "AWS", "React", "Docker"]
    },
    {
      title: "GenAI Banking Support Chatbot",
      description: "Designed and developed an enterprise-ready RAG chatbot capable of semantic search, intelligent document retrieval, and contextual question answering.",
      tech: ["LangChain", "ChromaDB", "FastAPI", "AWS EC2"]
    },
    {
      title: "AI Store Intelligence System",
      description: "Developed an intelligent retail analytics platform capable of processing CCTV footage to generate customer insights using computer vision and deep learning.",
      tech: ["Computer Vision", "Deep Learning", "Python"]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-header">
        <span className="accent-slash">/</span> experience
      </h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card glass-card">
            <h3 className="exp-title">{exp.title}</h3>
            <p className="exp-desc">{exp.description}</p>
            <div className="exp-tech">
              {exp.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
