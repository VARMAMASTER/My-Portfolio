import React from "react";
import "../CSS/component_styles/Nav.css";

export default function Navbar() {
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
      <nav className="nav">
     <div className="logo">VarmaMaster</div>
        <ul>
          {nav_links.map((item) => (
            <li key={item.name}>
              <a className= "navigator" href={item.Link}>{item.name}</a>
            </li>
          ))}
        </ul>

        <button className="navbutton">
          Download Cv
        </button>
       
      </nav>
    </>
  );
}
