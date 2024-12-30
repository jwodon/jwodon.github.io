import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h1>Hi, I'm Jake O'Donnell</h1>
    <p>Mechanical Engineer turned Software Developer</p>
    <p>Specializing in bridging technical and operational gaps</p>
    <div>
      <Link to="/portfolio" style={{ margin: '10px', padding: '10px', textDecoration: 'none', backgroundColor: '#007bff', color: 'white', borderRadius: '5px' }}>
        View My Projects
      </Link>
      <Link to="/about" style={{ margin: '10px', padding: '10px', textDecoration: 'none', backgroundColor: '#007bff', color: 'white', borderRadius: '5px' }}>
        Learn More About Me
      </Link>
    </div>
  </div>
);

export default Home;
