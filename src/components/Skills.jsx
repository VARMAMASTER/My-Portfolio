import React from 'react'
import "../CSS/component_styles/Skills.css"
export default function Skills() {
  return (
    <>
    <div className='title'>Skills</div>
    <div class="skills-container">
    <div class="skill-card programming-languages">
        <div class="skill-title">Programming Languages</div>
        <ul class="skill-list">
            <li class="skill-list-item">C++</li>
            <li class="skill-list-item">Python</li>
            <li class="skill-list-item">JavaScript</li>
            <li class="skill-list-item">Dart</li>
            <li class="skill-list-item">Data Structures and Algorithms</li>
        </ul>
    </div>

    <div class="skill-card front-end-technologies">
        <div class="skill-title">Front End Technologies</div>
        <ul class="skill-list">
            <li class="skill-list-item">React</li>
            <li class="skill-list-item">Redux</li>
            <li class="skill-list-item">HTML</li>
            <li class="skill-list-item">CSS</li>
            <li class="skill-list-item">Bootstrap</li>
            <li class="skill-list-item">Tailwind CSS</li>
        </ul>
    </div>

    <div class="skill-card back-end-technologies">
        <div class="skill-title">Back End Technologies</div>
        <ul class="skill-list">
            <li class="skill-list-item">Node.js</li>
            <li class="skill-list-item">Express.js</li>
            <li class="skill-list-item">PostgreSQL</li>
            <li class="skill-list-item">Mongo DB</li>
            <li class="skill-list-item">Firebase</li>
        </ul>
    </div>

    <div class="skill-card application-development">
        <div class="skill-title">Application Development</div>
        <ul class="skill-list">
            <li class="skill-list-item">Flutter</li>
        </ul>
    </div>

    <div class="skill-card data-science">
        <div class="skill-title">Data Science</div>
        <ul class="skill-list">
            <li class="skill-list-item">Machine Learning</li>
            <li class="skill-list-item">Deep Learning</li>
            <li class="skill-list-item">Visualization</li>
        </ul>
    </div>

    <div class="skill-card python-libraries">
        <div class="skill-title">Python Libraries</div>
        <ul class="skill-list">
            <li class="skill-list-item">NumPy</li>
            <li class="skill-list-item">pandas</li>
            <li class="skill-list-item">matplotlib</li>
            <li class="skill-list-item">SKlearn</li>
            <li class="skill-list-item">Keras</li>
        </ul>
    </div>
</div>
    </>
  )
}
