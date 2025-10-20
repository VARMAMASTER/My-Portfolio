import React from 'react';
import "../CSS/component_styles/Skills.css";

const skillsData = [
  {
    title: 'AI/ML & GenAI',
    items: ['Large Language Models (LLMs)', 'RAG Systems', 'Vector Databases (Chroma DB)', 'Scikit-Learn', 'Deep Learning', 'Computer Vision', 'MCP Agents']
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS (Lambda, EC2, RDS, ECS)', 'AWS Step Functions', 'AWS SQS & CloudWatch', 'Docker', 'CI/CD Pipelines', 'WebSockets']
  },
  {
    title: 'Backend & Databases',
    items: ['Node.js', 'Express.js', 'Flask', 'MongoDB', 'PostgreSQL', 'Firebase', 'RESTful APIs', 'Microservices', 'OAuth']
  },
  {
    title: 'Frontend & Mobile',
    items: ['React', 'Flutter', 'Redux', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Tailwind CSS', 'Real-time Analytics (Grafana)']
  },
];

export default function Skills() {
  return (
    <>
    <div id='Skills'>
      <div className='title' >Skills</div>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className={`skill-card ${skill.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="skill-title">{skill.title}</div>
            <ul className="skill-list">
              {skill.items.map((item, i) => (
                <li key={i} className="skill-list-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
