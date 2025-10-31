import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import "./hamburger.css";
import FadeIn from "../AnimatedFadeIn/animated-fade-in";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Disable scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Handle link click (close sidebar)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <FadeIn>
        {/* Hamburger Button */}
        <button className="hamburger-btn" onClick={() => setIsOpen(true)}>
          ☰
        </button>

        {/* Sidebar Drawer */}
        <div ref={sidebarRef} className={`hamburger-sidebar ${isOpen ? "open" : ""}`}>
          <div className="sidebar-container">
            <div className="sidebar-header">
              <div className="logo-container">
                <img src="/images/logo.png" alt="logo" className="sidebar-logo" />
              </div>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="sidebar-content">
              <ul className="history-list">
                <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
                <li><a href="#work" onClick={handleLinkClick}>Our Work</a></li>
                <li><a href="#clients" onClick={handleLinkClick}>Our Clients</a></li>
              </ul>
            </div>
          </div>

          <div className="profile-footer">
            <div className="logo-container">
              <img src="/images/logo.png" alt="logo" className="sidebar-logo" />
            </div>
          </div>
        </div>

        {/* Background Overlay */}
        {isOpen && <div className="overlay show" onClick={() => setIsOpen(false)}></div>}
      </FadeIn>
    </>
  );
};

export default HamburgerMenu;
