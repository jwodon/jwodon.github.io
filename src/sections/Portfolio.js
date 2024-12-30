import React from 'react';

const projects = [
  {
    title: 'TrackTDEE App',
    description: 'A full-stack application for tracking Total Daily Energy Expenditure (TDEE).',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/jwodon/capstone2backup',
  },
  {
    title: 'GameFinder',
    description: 'GameFinder is a platform where users can discover and explore various video games. Users can search for games based on different criteria such as platform and genre, view game details including ratings and reviews, and create and manage lists of their favorite games.',
    technologies: ['Python', 'Flask', 'JavaScript'],
    github: 'https://github.com/jwodon/Capstone1',
    liveDemo: null,
  },
];

const Portfolio = () => (
  <section id="portfolio" className="portfolio-section">
    <h1 className="section-title">My Projects</h1>
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <p className="project-technologies">
            <strong>Technologies:</strong> {project.technologies.join(', ')}
          </p>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub Repo
              </a>
            )}
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
