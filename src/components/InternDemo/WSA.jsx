import React, { useEffect, useState } from 'react';
import '../../CSS/component_styles/InternDemo/wsa.css';
import Demonav from './Demonav';

export default function WSA() {
  const [blink, setBlink] = useState(1);
  const images=[1,2,3,4,5,6,7,8,9,10,11];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBlink((prevBlink) => (prevBlink === 0 ? 1 : 0));
    }, 1500);
    return () => {
      clearInterval(intervalId);
    };
  }, [blink]);

  return (
    <>
      <Demonav />
      <div className="was-div">
        <div className='wsa-scroll' style={{ opacity: blink }}>
          This website will be deployed sooner..........
        </div>
        <div className='wsa-scro' style={{ opacity: 1}}>
          For code and Project Progress please visit my <a href="https://github.com/VARMAMASTER/OrderIt" target='_blank' rel="noreferrer">Github</a>
        </div>
        {images.map((items)=>(
        <img className= "wsaimages" key={items+78} src={`./images/InternFiles/wsa/${items}.png`} alt={items} />
        ))}
      </div>
    </>
  );
}
