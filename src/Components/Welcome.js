import React from "react";
import Button from "./Buttons";
import { Link } from "react-router-dom";



const Welcome = ({ player }) => {
   return (
      
      <div className="container">
         <h1>Welcome, {player}!</h1>
         <p>This is a language quiz game to test  your Swedish skills!</p>
         <p>Please choose the correct answer from 3-4 multiple choices.</p>
         <Button><Link to="/levelpg">Choose the level</Link></Button>
      </div>
    
   );
};

export default Welcome;

/* steps tip from Helena to Ayako */
/*1. create the UI that means just way it supposed to look so css (styling) and no data. hard code data like name etc*/
/*2. wait for the login to be finished you cant grab the name without login working */
/*3. wait for the game page to be done and make sure you have routing set up so that you can create a link to that page*/