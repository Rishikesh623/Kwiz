// App.js
import React, { useContext, useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import { Row,Col,Container,Button } from 'react-bootstrap';
import LeftBar from '../LeftBar.jsx';
import QuestionDisplay from '../QuestionDisplay.jsx';
import { QuizContext } from '../../context/QuizContext.js';

const Quizzes = () => {
  const {storeResult} = useContext(QuizContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedQuestion, setSelectedQuestion] = useState(1); // Initial selected question

  const quiz = location.state;
  const questions = quiz.questions;
  const [answers,setAnswers]= useState([]);

  const submitResult = () => {
    let score=0;
    for(let i=0;i<questions.length;i++){
      if(questions[i].correct_option===answers[i].selected_option){
        score++;
      }
    }
    storeResult(quiz._id,answers,score);
    navigate(-1);
  }
  
  const handleSelectQuestion = (number) => {
    setSelectedQuestion(number);
  };
    return (<>
    <Container fluid className='quiz-page'>
      <Row>
        <Col xs='auto' md='auto' className='custom-sidebar'><LeftBar totalQuestions={questions.length} onSelectQuestion={handleSelectQuestion} /></Col>
        <Col className='question'>
        
        <QuestionDisplay selectedQuestion={selectedQuestion} questions={questions}  answers ={answers} setAnswers={setAnswers} />
        </Col>
        {
          
        }<Col xs='auto' md='auto' className='custom-sidebar'><Button onClick={submitResult}>Submit</Button></Col>

      </Row>
    </Container>
        
    </>)
};



export default Quizzes;