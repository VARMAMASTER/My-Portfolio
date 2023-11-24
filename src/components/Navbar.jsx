import React, { useState } from "react";
import "../CSS/component_styles/Nav.css";
import Sidedraw from "./Sidedrawer";
export default function Navbar() {
  const [open_sidebar, Setsidebar] = useState(false);
  const toggle_sidebar = () => {
    open_sidebar ? Setsidebar(false) : Setsidebar(true);
  };
  const nav_links = [
    {
      name: "Home",
      Link: "/Home",
    },
    {
      name: "AboutMe",
      Link: "/About",
    },
    {
      name: "Skills",
      Link: "/Skills",
    },
    {
      name: "Internships",
      Link: "/Internships",
    },
    {
      name: "Projects",
      Link: "/Projects",
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
        <div className="logo">VarmaMaster</div>
        <ul className="ul">
          {nav_links.map((item) => (
            <li key={item.name}>
              <a className="navigator" href={item.Link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="navbutton">Download Cv</button>
      </nav>
    </>
  );
}
