import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score-quiz'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button id="next-button-quiz" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult