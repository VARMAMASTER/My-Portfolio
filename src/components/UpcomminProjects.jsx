import React from "react";
import InfoCards from "./InfoCards";
import "../CSS/component_styles/internship.css";
import "../CSS/component_styles/Projects.css";
export default function UpcomminProjects() {
  const intern_info = [
    {
      title: "Linktohealth",
      Image: "",
      time: " (December/10/2023)",
      company: "Health care and Socila media application",
      technology: ["react","bootstrap","redux","javascript","expressjs","mongodb"],
      description:
        "Connecting people with Healthcare (Doctors, nurse, Pharmacists and Lab technician)",
      git: "",
      live: "",
      type: "Comming soon..",
    },
    {
      title: "Connect-Forever",
      Image: "",
      time: " (December/26/2023)",
      company: "Community Streaming Platform",
      description:
        "Connect-Forever is a platform where users can connect, stream, and engage in chat. Its standout feature is the inclusion of community streaming, provided free of charge, allowing users to share live content within a community-oriented setting.",
      technology: ["react","javascript","tailwind","express","mongodb"],
      git: "",
      live: "",
      type: "Comming soon..",
    },
    {
      title: "Nutrition.Ai",
      Image: "",
      time: " (January/15/2024)",
      company: "Ai and Deeplearning",
      technology: ["react","javascript","tailwind","python","flask","mysql"],
      description: " This AI-powered application utilizes advanced algorithms to analyze and predict the caloric values associated with various food combinations, offering users a convenient and efficient tool for managing their dietary intake.",
      git: "",
      live: "",
      type: "Comming soon..",
    },
  ];
  return (
    <div className="Projects" id="Projects">
      <div className="internships">
        <div className="Intern">Upcomming Projects....</div>
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
