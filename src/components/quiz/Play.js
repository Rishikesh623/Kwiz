import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import questions from '../../questions.json';
import isEmpty from "../../utils/is-empty";
import M from "materialize-css";
import { useNavigate } from "react-router-dom";



const Play=()=>{
        questions=questions;
        const[currentQuestion,setCurrentQuestion]=useState({});
        const[previousQuestion,setPreviousQuestion]=useState({});
        const[nextQuestion,setNextQuestion]=useState({});
        const[answer,setAnswer]=useState('');
        const[numberOfQuestions,setNumberOfQuestions]=useState(0);
        const[numberOfAnsweredQuestions,setNumberOfAnsweredQuestions]=useState(0);
        const[currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
        const[score,setScore]=useState(0);
        const[correctAnswers,setCorrectAnswers]=useState(0);
        const[previousRandomNumbers,setPreviousRandomNumbers]=useState([]);
        const[wrongAnswers,setWrongAnswers]=useState(0);
        const[hints,setHints]=useState(5);
        const[time,setTime]=useState({minutes:0, seconds:0});
        let interval=null;

        useEffect(()=>{ 
        displayQuestions(questions,currentQuestion, nextQuestion,previousQuestion);
        startTimer();
        return()=>{clearInterval(interval)}} ,   []);
        

    const displayQuestions =(questions, currentQuestion, nextQuestion, previousQuestion) =>{
        if( ! isEmpty(questions)){
                setCurrentQuestion(questions[currentQuestionIndex]);
                setNextQuestion( questions[currentQuestionIndex +1]);
                setPreviousQuestion(questions[currentQuestionIndex -1]);
                setAnswer(questions[currentQuestionIndex].answer);
                setNumberOfQuestions(questions.length);
                setPreviousRandomNumbers([]);
                showOptions();}
        
    };
    
    const handleOptionClick = (e) =>{
       if(e.target.innerHTML.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()){
        correctAnswer();
       } else{
       wrongAnswer();
       }
    }
    
    const handleNextButtonClick=()=>{
        if(nextQuestion !== undefined){
                    setCurrentQuestionIndex(currentQuestionIndex +1);
         displayQuestions(questions,currentQuestion,nextQuestion,previousQuestion);
        }
    };

    const handlePreviousButtonClick=()=>{
        if(previousQuestion !== undefined){
                    setCurrentQuestionIndex(currentQuestionIndex-1);
           displayQuestions(questions,currentQuestion,nextQuestion,previousQuestion);
        }
    };
    
    
    
    const navigate=useNavigate();
    const handleQuitButtonClick=()=>{
       if(window.confirm('are you sure you want to quit?')){
            navigate('/'); }
       };

    const showOptions=()=>{
        const options=Array.from(document.querySelectorAll('.option'));
        options.forEach(option=>{
            option.style.visibility='visible';
        });
    };
    const handleHints=()=>{
        if(hints > 0) { const options= Array.from(document.querySelectorAll('.option'));
            let indexOfAnswer;
            options.forEach((option,index)=>{
                if(option.innerHTML.toLowerCase() === answer.toLowerCase()){
                    indexOfAnswer=index;
                }
            }
            );
            while(true){
                    const randomNumber=Math.round(Math.random()*3);
                    if(randomNumber !== indexOfAnswer && !previousRandomNumbers.includes(randomNumber)){
                        options.forEach((option, index)=>{
                            if(index=== randomNumber){
                                option.style.visibility='hidden';
                                 setHints(hints-1);
                               setPreviousRandomNumbers(previousRandomNumbers.concat(randomNumber));}} );
                        break;}
                        if(previousRandomNumbers.length >= 3){break;}
                    }}
           

            };

    

    const correctAnswer =() =>{
            M.toast({html : 'correct answer',
                     classes: 'toast-valid',
                    displayLength: 1000});
                    setScore(score + 1);
                    setCorrectAnswers(correctAnswers + 1);
                    setNumberOfAnsweredQuestions(numberOfAnsweredQuestions + 1);
                    let cqi=currentQuestionIndex+1;
                    //if(cqi === numberOfQuestions){{  endGame();}} 
                    if(cqi === numberOfQuestions|| questions[currentQuestionIndex].question === undefined){endGame();}
                   
                    else{ setCurrentQuestionIndex(currentQuestionIndex + 1);
                    displayQuestions(questions,currentQuestion,nextQuestion,previousQuestion);
                    }                
                };
    const wrongAnswer =() =>{
        M.toast({html : 'wrong answer',
                 classes: 'toast-invalid',
                displayLength: 1000});
                setWrongAnswers(wrongAnswers +1);
                setNumberOfAnsweredQuestions(numberOfAnsweredQuestions +1);
                let cqi=currentQuestionIndex+1;
                // if(cqi === numberOfQuestions){  endGame()}
                if(cqi === numberOfQuestions || questions[currentQuestionIndex+1].question === undefined){endGame();} 
                
                
                   else {setCurrentQuestionIndex(currentQuestionIndex + 1);
                    displayQuestions(questions,currentQuestion,nextQuestion,previousQuestion);
                     }    
 };


   const startTimer=()=>{
            const countDownTime= Date.now()+180000;
            interval=setInterval(()=>{
            const now= new Date();
            const distance= countDownTime-now;
            const min=Math.floor((distance%(1000*60*60))/(1000*60));
            const sec=Math.floor((distance%(1000*60))/(1000));
            if(distance<=0){
                clearInterval(interval);
                setTime(
                    {
                        seconds:0,
                        minutes:0
                    });
                    endGame();}
            
            else{ setTime({minutes:min,seconds:sec});}
        },1000);
    }

   const  endGame=()=>{
        alert('quiz has ended');
        setTimeout(()=>{
            navigate('/play/quizSummary',{state: {score:score, 
                numberOfQuestions:numberOfQuestions,
                numberOfAnsweredQuestions:numberOfAnsweredQuestions,
                correctAnswers:correctAnswers,
                wrongAnswers:wrongAnswers}});
        },1000);
    }


     return(
            <Fragment>
                    <Helmet><title></title>Quiz Page</Helmet>
                    <div className="questions">
                        <h2>Quiz</h2>
                            <div className="lifeline-container">
                                <p>
                                    <span 
                                    onClick={handleHints} 
                                    className="mdi mdi-lightbulb-on outline mdi-24px lifeline-icon"></span>
                                    <span  className="lifeline">{hints}</span>
                                </p>
                            </div>
                            <div className="timer-container">
                                <p>
                                    <span className="left">{currentQuestionIndex +1} of {numberOfQuestions}</span>
                                    <span className="right">{time.minutes}:{time.seconds} <span className="mdi mdi-clock-outline mdi-24px"></span></span>
                                    
                                </p>
                            </div>
                            <h5>{questions[currentQuestionIndex].question}</h5>
                            <div className="options-container">
                                <p onClick={handleOptionClick} className="option">{questions[currentQuestionIndex].optionA}</p>
                                <p onClick={handleOptionClick} className="option">{questions[currentQuestionIndex].optionB}</p>
                            </div>
                            <div className="options-container">
                            <p onClick={handleOptionClick} className="option">{questions[currentQuestionIndex].optionC}</p>
                            <p onClick={handleOptionClick} className="option">{questions[currentQuestionIndex].optionD}</p>
                            </div>
                            <div className="button-container">
                                <button  onClick={handlePreviousButtonClick} >previous</button>
                                <button  onClick={handleNextButtonClick}>next</button>
                    
                                <button  onClick={handleQuitButtonClick} >quit</button>
                            </div>
                            </div>
            </Fragment>
        );
    };

export default Play;