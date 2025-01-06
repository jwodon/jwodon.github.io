// src/sections/Contact.js
import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'; // npm install react-icons

const Contact = () => (
  <section id="contact" className="fade-in-up">
    <h1 className="section-title">Contact Me</h1>
    <p style={{ textAlign: 'center' }}>Feel free to reach out via email or LinkedIn:</p>
    <ul style={{ textAlign: 'center' }}>
      <li>
        <FaEnvelope style={{ marginRight: '8px' }} />
        <strong>Email:</strong>{' '}
        <a href="mailto:jodonnell1313@gmail.com">
          jodonnell1313@gmail.com
        </a>
      </li>
      <li>
        <FaLinkedin style={{ marginRight: '8px' }} />
        <strong>LinkedIn:</strong>{' '}
        <a
          href="https://linkedin.com/in/jake-odonnell"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/jake-odonnell
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;
