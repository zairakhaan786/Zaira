import React from 'react';
import './About.css';

const About = () => {
  const technologies = [
    "Python", "C/C++", "JavaScript", "React.js", "Next.js", 
    "FastAPI", "Node.js", "LangChain", "TensorFlow", "Scikit-learn", 
    "MongoDB", "SQL", "Docker", "Git", "AWS"
  ];

  return (
    <section className="about-section" id="about">
      <h2 className="section-header">
        <span className="accent-slash">/</span> about me
      </h2>
      <div className="about-grid">
        <div className="about-content">
          <p>
            I'm Zaira Khan, a Computer Science Engineer specializing in Artificial Intelligence, 
            Machine Learning, Software Engineering, and Data Science. I build intelligent applications 
            that combine AI with modern software engineering to solve real-world problems.
          </p>
          <p>Here are some technologies I've been working with:</p>
          <ul className="tech-list">
            {technologies.map((tech, index) => (
              <li key={index} className="tech-item">
                <span className="tech-arrow">▹</span> {tech}
              </li>
            ))}
          </ul>
          <p>
            Outside of development, I enjoy exploring AI research, writing technical articles, 
            building innovative side projects, and continuously learning emerging technologies.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img src="/profile.jpg" alt="Zaira Khan" className="profile-image" />
          <div className="image-glow-backdrop"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
