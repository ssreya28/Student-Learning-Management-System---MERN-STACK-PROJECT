import React, { useState } from 'react'
import Layout from './Layout/Layout'
import "../styles/QuizPage.css"
import QuizResult from './QuizResult';
import { CppQuizData } from '../Data/CppQuizData';


const CPPQuiz = () => {

    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);

    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< CppQuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===CppQuizData[currentQuestion].answer){
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
                <QuizResult score={score} totalScore={CppQuizData.length} tryAgain={resetAll}/>
            ):(
            <> 
            <div className='question-quiz'>
                <span id="question-number-quiz">{currentQuestion+1}. </span>
                <span id="question-txt-quiz">{CppQuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container-quiz">
                {CppQuizData[currentQuestion].options.map((option,i)=>{
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

export default CPPQuiz