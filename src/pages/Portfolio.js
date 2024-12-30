import React from 'react';

const projects = [
  {
    title: 'TrackTDEE App',
    description: 'A web application to calculate and track Total Daily Energy Expenditure (TDEE).',
    technologies: ['React.js', 'Node.js', 'Express', 'PostgreSQL'],
    liveDemo: 'https://example.com/tdee-tracker',
    githubRepo: 'https://github.com/jakeodonnell/tdee-tracker',
  },
  {
    title: 'Quality Inspection Automation',
    description: 'Developed a system to streamline quality inspection processes using Python.',
    technologies: ['Python', 'Excel Automation'],
    githubRepo: 'https://github.com/jakeodonnell/quality-inspection',
  },
];

const Portfolio = () => (
  <div style={{ padding: '20px' }}>
    <h1>My Projects</h1>
    {projects.map((project, index) => (
      <div key={index} style={{ marginBottom: '20px' }}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
        {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
        <br />
        {project.githubRepo && <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>}
      </div>
    ))}
  </div>
);

export default Portfolio;
