import React from "react";
import InfoCards from "./InfoCards";
import "../CSS/component_styles/internship.css";
import "../CSS/component_styles/Projects.css";
export default function Projects() {
  const intern_info = [
    {
      title: " Site.com ",
      Image: "./images/site.png",
      time: "(December 2022)",
      company: "Frontend Project - Responsive",
      technology: ["html", "css"],
      description:
        "Site.com is easy-to-use website builder tool, in-house design services, and diverse e-commerce options. From DIY to professional support, Site.com helps businesses of all sizes thrive in the online landscape.",
      git: "https://github.com/VARMAMASTER/Site.com",
      live: "https://site-com-varma-master.vercel.app/",
      type: "Go Live \u{1F855}",
    },
    {
      title: "Ultra-image-pro",
      Image: "./images/opr.png",
      time: " (march - 2023)",
      company: "Ai & Deeplearning",
      description:
        "This is a Entriprise product which is usefull in industries for finding defects in ultrasonic Welding parts and applications",
      technology: ["html","css","python", "flask"],
      git: "",
      live: "",
      type: "Go Live \u{1F855}",
    },
    {
      title: "portfolio Website",
      Image: "./images/port.png",
      time: " (November 2020)",
      company: "",
      technology: ["react", "html", "css", "javascript"],
      description: "At present your are in my portfolio website",
      git: "",
      live: "Home",
      type: "Go Live \u{1F855}",
    },
  ];
  return (
    <div className="Projects" id="Projects">
      <div className="internships">
        <div className="Intern">Projects-Deployed</div>
        {intern_info.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <InfoCards intern_info={item} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
