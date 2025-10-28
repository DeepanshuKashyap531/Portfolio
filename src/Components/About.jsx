import React from "react";

const About = () => (
  <section id="about">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Turning curiosity into code, one project at a time</p>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>I'm a self-taught Machine Learning enthusiast with a strong foundation in Python and data science. While I don't have professional experience yet, I've dedicated countless hours to building practical ML projects that solve real problems.</p>
          <p>My journey started with online courses and has evolved into creating end-to-end ML applications. I believe in learning by doing, and each project represents a step forward in my understanding of AI and data science.</p>
          <p>When I'm not coding, you can find me exploring new ML papers, contributing to open-source, or sharing my learning journey with the community.</p>
        </div>
        <div className="about-stats">
          {[
            { number: "3", label: "Projects Completed" },
            { number: "100+", label: "Hours of Learning" },
            { number: "3", label: "ML Frameworks" },
            { number: "24/7", label: "Learning Mode" }
          ].map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
