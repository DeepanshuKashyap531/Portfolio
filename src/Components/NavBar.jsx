import React, { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    const mobileToggle = document.querySelector(".mobile-toggle");
    const mobileClose = document.querySelector(".mobile-close");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

    // Mobile menu open/close
    mobileToggle?.addEventListener("click", () => {
      mobileMenu?.classList.add("active");
    });

    mobileClose?.addEventListener("click", () => {
      mobileMenu?.classList.remove("active");
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu?.classList.remove("active");
      });
    });

    // Close when clicking outside
    mobileMenu?.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove("active");
      }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });

    // Highlight active nav link on scroll
    const handleScroll = () => {
      let current = "";
      const sections = document.querySelectorAll("section");

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      document.querySelectorAll(".nav-links a, .mobile-nav-links a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listeners when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">My Portfolio <i class="fa-solid fa-face-laugh-beam"></i></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="mobile-toggle"><i class="fa-solid fa-bars"></i></div>
      </div>

      {/* Mobile menu */}
      <div className="mobile-menu">
        <div className="mobile-close"><i class="fa-solid fa-bars"></i></div>
        <div className="mobile-nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
