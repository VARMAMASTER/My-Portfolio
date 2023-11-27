import React from 'react';
import "../CSS/component_styles/Skills.css";

const skillsData = [
  {
    title: 'Programming Languages',
    items: ['C++', 'Python', 'JavaScript', 'Dart', 'Data Structures and Algorithms']
  },
  {
    title: 'Front End Technologies',
    items: ['React', 'Flutter','Redux', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS']
  },
  {
    title: 'Back End Technologies',
    items: ['Node.js', 'Express.js', 'PostgreSQL', 'Mongo DB', 'Firebase']
  },
  {
    title: 'Data Science',
    items: ['Machine Learning', 'Deep Learning', 'SKlearn', 'Keras','NumPy', 'pandas']
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
