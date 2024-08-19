import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { Card, Alert, Button, Form, Row, Col, Stack, Modal } from 'react-bootstrap';
import { QuizContext } from '../../context/QuizContext';
import BasicDetailsForm from './BasicDetailsForm';
import QuestionsForm from './QuestionsForm';


const Quizzes = () => {
  const { quizzList, addQuiz, isAddingQuiz, addQuizError } = useContext(QuizContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const [step, setStep] = useState(1);
  const [quizDetails, setQuizDetails] = useState(null);

  const handleNext = (details) => {
    setQuizDetails(details);
    setStep(2);
  };

  const handleSubmit = (questions) => {
    const quiz = { ...quizDetails, questions };
    // Submit quiz to the backend
    addQuiz(quiz);
    if (addQuizError?.error) {
      return alert(addQuizError.message);
    }
    handleClose();
  };
  return (<>
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Add Quiz
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Quiz details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {step === 1 && <BasicDetailsForm onNext={handleNext} />}
          {step === 2 && <QuestionsForm onSubmit={handleSubmit} />}
        </Modal.Body>
      </Modal>
    </div>


    {
      quizzList &&
      quizzList.map((quiz, index) => (
        <Card key={index} className='mb-3'>
          <Card.Header as="h5">
            <div className='d-flex justify-content-between'>
              <span>{quiz.title}</span>
              <span>{(quiz.createdAt).slice(0, 10)}</span>
            </div>
          </Card.Header>
          <Card.Body style ={{padding:'8px'}}>
            <div className='d-flex justify-content-between'>
              <Card.Text>{quiz.description}</Card.Text>
              <Button variant="primary" size='sm'><Link className="white-text" to={`${123}`}>Edit</Link></Button>
            </div>
          </Card.Body>
        </Card>
      ))
    }

  </>)
};


export default Quizzes;
