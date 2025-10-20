import React from 'react';
import InfoCards from './InfoCards';
import "../CSS/component_styles/internship.css"

export default function Internships() {
    const intern_info = [{
        title: "Lead AI Engineer",
        Image: "./images/campx.jpg",
        time: " (Apr 2025 – Present)",
        company: "CampX India",
        technology: ["python", "aws", "docker", "mongodb", "react"],
        description: "Designed and deployed RAG-based AI support agent using LLMs, integrated with Chroma vector DB, handling 1M+ requests/second. Scaled Chroma DB for high-concurrency workloads, reducing client support issues by 70%, improving efficiency by 60%, and cutting operational costs by 35%. Developed MCP agents for real-time MongoDB analysis of student performance and behavioral data.",
        git: "https://github.com/VARMAMASTER",
        live: "https://campx.in",
        type: "Live",
    }, {
        title: "Team Lead",
        Image: "./images/janaspandana.jpg",
        time: " (May 2024 – Apr 2025)",
        company: "Janaspandana Software Solutions",
        technology: ["python", "aws", "react", "nodejs", "docker"],
        description: "Led team of 4 in developing PromptKey, an AI benchmarking platform integrating 180+ AI models, processing 1M+ records/day. Implemented AWS Step Functions, Lambda, SQS, and CloudWatch. Enhanced code efficiency by 50%, reduced system latency by 30%, and optimized real-time communication by 25%. Also developed Truupe fintech escrow payment system, reducing page load times by 40%.",
        git: "https://github.com/VARMAMASTER",
        live: "https://promptkey.com",
        type: "Live",
    }, {
        title: "Full Stack Developer Intern",
        Image: "./images/Wsa.jpg",
        time: " (Jan 2024 – May 2024)",
        company: "CampX EduTech",
        technology: ["react", "nodejs", "mongodb", "expressjs"],
        description: "Crafted the eQuiz module, reducing quiz load times by 55% and increasing user engagement by 20%. Engineered backend APIs and integrated real-time analytics via Grafana, improving performance tracking by 50%. Enabled dynamic reporting and enhanced system monitoring capabilities.",
        git: "https://github.com/VARMAMASTER",
        live: "https://campx.in",
        type: "Live",
    }, {
        title: "Flutter Developer Intern",
        Image: "./images/iitd.jpg",
        time: " (May 2023 – Jul 2023)",
        company: "IIT Delhi",
        description: "Designed and built real-time data visualization dashboard using Flutter for Smart Shearing Machine, increasing monitoring efficiency by 40%. Implemented Firebase for real-time data retrieval, cutting error rates by 15% and boosting system responsiveness.",
        technology: ["dart", "flutter", "firebase"],
        git: "https://github.com/VARMAMASTER/GraphSys",
        live: "/iitd",
        type: "Demo",
    }, {
        title: "Industry 4.0 Intern",
        Image: "./images/bis.png",
        time: " (Jun 2023 – Jul 2023)",
        company: "Bureau of Indian Standards",
        technology: ["python"],
        description: "Conducted comprehensive case studies on Industry 4.0 adoption in Indian MSMEs, contributing to national policies impacting 100+ SMEs. Collaborated with Schneider Electric and IISc Bangalore to study smart manufacturing, providing policy recommendation insights.",
        git: "https://github.com/VARMAMASTER/BIS-Internship",
        live: "/bis",
        type: "Demo",
    }]
    return (
        <div id="Internships">
            <div className="internships">
                <div className='Intern'>Professional Experience</div>
                {intern_info.map((item, index) => (
                    <InfoCards key={index+"18"} intern_info={item} />
                ))}
            </div>
        </div>
    );
}
