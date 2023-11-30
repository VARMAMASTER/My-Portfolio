import React from 'react';
import "../../CSS/Home_styles/Demo.css";
import { Link } from 'react-router-dom';
export default function Demonav() {
  return (
    <nav className='demo-nav'>
    <Link to="/">
    <button className='demo-navbutton'>Home</button>
    </Link>
    
    </nav>
  )
}
