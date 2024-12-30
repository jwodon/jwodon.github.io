import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ backgroundColor: '#007bff', padding: '10px', color: 'white' }}>
    <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
      <li style={{ margin: '0 15px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      </li>
      <li style={{ margin: '0 15px' }}>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      </li>
      <li style={{ margin: '0 15px' }}>
        <Link to="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>Portfolio</Link>
      </li>
      <li style={{ margin: '0 15px' }}>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
