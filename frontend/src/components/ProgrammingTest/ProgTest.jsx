import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { Fragment } from 'react';
import Option from './Option';
import './Test.css';
import axios from 'axios';
import Indicator from './Indicator';

const ProgTest = () => {

    useEffect(() => {
        axios.get("http://localhost:5000/api/quizprog")
        .then(res => {
            setQuestions(shuffle(res.data));
            setCompletedAnswers(new Array(res.data.length).fill(0));
        })
        .catch(err => console.log(err))
        
    }, [])

    const navigate = useNavigate();
    const [indexOfQuestion, setIndexOfQuestion] = useState(0);
    const [indexOfPage, setIndexOfPage] = useState(1);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState();
    const [completedAnswers, setCompletedAnswers] = useState(null);

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    //CSS dynamic classes
    const [modalClasses, setModalClasses] = useState(["quiz-over-modal"])
    const [optionsClasses, setOptionsClasses] = useState(["options"])
    const [enable, setEnable] = useState(0)



    const validate = () => {
        let bool = false
        optionsClasses.forEach(el => {
            if (el === "disabled"){
                bool = true
            }
        })
        if(bool) {
            if(indexOfPage === questions.length){
                return quizOver()
            }
            setIndexOfQuestion(indexOfQuestion + 1)
            setIndexOfPage(indexOfPage + 1)
            setEnable(enable + 1)
        }
        else{
            alert("Choose one answer")
        }
        
    }

    const quizOver = () => {
        setModalClasses([...modalClasses, "active"])
    }



    return (
        <Fragment>
            <div className={modalClasses.join(' ')}>
                <div className="modal-content">
                    <h1 className="greeting">Nice job!</h1>
                    <p><span>You gained </span>
                        <span id="correct-answer">{score}</span><span> out of </span> 
                        <span id="number-of-all-questions-2">{completedAnswers && completedAnswers.length}</span><span> points</span>

                    </p>
                    <section>
                        <div id="btn-exit"
                            onClick={() => navigate(-1) }>
                            Exit</div>
                        <div id="btn-try-again" 
                            onClick={() =>
                            window.location.reload()}>
                            Try Again!</div></section>
                    
                </div>
            </div>
            <div className="main-test">
                <div className="quiz-container">
                    <div className="question-number">
                        <h3>Question
                            <span id="number-of-question">{` ${indexOfPage} `}</span>
                             out of 
                            <span id="number-of-all-questions">{completedAnswers && ` ${completedAnswers.length}`}</span>
                        </h3>
                        <h3>Programming Test</h3>
                    </div>
                    <div id="question">{questions && questions[indexOfQuestion].question}</div>
                    <div className={optionsClasses.join(" ")}>
                        {questions && questions[indexOfQuestion].options.map((el, index) => {
                            return <Option id={index} 
                                           rightAnswer={questions[indexOfQuestion].rightAnswer} 
                                           content={el}
                                           setOptionsClasses={setOptionsClasses}
                                           setScore={setScore}
                                           enable={enable}
                                           score={score}
                                           setCompletedAnswers={setCompletedAnswers}
                                           completedAnswers={completedAnswers}
                                           indexOfQuestion={indexOfQuestion}
                                           />
                        })}
                    </div>
                    <div className="btn-next" onClick={validate}>
                        Next
                    </div>
                    <div id="answer-tracker">
                         {  completedAnswers && completedAnswers.map( (el, index) => {
                            return <Indicator id={index} correct={completedAnswers}
                                            />
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProgTest;