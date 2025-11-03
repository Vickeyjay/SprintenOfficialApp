import { useState, useEffect } from "react";
import "./navbar.css";
import Hamburger from "../Hamburger/hamburger";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section, div[id]");
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="navbar-container">
        <nav className="nav-content-container">
          <div className="logo-container">
            <a href="#home">
              <img src="./images/logo.png" alt="logo" />
            </a>
          </div>

          <div className="link-container">
            <ul>
              <li>
                <a
                  href="#about"
                  className={activeSection === "about" ? "active" : ""}
                  onClick={() => handleLinkClick("about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={activeSection === "services" ? "active" : ""}
                  onClick={() => handleLinkClick("services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className={activeSection === "work" ? "active" : ""}
                  onClick={() => handleLinkClick("work")}
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  className={activeSection === "clients" ? "active" : ""}
                  onClick={() => handleLinkClick("clients")}
                >
                  Our Clients
                </a>
              </li>
            </ul>
          </div>

          <div className="hamburger-wrapper">
            <Hamburger />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
