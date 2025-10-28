import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Deepanshu</span>
          </h1>
          <p>
            A passionate Machine Learning enthusiast building intelligent solutions
            through hands-on projects. Currently learning and creating real-world AI applications.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="ai image.png"
            alt="Deepanshu"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
