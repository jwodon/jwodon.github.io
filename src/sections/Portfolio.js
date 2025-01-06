// src/sections/Portfolio.js
import React from 'react';

import trackTdeeImg from '../assets/TDEE.png';
import gameFinderImg from '../assets/GS.png';

const projects = [
  {
    title: 'TrackTDEE App',
    image: trackTdeeImg,
    description: 'A full-stack application for tracking Total Daily Energy Expenditure (TDEE).',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/jwodon/capstone2backup',
    liveDemo: null
  },
  {
    title: 'GameFinder',
    image: gameFinderImg,
    description: 'Platform to discover and explore various video games. Users can search for games by platform, genre, etc.',
    technologies: ['Python', 'Flask', 'JavaScript'],
    github: 'https://github.com/jwodon/Capstone1',
    liveDemo: null
  }
];

const Portfolio = () => (
  <section id="portfolio" className="portfolio-section fade-in-up">
    <h1 className="section-title">My Projects</h1>
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          )}
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <p className="project-technologies">
            <strong>Technologies:</strong> {project.technologies.join(', ')}
          </p>
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub Repo
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
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
