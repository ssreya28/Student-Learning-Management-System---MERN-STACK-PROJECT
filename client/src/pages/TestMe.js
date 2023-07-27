import React from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate } from "react-router-dom";
import Quiz from '../components/Quiz';
import "../styles/TestMe.css";


const TestMe = () => {
    const navigate = useNavigate();
  return (
    
    <Layout>
      

      <section className='firstSection'>
        <div className='left'>
         <b>Test Your
          <span className='purple'> Knowledge!</span></b>
          
          <div><h4> <i>Think you have gained enough technical knowledge?</i></h4></div>
          
          <div><h4> <i>Test your knowledge with our short quizzes!</i></h4></div>
          <div><button class="button" onClick={() => navigate('/quiz-options')}><span><i>Test Me </i></span></button></div>
          </div>
          
        {/* banner image */}
        <div className='right'>
        <img
        src="/images/test3.png"
        className="banner-img"
        alt="bannerimage"
        height="300px"
        width={"100%"}
        />
      </div>
      
      {/* banner image */}
      </section>
      <section className='secondSection'>
        <button
        className="btn mb-2"
                  onClick={() => navigate('/cpp-quiz')}>
                    
        </button>
      </section>
      
      
    
                </Layout>
  )
}

export default TestMe