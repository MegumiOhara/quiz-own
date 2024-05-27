import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { questionsTwo } from './questionT';
import { ReactComponent as ImageOne } from '../images/thumbs-up-solid.svg';

function QuizTwo(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    
    const answerButtonClick = (isCorrect) => {
        if(isCorrect === true){
            setScore(score +1);
        }
    
        const nextQuestion = currentQuestion +1;
    
        if(nextQuestion < questionsTwo.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setShowScore(true);
        }
    }

    return(
        <div className='container'>
        <div className='app'>
			{showScore ? (
                <>
                <ImageOne className="animate__animated animate__tada animate__repeat-3	3" />
				<div className='score-section'>You scored {score} out of {questionsTwo.length}
                
                <button><Link to="/levelpg">Go back</Link></button></div>
                </>
                
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questionsTwo.length}
						</div>
						<div className='question-text'>{questionsTwo[currentQuestion].questionVocab}</div>
					</div>
					<div className='answer-section'>
						{questionsTwo[currentQuestion].answerOptions.map((answerOption) => 
                    <button className='quiz-btn' onClick={() => answerButtonClick(answerOption.isCorrect)}>{answerOption.answerVocab}</button>)}
					</div>
				</>
			)} 
        </div> 
        </div>
	);
}


export default QuizTwo;