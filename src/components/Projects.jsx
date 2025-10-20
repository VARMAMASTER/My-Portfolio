import React from "react";
import InfoCards from "./InfoCards";
import "../CSS/component_styles/internship.css";
import "../CSS/component_styles/Projects.css";
export default function Projects() {
  const intern_info = [
    {
      title: "PromptKey",
      Image: "./images/promptkey.png",
      time: "(May 2024 - Apr 2025)",
      company: "AI Benchmarking Platform",
      technology: ["python", "aws", "react", "nodejs", "docker"],
      description:
        "AI benchmarking and dataset analysis tool for handling large datasets. Integrated 180+ AI models, processing 1M+ records/day. Implemented AWS Step Functions, Lambda, SQS, and CloudWatch. Enhanced code efficiency by 50%, reduced latency by 30%, optimized real-time communication by 25%.",
      git: "https://github.com/VARMAMASTER",
      live: "https://promptkey.com",
      type: "Live Platform",
    },
    {
      title: "RAG-based AI Support Agent",
      Image: "./images/campx.jpg",
      time: "(Apr 2025 - Present)",
      company: "GenAI & LLM Integration",
      description:
        "Designed and deployed RAG-based AI support agent using LLMs, integrated with Chroma vector DB, handling 1M+ requests/second. Reduced client support issues by 70%, improved efficiency by 60%, and cut operational costs by 35%. Built automated CI/CD pipelines to update vector DB.",
      technology: ["python", "aws", "docker", "mongodb"],
      git: "https://github.com/VARMAMASTER",
      live: "https://campx.in",
      type: "Production",
    },
    {
      title: "AI Defects Monitoring System",
      Image: "./images/opr.png",
      time: "(May 2024)",
      company: "AI/ML & Computer Vision",
      technology: ["python", "flask"],
      description: "Developed supervised ML model for defect detection in Ultrasonic Welding using Flask web application. Designed AI architecture and implemented custom machine learning models with curated dataset. Successfully deployed on Vercel, reducing defect detection errors by 15%.",
      git: "https://github.com/VARMAMASTER/Ultra-Image-Pro",
      live: "https://ultra-image-pro.vercel.app/",
      type: "Live Demo",
    },
    {
      title: "OrderIt - Food Delivery App",
      Image: "./images/Wsa.jpg",
      time: "(Aug 2023 - Oct 2023)",
      company: "Full-Stack MERN Application",
      technology: ["react", "nodejs", "expressjs", "mongodb"],
      description: "End-to-end food delivery application using MERN stack and Redux. Features include robust authentication, payment processing, food ordering, sorting, searching, and efficient order-to-delivery mechanism.",
      git: "https://github.com/VARMAMASTER/OrderIt",
      live: "https://orderit-demo.vercel.app",
      type: "Live Demo",
    },
    {
      title: "GraphSys - Real-time Dashboard",
      Image: "./images/iitd.jpg",
      time: "(May 2023 - Jul 2023)",
      company: "IoT & Real-time Analytics",
      technology: ["dart", "flutter", "firebase"],
      description: "Real-time data visualization dashboard for Smart Shearing Machine. Integrated with Firebase for real-time data retrieval (voltage, current, vibrations, temperature). Increased monitoring efficiency by 40% and reduced error rates by 15%.",
      git: "https://github.com/VARMAMASTER/GraphSys",
      live: "/iitd",
      type: "Demo",
    },
  ];
  return (
    <div className="Projects" id="Projects">
      <div className="internships">
        <div className="Intern">Featured Projects</div>
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
