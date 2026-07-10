import React from 'react';
import './Github.css';

const Github = () => {
  const username = "zairakhaan786";

  return (
    <section className="github-section" id="github">
      <h2 className="section-header">
        <span className="accent-slash">/</span> github
      </h2>
      
      <div className="github-content">
        <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="github-link">
          github.com/{username}
        </a>

        <div className="github-stats-grid">
          <div className="stat-card glass-card">
            <h3>Contribution Graph</h3>
            <div className="chart-container">
              <img 
                src={`https://ghchart.rshah.org/22D3EE/${username}`} 
                alt={`${username}'s Github chart`} 
                className="gh-chart"
              />
            </div>
          </div>

          <div className="stat-card glass-card">
            <h3>GitHub Stats & Languages</h3>
            <div className="stats-images">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=1F2937&title_color=22D3EE&text_color=9CA3AF&icon_color=22D3EE`} 
                alt={`${username}'s GitHub stats`} 
                className="stats-img"
              />
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=1F2937&title_color=22D3EE&text_color=9CA3AF`} 
                alt={`${username}'s Top Languages`} 
                className="stats-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
