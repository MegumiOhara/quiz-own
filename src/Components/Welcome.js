import React from "react";
import { Link } from "react-router-dom";



const Welcome = ({ player }) => {
   return (
      
      <div className="container">
         <h1 class="animate__animated animate__heartBeat animate__repeat-3	3">Welcome, {player}!</h1>
         <p>This is a Quiz to test  your Swedish skills!</p>
         <p>Choose one correct answer from 4 multiple choice.</p>
         <button><Link to="/levelpg">Choose the level</Link></button>
      </div>
    
   );
};

export default Welcome;

