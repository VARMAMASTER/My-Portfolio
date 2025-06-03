import React from "react";
import "../CSS/component_styles/Info.css";
import linkedin_icon from "../images/icons8-linkedin.svg";
import github_icon from "../images/icons8-github-60.svg";

export default function Info() {
  const TechStack = [
    "html",
    "css",
    "tailwind",
    "js",
    "react",
    "nodejs",
    "expressjs",
    "flutter",
    "mongodb",
    "firebase",
  ];
  return (
    <>
    <div id="Home" >
      <div className="Info" >
        <div className="information">
          <div className="image_help">
            <h2>Hi there! I'm</h2>
            <div className="image_my"></div>
          </div>
          <h1>Nampally Sai Kiran Varma</h1>
          <h1>MERN Stack + Flutter Developer</h1>
          <p>I'm very passionate and dedicated to my work.</p>
          <div className="info_logos">
            <div className="github">
              <a
                href="https://github.com/VARMAMASTER"
                rel="noreferrer"
                target="_blank" >
                <img src={github_icon} alt="github" />
              </a>
            </div>

            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/nampally-sai-kiran-varma-842a17190"
                target="_blank"
                rel="noreferrer">
                <img src={linkedin_icon} alt="linkedin" />
              </a>
            </div>

            <button className="contact">Contact me</button>
          </div>

          <div className="myStack">
            <h3>Tech Stack |</h3>
            {TechStack.map((items) => (
              <img
                key={items}
                src={`https://skillicons.dev/icons?i=${items}`}
                alt={items}
              />
            ))}
          </div>
        </div>
        <div className="my_image_div"></div>
      </div>
    </div>
    </>
  );
}
