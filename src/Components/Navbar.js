import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    
  <nav className="nav">
       <div className='nav-title'><Link to="/" className='nav-title'>Go Back to the Start</Link></div>  
    </nav>
  ); 
}