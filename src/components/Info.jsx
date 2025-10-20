import React from "react";
import "../CSS/component_styles/Info.css";
import linkedin_icon from "../images/icons8-linkedin.svg";
import github_icon from "../images/icons8-github-60.svg";

export default function Info() {
  const TechStack = [
    "python",
    "pytorch",
    "tensorflow",
    "aws",
    "docker",
    "react",
    "nodejs",
    "mongodb",
    "postgresql",
    "flask",
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
          <h1>Lead AI Engineer | Full-Stack Developer</h1>
          <p>Specialized in GenAI, LLM integration, RAG systems, and scalable full-stack AI solutions. 2+ years of experience leading teams and deploying production-ready systems handling 1M+ requests/second.</p>
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
                href="https://www.linkedin.com/in/nampally-sai-kiran-varma/"
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
        <div className="image-container">
          <div className="floating-bubble bubble-1"></div>
          <div className="floating-bubble bubble-2"></div>
          <div className="floating-bubble bubble-3"></div>
          <div className="floating-bubble bubble-4"></div>
          <div className="my_image_div"></div>
        </div>
      </div>

      <div className="gap"></div>
    </div>
    </>
  );
}
