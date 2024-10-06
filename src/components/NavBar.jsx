import { useState } from "react";
import "./NavBar.css";
import Logo from "./Logo";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Logo />
      {isMenuOpen ? (
        <div className="close-button" onClick={closeMenu}>
          &times;
        </div>
      ) : (
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      )}
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li className="menu-item">
          <a href="#home">Home</a>
        </li>
        <li className="menu-item">
          <a href="#about">About Me</a>
        </li>
        <li className="menu-item">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="menu-item">
          <a href="#services">Services</a>
        </li>
        <li className="menu-item">
          <a href="#experience">Experience</a>
        </li>
        <li className="menu-item contact-button">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
