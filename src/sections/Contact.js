import React from 'react';

const Contact = () => (
  <section id="contact" className="container" style={{ textAlign: 'center' }}>
    <h1>Contact Me</h1>
    <p>Feel free to reach out via email or LinkedIn:</p>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li>
        <strong>Email:</strong>{' '}
        <a href="mailto:jodonnell1313@gmail.com">jodonnell1313@gmail.com</a>
      </li>
      <li>
        <strong>LinkedIn:</strong>{' '}
        <a href="https://linkedin.com/in/jake-odonnell" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/jake-odonnell
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;
