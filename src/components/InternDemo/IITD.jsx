import React from 'react';
import Demonav from './Demonav';
import "../../CSS/component_styles/InternDemo/iitd.css"

export default function IITD() {
  const images = [1,3,2,4,5,6,7]
  return (
    <>
    <Demonav/>
    <div className='iitdmain'>
    <div className='app-title'>GraphSys</div>
    <div className='link-div'>For Download and test the application please clcik the link 👉
      <a href="">{"  Click Here"}</a>
    </div>
    <p className='iitd-p'>
      This is the data visualisation and dashboard applicaion built for monitoring the realtime data of the smart shearing machine
    </p>
    {images.map((items)=>(
        <img className= "iitdimages" key={items+70} src={`./images/InternFiles/iitd/${items}.jpg`} alt={items} />
        ))}
    </div>
    </>
  )
}
