import React from "react";
import { Link } from "react-scroll";
import "../CSS/component_styles/Sidedrawer.css";
export default function Sidedraw(props) {
  return (
    <>
      <div className="drawer">
        <div className="x_support">
          <div className="cross" onClick={props.sidebar}></div>
        </div>
        <ul className="sideul">
          {props.nav_links.map((item) => (
            <li key={item.name}>
              <Link
                to={item.Link}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="sideitems"
                onClick={props.sidebar}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
