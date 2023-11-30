import React from 'react'
import "../CSS/component_styles/about.css"

export default function About() {
  return (
    <>
    <div id='About'>
    <div className='about' >
      <h1>About Me</h1> 
      <div className='info'>
      <div className='about-left'></div>
      <div className='about-right'> Hey! I'm Sai Kiran Varma, a Full Stack and Flutter developer from IIIT Jabalpur with over a year of hands-on experience. As a smart manufacturing engineer, I graduated from IIITDMJ with a CPI of 8.4, showcasing my dedication.

I'm a highly skilled full-stack developer proficient in Python, C++, JavaScript, React.js, Bootstrap, and Tailwind CSS. My expertise includes building scalable APIs using Node.js, and working with databases like PostgreSQL and MongoDB. Additionally, I have a deep understanding of machine learning concepts and libraries such as sci-kit-learn.

With skills in Git, Docker, and AWS, I stay ahead in the ever-evolving software industry. I'm passionate, hardworking, and committed to excellence in software development.</div>
      </div>
      <div class="Education">
        <div class="education-card blue-card">
            <h2>Bachelor of Technology</h2>
            <p>Smart Manufacturing (2020 – 2024)</p>
            <p>Indian Institute of Information Technology, Design and Manufacturing, Jabalpur (IIITDMJ)</p>
            <p>CPI: 8.3</p>
        </div>

        <div class="education-card violet-card">
            <h2>Senior Secondary (XII)</h2>
            <p>2019</p>
            <p>Intermediate (MPC)- Loyola Junior College</p>
            <p>CPI: 9</p>
        </div>

        <div class="education-card blur-card">
            <h2>Secondary School Certificate (X)</h2>
            <p>2017</p>
            <p>Alphores Gen Next</p>
            <p>CPI: 9.7</p>
        </div>
    </div>
    </div>
    </div>
    
    </>
  )
}
