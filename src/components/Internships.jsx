import React from 'react';
import InfoCards from './InfoCards';
import "../CSS/component_styles/internship.css"

export default function Internships() {
    const intern_info = [{
        title: "MERN developer",
        Image: "./images/Wsa.jpg" ,
        time:" (16-8-2023 to 16-10-2023)",
        company:"WebStack Academy",
        technology:["react","html","css","expressjs","mongodb"],
        description:"Comprehensive food delivery application using the MERN stack and Redux. The project included robust authentication, payment processing, food ordering, sorting, searching, and an efficient order-to-delivery mechanism,culminating in a seamless end-to-end user .",
        git: "https://github.com/VARMAMASTER/OrderIt",
        live: "#",
    },{
        title: "Flutter Developer",
        Image: "./images/iitd.jpg",
        time: " (may-2023 to July-2023)",
        company: "IIT Delhi",
        description: "This is real-time data visualization and dashboard application for the Smart Shearing Machine, integrating with a Firebase database to store and retrieve real-time machine data such as voltage, current, vibrations, and temperature. Implemented a variety of utilities to enhance functionality and user experience, resulting in improved monitoring and control capabilities.",
        technology: ["flutter","firebase"],
        git : "https://github.com/VARMAMASTER/GraphSys",
        live:"#",
    },{
        title:"BIS Intern-Litd",
        Image: "./images/bis.png",
        time:" (1-6-2023 to 31-7-2023)",
        company:"Bureau of Indian Standards. ",
        technology:["R&D","Data Visualisation"],
        description:"Intern under Scientist D, the Director of the Smart Manufacturing Subdivision within the LITD department BIS. Made prestandardizations, landscape studies and Case studies for the implementation of Industry 4.0 in Indian MSMEs, this will be referred by the Scientist for making Indian Standards for Industry 4.0, as a part of the Internship I have visited the Schneider electric SM Plant as well as IISc Bangalore.",
        git : "#",
        live: "#",
    }]
  return (
    <div id="Internships">
    <div className="internships" >
    <div className='Intern'>Internships</div>
    {intern_info.map((item)=>{
        return(<>
        <InfoCards intern_info={item} />
        </>)
    })}
    </div>
    </div>
  )
}
