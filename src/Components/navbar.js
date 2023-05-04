import "../Styles/navbar.scss";

function handleMouseEnter(e) {
  e.target.classList.add("hovered");
}

function handleMouseLeave(e) {
  e.target.classList.remove("hovered");
}

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="sections">
        <li>
          <a
            href="#"
            className="menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            TechLab
          </a>
        </li>
        <li>
          <a
            href="#"
            className="menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
}
