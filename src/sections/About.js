import React from 'react';

const About = () => (
  <section id="about" className="about-section">
    <h1 className="section-title">About Me</h1>
    <p className="about-text">
      I am a seasoned engineering professional transitioning from mechanical to software engineering. With over 9 years of experience
      in product lifecycle management, quality assurance, manufacturing, and client relations, I bring a unique ability to bridge technical
      and operational gaps.
    </p>
    <h2 className="sub-title">Technical Skills</h2>
    <ul className="about-list">
      <li><strong>Programming Languages:</strong> Python, JavaScript, TypeScript</li>
      <li><strong>Other Languages:</strong> HTML (with CSS), SQL</li>
      <li><strong>Frameworks & Libraries:</strong> Flask, React, Express, Node.js, Jest</li>
      <li><strong>Industry Tools:</strong> PostgreSQL, MySQL, Git, GitHub, REST APIs</li>
      <li><strong>Mechanical Engineering:</strong> CAD (SolidWorks, AutoCAD), FEA, DFMEA, PFMEA, Lean Manufacturing, Six Sigma</li>
    </ul>
    <h2 className="sub-title">Professional Experience</h2>
    <ul className="experience-list">
      
        <p><strong>Sr. Supplier Quality Engineer</strong> | Fictiv (Feb 2022 – Present)</p>
        <ul>
          <li>Managed 30+ manufacturing partners, enhancing delivery metrics by 10%.</li>
          <li>Streamlined corrective action processes, increasing response rates by 20%.</li>
          <li>Led cross-functional meetings to address customer issues, significantly raising satisfaction for strategic accounts.</li>
        </ul>
      <br />
        <p><strong>Springboard Software Engineering Trainee</strong> | Sep 2023 – Sep 2024</p>
        <ul>
          <li>Completed 800+ hours of hands-on software engineering coursework with expert mentor oversight.</li>
          <li>Developed TrackTDEE, a web app for health tracking, utilizing React.js, Node.js, and PostgreSQL.</li>
          <li>Implemented JWT for secure user authentication and data protection.</li>
          <li>Enabled users to log data over time and visualize metrics through interactive charts, enhancing user engagement and providing actionable health insights.</li>
        </ul>
        <br />

        <p><strong>Quality Engineer</strong> | Hydro Flask (Feb 2021 – Feb 2022)</p>
        <ul>
          <li>Implemented advanced data analysis techniques, improving product quality by 15%.</li>
          <li>Supervised engineering aspects of product launches, reducing post-market complaints by 10%.</li>
          <li>Prevented potential losses of over $30 million by identifying and resolving a critical manufacturing defect before market release.</li>
        </ul>
        <br />
        <p><strong>Supplier Quality Engineer</strong> | Harry’s Inc. (Feb 2018 – Feb 2021)</p>
        <ul>
          <li>Spearheaded quality assurance for new product introductions, implementing stringent quality controls that resulted in zero post-launch recalls.</li>
          <li>Led continuous improvement projects, saving over $1 million annually.</li>
          <li>Developed a system to track and reduce customer complaints and high PPM issues, improving customer satisfaction.</li>
        </ul>
        <br />

      
        <p><strong>Product Development Engineer</strong> | Boombah (Nov 2015 – Jan 2018)</p>
        <ul>
          <li>Managed multiple product development projects from concept to market, ensuring compliance with industry standards and market readiness.</li>
          <li>Initiated and oversaw a quality assurance program that allowed for expansion into new product categories while maintaining safety and performance standards.</li>
        </ul>
        <br />

        <p><strong>Design Engineer</strong> | Percival Scientific (Jan 2015 – Nov 2015)</p>
        <ul>
          <li>Contributed to the design and development of specialized scientific equipment, ensuring precision and functionality for laboratory use.</li>
        </ul>

    </ul>
    <h2 className="sub-title">Education & Certifications</h2>
    <ul className="about-list">
      <li>B.S. Mechanical Engineering, Iowa State University</li>
      <li>Software Engineering Certification, Springboard, 2024</li>
      <li>Certified Supplier Quality Professional, ASQ, 2024</li>
    </ul>
    <h2 className="sub-title">Interests</h2>
    <p className="about-text">
      Beyond engineering and software development, I enjoy gaming, developing applications like TrackTDEE, and exploring new technologies to drive innovation.
    </p>
    <h2 className="sub-title">Download My Resume</h2>
    <p className="resume-download">
      <a href="/Jake_ODonnell_Resume.pdf" download className="resume-link">
        Click here to download my resume
      </a>
    </p>
  </section>
);

export default About;
