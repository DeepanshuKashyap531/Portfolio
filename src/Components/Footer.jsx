import React from "react";

const links = {
  linkdin: "https://www.linkedin.com/in/deepanshu577",
  github: "https://github.com/DeepanshuKashyap531",
  x: "https://x.com/Deepanshu6579"
};

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <div className="footer-links">
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
          ))}
        </div>

        <div className="social-links">
          <a href={links.linkdin} title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href={links.github} title="GitHub" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={links.x} title="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>

      <div className="copyright">
        © 2025 Deepanshu. Built with dedication and curiosity.
      </div>
    </div>
  </footer>
);

export default Footer;
