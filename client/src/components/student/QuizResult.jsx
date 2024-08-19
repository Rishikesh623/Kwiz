import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { QuizContext } from '../../context/QuizContext';

const QuizResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentResult, resultError, resultLoading, setResultLoading } = useContext(QuizContext);
  
  //ensure that location.state and currentResult are not null
  const quiz = location.state || {};
  const questions = quiz.questions || [];
  const userAnswers = currentResult?.answers || []; 

  // Check if data is still loading or if there is an error
  useEffect(() => {
    setResultLoading(false);
    console.log(userAnswers);
  }, [currentResult, resultLoading]);

  const goBack = () => {
    navigate(-1);
  };

  if (resultLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container className='result-page'>
      <div className='d-flex justify-content-between'>
        <h2 className="mb-4">Quiz Result</h2>
        <Button style={{ height: "35px" }} onClick={goBack}>Back</Button>
      </div>

      <Container className='result-box p-2 d-flex justify-content-between'>
        <strong>Quiz Title : {quiz.title}</strong>
        <strong>Date : {quiz.createdAt}</strong>
      </Container>

      <Container className='result-box mb-4 p-2 d-flex justify-content-between'>
        <h6>Total Questions: {questions.length}</h6>
        {
          !resultError && <h6>Total Correct Answers: {currentResult?.score || 0}</h6>
        }
        {
          resultError && <h6>{resultError.message}</h6>
        }
      </Container>

      <Container className='result-box p-3'>
        {questions.map((question, index) => (
          <Container className='result-box' key={index}>
            <Row>
              <Col md={8}>
                <strong>Q{index + 1}. {question.question}</strong>
              </Col>
              <Col md={4} className="mt-2 d-flex justify-content-end">
                {userAnswers[index]?.selected_option === question.correct_option ? (
                  <Badge bg="success">Correct</Badge>
                ) : (
                  <Badge bg="danger">Wrong</Badge>
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                {question.options.map((option, optionIndex) => (
                  <Button
                    key={optionIndex}
                    variant={
                      userAnswers[index]?.selected_option === option
                        ? option === question.correct_option
                          ? 'success' // Correct answer turns green
                          : 'danger' // Incorrect answer turns red
                        : option === question.correct_option
                          ? 'success' // Unselected correct answer remains green
                          : 'secondary' // Unselected incorrect answer remains gray
                    }
                    className="mr-2 mt-2 mb-2 result-options"
                    disabled
                  >
                    {option}
                  </Button>
                ))}
              </Col>
            </Row>
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default QuizResult;
