import React, { useState } from 'react'
import Layout from './Layout/Layout'
import "../styles/QuizPage.css"
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';


const Quiz = () => {

    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);

    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }

  return (
    <Layout>
        <h1 className="heading-txt-quiz m-5 p-2">Quiz APP</h1>
        <div className="ban-card">
            <img src="/images/sample-quiz.jpg"/>
            <div className='ban-text'>
            <div className='container-quiz'>
        {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
            ):(
            <> 
            <div className='question-quiz'>
                <span id="question-number-quiz">{currentQuestion+1}. </span>
                <span id="question-txt-quiz">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container-quiz">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn-quiz ${
                            clickedOption == i+1?"checked-quiz":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            
            </>)}
        </div>
        
            </div>
            <div className="center-button-quiz">
    <input type="button" value="Next" id="next-button-quiz" onClick={changeQuestion} />
</div>
        </div>
    </Layout>
  )
}

export default Quiz