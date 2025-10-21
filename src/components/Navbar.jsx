import React, { useState } from "react";
import "../CSS/component_styles/Nav.css";
import { Link } from "react-scroll";
import Sidedraw from "./Sidedrawer";
export default function Navbar() {
  const [open_sidebar, Setsidebar] = useState(false);
  const toggle_sidebar = () => {
    open_sidebar ? Setsidebar(false) : Setsidebar(true);
  };
  const nav_links = [
    {
      name: "Home",
      Link: "Home",
    },
    {
      name: "AboutMe",
      Link: "About",
    },
    {
      name: "Skills",
      Link: "Skills",
    },
    {
      name: "Internships",
      Link: "Internships",
    },
    {
      name: "Projects",
      Link: "Projects",
    },
  ];
  return (
    <>
      {open_sidebar ? (
        <Sidedraw nav_links={nav_links} sidebar={toggle_sidebar} />
      ) : (
        ""
      )}
      <nav className="nav">
        <div className="hamburger" onClick={toggle_sidebar}></div>
        <div className="nav-left">
          <div className="nav-profile-image"></div>
          <div className="logo">VarmaMaster</div>
        </div>
        <ul className="ul">
          {nav_links.map((item) => (
            <li key={item.name}>
              <Link to={`${item.Link}`} spy={true} smooth={true} offset={0} duration={500} className="navigator" >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="navbutton"><a href="https://drive.google.com/file/d/1ZOk9luujSyKr4Gj77rdvXl9qHiEDJ2v8/view?usp=drive_link" target="_blank" rel="noreferrer">Download Cv</a></button>
      </nav>
    </>
  );
}
