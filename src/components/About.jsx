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
      <div className='about-right'>Hey! I'm Sai Kiran Varma, a Lead AI Engineer at CampX with 2+ years of experience in GenAI, LLM integration, and full-stack AI systems development.

I specialize in building production-ready AI solutions including RAG-based systems, vector databases (Chroma DB), and LLM-driven agents that handle 1M+ requests/second. My expertise spans across Python, AWS cloud infrastructure (Lambda, EC2, RDS, ECS, Step Functions), and modern web technologies (React, Node.js, MongoDB, PostgreSQL).

Previously led a team at Janaspandana Software Solutions where I developed PromptKey, an AI benchmarking platform integrating 180+ AI models. I'm passionate about architecting scalable AI solutions that deliver quantifiable business impact - reducing support costs by 35%, improving efficiency by 60%, and cutting processing time by 50%.</div>
      </div>
      <div className="Education">
        <div className="education-card blue-card">
            <h2>Bachelor of Technology</h2>
            <p>Smart Manufacturing (Aug 2020 – May 2024)</p>
            <p>Indian Institute of Information Technology, Design and Manufacturing, Jabalpur (IIITDMJ)</p>
            <p>CGPA: 8.2/10.0 (82%)</p>
            <p>Specialized in Smart Manufacturing, Industry 4.0, and AI/ML applications</p>
        </div>

        <div className="education-card violet-card">
            <h2>Senior Secondary (XII)</h2>
            <p>2019</p>
            <p>Loyola Junior College, India</p>
            <p>Score: 90.1%</p>
        </div>

        <div className="education-card blur-card">
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
