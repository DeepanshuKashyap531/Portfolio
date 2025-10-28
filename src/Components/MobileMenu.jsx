import React from "react";
import { FaTimes } from "react-icons/fa";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
      <a href="#home" className="logo">Deepanshu</a>
      <button className="mobile-close" onClick={() => setMenuOpen(false)}>
        <FaTimes />
      </button>
      <ul className="mobile-nav-links">
        {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
