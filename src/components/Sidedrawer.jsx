import React from "react";
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
              <a className="sideitems" href={item.Link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
