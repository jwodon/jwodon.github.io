// src/sections/Home.js
import React from 'react';

const Home = () => (
  <section id="home" className="home-section fade-in-up">
    <h1 className="home-title">Jake O'Donnell</h1>
    <h2 className="home-subtitle">Software & Mechanical Engineer</h2>
    <p className="home-intro">
      Mechanical Engineer turned Software Engineer, leveraging 9+ years of problem-solving expertise to
      build innovative and efficient software solutions.
    </p>
    <button
      className="home-cta-button"
      onClick={() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      Learn More About Me
    </button>
  </section>
);

export default Home;
