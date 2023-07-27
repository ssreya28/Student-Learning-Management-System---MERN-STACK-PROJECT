import React from 'react';
import Layout from './Layout/Layout';
import "../styles/QuizContent.css";
import { useNavigate } from "react-router-dom";

const QuizContent = () => {
    const navigate = useNavigate();
  return (
    <Layout>
    <div className="app-containerquizrep">
      <div className="containerquizrep-group">
        <div className="containerquizrep-row">
          <div className="containerquizrep">
          <h5 className="containerquizrep-title"></h5>
            <p className="containerquizrep-description">
            <button
                  className="btn mb-2"
                  onClick={() => navigate('/cpp-quiz')}>
                    <img
                        src="/images/cpp-test.jpg"
                        alt="os"
                        style={{ height: "100%", width: "100%" }}
                    />
                </button>
            </p>
          </div>
          <div className="containerquizrep">
          <h5 className="containerquizrep-title"> </h5>
            <p className="containerquizrep-description">
            <button
                  className="btn mb-2"
                  onClick={() => navigate('/quiz')}>
                    <img
                        src="/images/java-test.png"
                        alt="os"
                        style={{ height: "100%", width: "100%" }}
                    />
                </button>
            </p>
          </div>
          <div className="containerquizrep">
          <h5 className="containerquizrep-title"></h5>
            <p className="containerquizrep-description">
            <button
                  className="btn mb-2"
                  onClick={() => navigate('/quiz')}>
                    <img
                        src="/images/dsa-test2.webp"
                        alt="os"
                        style={{ height: "120%", width: "100%" }}
                    />
                </button>
            </p>
          </div>
        </div>
        <div className="containerquizrep-row">
          <div className="containerquizrep">
          <h5 className="containerquizrep-title"></h5>
            <p className="containerquizrep-description">
            <button
                  className="btn mb-2"
                  onClick={() => navigate('/quiz')}>
                    <img
                        src="/images/web-test.jpg"
                        alt="os"
                        style={{ height: "100%", width: "100%" }}
                    />
                </button>
            </p>
          </div>
          <div className="containerquizrep">
            <p className="containerquizrep-description">
            <button
                  className="btn mb-2"
                  onClick={() => navigate('/quiz')}>
                    <img
                        src="/images/cn-test2.jpg"
                        alt="os"
                        style={{ height: "120%", width: "100%" }}
                    />
                </button>
            </p>
          </div>
          <div className="containerquizrep">
            <h5 className="containerquizrep-title"></h5>
            <p className="containerquizrep-description">
            
               <button
                  className="btn mb-2"
                  onClick={() => navigate('/quiz')}>
                    <img
                        src="/images/os-test.jpg"
                        alt="os"
                        style={{ height: "100%", width: "100%" }}
                    />
                </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default QuizContent