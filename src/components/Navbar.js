// src/components/Navbar.js
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      let currentSection = 'home';

      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          // If top <= 80 (near the nav) and bottom >= 80 => in view
          if (rect.top <= 80 && rect.bottom >= 80) {
            currentSection = sectionId;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <ul>
        {['Home', 'About', 'Portfolio', 'Contact'].map((item, index) => {
          const lowerItem = item.toLowerCase();
          return (
            <li key={index}>
              <a
                href={`#${lowerItem}`}
                className={activeSection === lowerItem ? 'active' : ''}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
