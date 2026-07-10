import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      borderTop: '1px solid var(--border)'
    }}>
      <p style={{ margin: '0 0 0.5rem 0' }}>Built and designed by Zaira Khan.</p>
      <p style={{ margin: 0 }}>© 2026 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
