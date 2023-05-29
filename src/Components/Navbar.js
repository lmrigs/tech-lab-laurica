import "../Styles/Navbar.scss";
import { useState } from "react";
import { Link, Element } from "react-scroll";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  function handleBurgerClick() {
    setIsVisible((prev) => !prev);
  }

  function handleListClick() {
    setIsVisible(false);
  }

  function handleMouseEnter(e) {
    e.target.classList.add("hovered");
  }

  function handleMouseLeave(e) {
    e.target.classList.remove("hovered");
  }

  return (
    <div className="navbar">
      <div className="mobileitems">
        <a
          href="#"
          className={`burger ${isVisible ? "burger-icon open" : ""}`}
          onClick={handleBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div className={`navbar-links ${isVisible ? "visible" : ""}`}>
        <ul className="sections">
          <li>
            <Link
              onClick={handleListClick}
              className="menu-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              activeClass="active"
              to="content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              TechLab
            </Link>
          </li>
          <li>
            <Link
              onClick={handleListClick}
              className="menu-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              onClick={handleListClick}
              className="menu-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleListClick}
              className="menu-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
