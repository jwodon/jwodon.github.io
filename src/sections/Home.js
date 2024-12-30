import React from 'react';

const Home = () => (
  <section id="home" className="home-section">
    <h1 className="section-title">Jake O'Donnell</h1>
    <p className="home-intro">
      Mechanical Engineer turned Software Engineer, leveraging 9+ years of problem-solving expertise to build innovative and efficient software solutions.
    </p>
    <button
      onClick={() =>
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
      }
    >
      Learn More About Me
    </button>
  </section>
);

export default Home;
