import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


//useNavigate hook to pass the string and navigate/switch to the next page. Link didn't pass on
//the inputted player string. 

const RegisterForm = ({ onRegister }) =>{
   const [player, setPlayer] = useState('');
   const navigate = useNavigate();

    const handleSubmit = (e) => {
       //e.preventDefault(); //this function is for stopping 
       //default action of submitting the form and refreshing the page. 
       //Small form so maybe no need for now. 
        onRegister(player); //setting the player's name in the App component
        navigate('/welcome'); //redirect to Welcome page after submitting
        
    };

    return(
        <div className="container">
            <h1>Let's start!</h1>
            <form className="container-f" onSubmit={handleSubmit}>
                <label className="label-f">
                    Player Name:
                    <input
                    className="input-f"
                    type="text"
                    value={player}
                    onChange={(e) => setPlayer(e.target.value)}/>
                </label>
                <button type="submit">Start</button>
            </form>

        </div>
    );
};

export default RegisterForm;
