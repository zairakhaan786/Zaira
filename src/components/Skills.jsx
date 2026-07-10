import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["FastAPI", "Node.js", "REST APIs"]
    },
    {
      title: "Artificial Intelligence",
      skills: ["Machine Learning", "Deep Learning", "Generative AI", "LLMs", "RAG", "Computer Vision"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "ChromaDB"]
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "Docker", "Git", "GitHub", "Firebase"]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-header">
        <span className="accent-slash">/</span> skills
      </h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category glass-card">
            <h3 className="category-title">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
