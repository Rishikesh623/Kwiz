import React, { Component, Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
const QuizSummary=()=>{
        const location=useLocation();
        const[score,setScore]=useState(0);
        const[numberOfQuestions,setNumberOfQuestions]= useState(0);
        const[numberOfAnsweredQuestions,setNumberOfAnsweredQuestions]=useState(0);
        const[correctAnswers,setCorrectAnswers]=useState(0);
        const[wrongAnswers,setWrongAnswers]=useState(0);

        // useEffect(()=>{setCorrectAnswers(15);
        //     setNumberOfAnsweredQuestions(15);
        //     setNumberOfQuestions(15);
        //     setScore(15);
        //     setWrongAnswers(15);}, []);
    
    useEffect(()=>{setScore((location.state.score * 100)/(location.state.numberOfQuestions));
            setNumberOfQuestions(location.state.numberOfQuestions);
            setNumberOfAnsweredQuestions(location.state.numberOfAnsweredQuestions);
            setCorrectAnswers(location.state.correctAnswers);
            setWrongAnswers(location.state.wrongAnswers);
            console.log(location.state);}
            ,[]);
        
        let stats;
        let remark;
        if(score<30){remark="study champ";}
        else if(score>50 && score<70){remark="you cann do better";}
        else if(score>30 && score<50){remark="better luck next time!";}
        else{remark="great job!!";}

        if(location.state !== undefined){
            stats=(
                <Fragment>
                <div>
                    <span className="mdi mdi-check-circle-outline success-icon"></span>
                </div>
                <h1> quiz has ended</h1>
                <div className="container">
                    <h4>{remark}</h4>
                    <h2>Your Score : {score.toFixed(0)}%</h2>
                    <span className="left stat">Total number of Questions:</span>
                    <span className="right">{numberOfQuestions}</span><br />
                    <span className="left stat">Total number of answersed Questions:</span>
                    <span className="right">{numberOfAnsweredQuestions}</span><br />
                    <span className="left stat">Total number of correct answers:</span>
                    <span className="right">{correctAnswers}</span><br />
                    <span className="left stat">Total number of wrong answers:</span>
                    <span className="right">{wrongAnswers}</span><br />
                </div>
                <section>
                    <ul>
                        <li>
                            <Link to="/">Back To Home</Link>
                        </li>
                        <li>
                            <Link to="/play/quiz">Play Again</Link>
                        </li>
                    </ul>
                </section>
                </Fragment>
               
            );
        }
        else{
            stats=(
            <section>
            <h1 className="no-stats">stats is unavailable</h1>
            <ul>
                <li>
                    <Link to="/">Back To Home</Link>
                </li>
                <li>
                    <Link to="/play/quiz">Take a Quiz</Link>
                </li>
            </ul>
        </section>);
        }

        return(
        <Fragment>
            <Helmet><title>Quiz-app-summary</title></Helmet>
            <Fragment className="summary">
                <div className="icon-container">
                    <span className="mdi mdi-check-circle-outline success-icon"></span>
                <h1 className="heading"> quiz has ended</h1>
                </div>
                
                <div className="container">
                    <h4>{remark}</h4>
                    <h2>Your Score : {score.toFixed(0)}%</h2>
                    <span className="left stat">Total number of Questions:</span>
                    <span className="right">{numberOfQuestions}</span><br />
                    <span className="left stat">Total number of answersed Questions:</span>
                    <span className="right">{numberOfAnsweredQuestions}</span><br />
                    <span className="left stat">Total number of correct answers:</span>
                    <span className="right">{correctAnswers}</span><br />
                    <span className="left stat">Total number of wrong answers:</span>
                    <span className="right">{wrongAnswers}</span><br />
                </div>
                <section className="summary-btns">
                            <Link className="left" to="/">Back To Home</Link>
                        
                            <Link className="right" to="/play/quiz">Play Again</Link>
                        
                </section>
                </Fragment>
        </Fragment>       
         );
    
};
export default QuizSummary;