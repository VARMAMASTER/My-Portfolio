import React from 'react';
import "../CSS/component_styles/Info.css";
import linkedin_icon from "../images/icons8-linkedin.svg";
import github_icon from"../images/icons8-github-60.svg";

export default function Info() {
  return (
    <>
        <div className='Info'>
        <div className='information'>
          <h2>
          Hi there! I'm
          </h2>
          <h1>
          Nampally Sai Kiran Varma 
          </h1>
          <h1>
           MERN Stack Developer
          </h1>
          <p>
            I'm very passionate and dedicated to my work.
          </p>
          <div className='info_logos'>
          <div className='github'>
            <a href="https://github.com/VARMAMASTER"><img src={github_icon} alt="github" /></a>
          </div>
          <div className='linkedin'>
            <a href="www.linkedin.com/in/nampally-sai-kiran-varma-842a17190"><img src={linkedin_icon} alt="linkedin" /></a>
          </div>
          </div>
        </div>
        <div className='my_image_div'></div>
        </div>
    </>
  )
}
