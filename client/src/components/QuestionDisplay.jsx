import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

const QuestionDisplay = ({ selectedQuestion, questions, answers, setAnswers }) => {
  const question = questions[selectedQuestion - 1]; // Assuming questions are stored in an array
  const [selectedAnswer, setSelectedAnswer] = useState(answers[selectedQuestion - 1]);

  useEffect(() => {
    // Update selected answer when navigating to a different question
    setSelectedAnswer(answers[selectedQuestion - 1]);
  }, [selectedQuestion, answers]);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    // Update the answers array with the selected answer
    const updatedAnswers = [...answers];
    updatedAnswers[selectedQuestion - 1] = {question_id:(selectedQuestion),selected_option:option};
    setAnswers(updatedAnswers);
    console.log(answers);
  };

  return (
    <>
      <Card className='question-card'>
        <Card.Header>Question {selectedQuestion}</Card.Header>
        <Card.Body>
          <Card.Title>{question.question}</Card.Title>
          <Card.Text>
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerClick(option)}
                variant={selectedAnswer === option ? 'primary' : 'outline-primary'}
              >
                {option}
              </Button>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default QuestionDisplay;
