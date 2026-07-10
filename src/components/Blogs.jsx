import React from 'react';

const Blogs = () => {
  return (
    <section className="blogs-section" id="blogs" style={{ padding: '4rem 0', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 className="section-header">
        <span className="accent-slash">/</span> blogs
      </h2>
      <div className="blogs-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
        <p>
          Technical articles on Artificial Intelligence, Machine Learning, Software Engineering, and emerging technologies.
        </p>
        <a 
          href="https://medium.com/@zaira.khan0304" 
          target="_blank" 
          rel="noreferrer" 
          className="github-link" /* Reusing the same style class from Github component for consistency */
          style={{ width: 'fit-content' }}
        >
          medium.com/@zaira.khan0304
        </a>
      </div>
    </section>
  );
};

export default Blogs;
