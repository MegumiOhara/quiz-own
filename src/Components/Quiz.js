//Quiz questions - multiple choice 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { questions } from './quesions';
import { ReactComponent as ImageOne } from '../images/thumbs-up-solid.svg';

function Quiz(){
   
    //value that hold the question we are on. Starts with 0.Makes it more dynamic 
    //instead of staying in the same question array of [0]
    const [currentQuestion, setCurrentQuestion] = useState(0);
    //stateobject to collect score. Below showScore is a turnery so when true-shows 'score-section'
    //when remain false, shows the message from'question-section'
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    //if clickon button clicked and isCorrect option from the array is clicked (isCorrect = true), 
    //score variable will increment by 1
    const answerButtonClick = (isCorrect) => {
        if(isCorrect === true){
            setScore(score +1);
        }
    //change the current question by one everytime button is clicked
    //add if/else so it won't break when coming to the last question
        const nextQuestion = currentQuestion +1;
        //if the next question is less than the total number of q, go to nextq
        //if more than total number of q, show variable from setShowScore and 'score-section'
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setShowScore(true);
        }
    }

    return(
        <div className='container'>
        <div className='app'>
			{/* change the hard coded messages into dynamic (const variables) once logic and function added */}
			{showScore ? (
                <>
                <ImageOne className="animate__animated animate__tada animate__repeat-3	3" />
				<div className='score-section'>You scored {score} out of {questions.length}
                
                <button><Link to="/levelpg">Go back</Link></button></div>
                </>
                
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
                            {/*question number cannot be hardcoded, need to be incremented sp currentQuestion variable +1*/}
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionVocab}</div>
					</div>
					<div className='answer-section'>
                        {/*use map function to reiterate the answerOptions on screen*/}
						{questions[currentQuestion].answerOptions.map((answerOption) => 
                    <button className='quiz-btn' onClick={() => answerButtonClick(answerOption.isCorrect)}>{answerOption.answerVocab}</button>)}
					</div>
				</>
			)} 
        </div> 
        </div>
	);
}


export default Quiz;