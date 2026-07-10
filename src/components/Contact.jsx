import React from 'react';
import './Contact.css';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-header">
        <span className="accent-slash">/</span> let's connect
      </h2>
      <div className="contact-content glass-card">
        <p className="contact-desc">
          I'm always interested in collaborating on AI, Machine Learning, and Software Engineering projects. 
          Feel free to reach out.
        </p>
        <div className="contact-links">
          <a href="mailto:zaira.khan0304@gmail.com" className="contact-btn">
            <FiMail className="contact-icon" />
            zaira.khan0304@gmail.com
          </a>
          <a href="https://github.com/zairakhaan786" target="_blank" rel="noreferrer" className="contact-btn">
            <FiGithub className="contact-icon" />
            github.com/zairakhaan786
          </a>
          <a href="https://www.linkedin.com/in/zaira-khan-064678216" target="_blank" rel="noreferrer" className="contact-btn">
            <FiLinkedin className="contact-icon" />
            linkedin.com/in/zaira-khan
          </a>
          <a href="https://medium.com/@zaira.khan0304" target="_blank" rel="noreferrer" className="contact-btn">
            <SiMedium className="contact-icon" />
            medium.com/@zaira.khan0304
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
