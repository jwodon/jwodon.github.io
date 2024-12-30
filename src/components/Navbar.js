import React from 'react';

const Navbar = () => (
  <nav style={{
    backgroundColor: '#111111',
    padding: '15px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }}>
    <ul style={{
      display: 'flex',
      justifyContent: 'center',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    }}>
      {['Home', 'About', 'Portfolio', 'Contact'].map((item, index) => (
        <li key={index} style={{ margin: '0 20px' }}>
          <a href={`#${item.toLowerCase()}`} style={{
            color: '#f1faee',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            transition: 'color 0.3s ease',
          }}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
