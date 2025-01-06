// src/sections/About.js
import React from 'react';

const About = () => (
  <section id="about" className="about-section fade-in-up">
    <h1 className="section-title">About Me</h1>

    {/* === About Me Text === */}
    <div className="about-block">
      <p className="about-text">
        I am a seasoned engineering professional transitioning from mechanical to software engineering.
        With over 9 years of experience in product lifecycle management, quality assurance, manufacturing,
        and client relations, I bring a unique ability to bridge technical and operational gaps.
      </p>
    </div>

    {/* === Technical Skills === */}
    <div className="about-block">
      <h2 className="sub-title">Technical Skills</h2>
      <ul className="about-list">
        <li><strong>Programming Languages:</strong> Python, JavaScript, TypeScript</li>
        <li><strong>Other Languages:</strong> HTML (with CSS), SQL</li>
        <li><strong>Frameworks & Libraries:</strong> Flask, React, Express, Node.js, Jest</li>
        <li><strong>Industry Tools:</strong> PostgreSQL, MySQL, Git, GitHub, REST APIs</li>
        <li><strong>Mechanical Engineering:</strong> CAD (SolidWorks, AutoCAD), FEA, DFMEA, PFMEA, Lean Manufacturing, Six Sigma</li>
      </ul>
    </div>

    {/* === Professional Experience === */}
    <div className="about-block">
      <h2 className="sub-title">Professional Experience</h2>

      <div className="experience-block">
        <h3>Sr. Supplier Quality Engineer</h3>
        <p className="resume-sub">Fictiv (Feb 2022 – Present)</p>
        <ul>
          <li>Managed 30+ manufacturing partners, enhancing delivery metrics by 10%.</li>
          <li>Streamlined corrective action processes, increasing response rates by 20%.</li>
          <li>Led cross-functional meetings to address customer issues, significantly raising satisfaction for strategic accounts.</li>
        </ul>
      </div>

      <div className="experience-block">
        <h3>Springboard Software Engineering Trainee</h3>
        <p className="resume-sub">Sep 2023 – Sep 2024</p>
        <ul>
          <li>Completed 800+ hours of hands-on software engineering coursework with expert mentor oversight.</li>
          <li>Developed TrackTDEE, a web app for health tracking (React.js, Node.js, PostgreSQL).</li>
          <li>Implemented JWT for secure user authentication and data protection.</li>
          <li>Enabled users to log data and visualize metrics with interactive charts, boosting engagement.</li>
        </ul>
      </div>

      <div className="experience-block">
        <h3>Quality Engineer</h3>
        <p className="resume-sub">Hydro Flask (Feb 2021 – Feb 2022)</p>
        <ul>
          <li>Implemented advanced data analysis techniques, improving product quality by 15%.</li>
          <li>Supervised engineering aspects of product launches, reducing post-market complaints by 10%.</li>
          <li>Prevented potential losses of over $30 million by identifying and resolving critical manufacturing defects.</li>
        </ul>
      </div>

      <div className="experience-block">
        <h3>Supplier Quality Engineer</h3>
        <p className="resume-sub">Harry’s Inc. (Feb 2018 – Feb 2021)</p>
        <ul>
          <li>Spearheaded quality assurance for new product introductions with zero post-launch recalls.</li>
          <li>Led continuous improvement projects, saving over $1 million annually.</li>
          <li>Developed a system to track and reduce customer complaints, improving satisfaction.</li>
        </ul>
      </div>

      <div className="experience-block">
        <h3>Product Development Engineer</h3>
        <p className="resume-sub">Boombah (Nov 2015 – Jan 2018)</p>
        <ul>
          <li>Managed multiple product development projects from concept to market.</li>
          <li>Oversaw a quality assurance program that allowed expansion into new product categories.</li>
        </ul>
      </div>

      <div className="experience-block">
        <h3>Design Engineer</h3>
        <p className="resume-sub">Percival Scientific (Jan 2015 – Nov 2015)</p>
        <ul>
          <li>Contributed to the design of specialized scientific equipment for lab use.</li>
        </ul>
      </div>
    </div>

    {/* === Education & Certifications === */}
    <div className="about-block">
      <h2 className="sub-title">Education & Certifications</h2>
      <ul className="about-list">
        <li>B.S. Mechanical Engineering, Iowa State University</li>
        <li>Software Engineering Certification, Springboard, 2024</li>
        <li>Certified Supplier Quality Professional, ASQ, 2024</li>
      </ul>
    </div>

    {/* === Interests === */}
    <div className="about-block">
      <h2 className="sub-title">Interests</h2>
      <p className="about-text">
      I enjoy video games, staying active through snowboarding, baseball, and weightlifting, and exploring new places with my two dogs, Finn and Rey. I'm currently restoring a 1990 Ford Bronco II, which has been a fun hands-on project. I'm also a big movie buff who loves traveling and trying new foods.
      </p>
    </div>

    {/* === Resume Download === */}
    <div className="about-block">
      <h2 className="sub-title">Download My Resume</h2>
      <p className="resume-download">
        <a href="/Jake_ODonnell_Resume.pdf" download className="resume-link">
          Click here to download my resume
        </a>
      </p>
    </div>
  </section>
);

export default About;
