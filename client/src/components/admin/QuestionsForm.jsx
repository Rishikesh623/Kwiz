import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const QuestionsForm = ({ onSubmit }) => {
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correct_option: '' }]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formErrors, setFormErrors] = useState({});

  const validateFields = () => {
    const errors = {};
    const currentQuestion = questions[currentIndex];

    if (!currentQuestion.question) errors.question = 'Question is required';
    if (!currentQuestion.correct_option) errors.correct_option = 'Correct answer is required';
    if (!currentQuestion.options.some(option => option === currentQuestion.correct_option)) {
      errors.correct_option = 'Correct answer must be one of the options';
    }

    if (currentQuestion.options.some(option => !option)) {
      currentQuestion.options.forEach((option, i) => {
        if (!option) errors[`option-${i}`] = `Option ${i + 1} is required`;
      });
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newQuestions = [...questions];
    if (name.startsWith('option')) {
      const optionIndex = parseInt(name.split('-')[1], 10);
      newQuestions[index].options[optionIndex] = value;
    } else {
      newQuestions[index][name] = value;
    }
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    if (validateFields()) {
      if (currentIndex === questions.length - 1) {
        setQuestions([...questions, { question: '', options: ['', '', '', ''], correct_option: '' }]);
      }
      setCurrentIndex(currentIndex + 1);
      setFormErrors({}); // Clear errors when moving to the next question
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      onSubmit(questions);
    }
  };

  const q = questions[currentIndex] || {};

  return (
    <Form onSubmit={handleSubmit}>
      <div key={currentIndex}>
        <Form.Group controlId={`formQuestion-${currentIndex}`}>
          <Form.Label>Question {currentIndex + 1}</Form.Label>
          <Form.Control
            type="text"
            name="question"
            value={q.question}
            onChange={(e) => handleChange(currentIndex, e)}
            isInvalid={!!formErrors.question}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.question}
          </Form.Control.Feedback>
        </Form.Group>
        {q.options.map((option, i) => (
          <Form.Group controlId={`formOption-${currentIndex}-${i}`} key={i}>
            <Form.Label>Option {i + 1}</Form.Label>
            <Form.Control
              type="text"
              name={`option-${i}`}
              value={option}
              onChange={(e) => handleChange(currentIndex, e)}
              isInvalid={!!formErrors[`option-${i}`]}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors[`option-${i}`]}
            </Form.Control.Feedback>
          </Form.Group>
        ))}
        <Form.Group controlId={`formcorrect_option-${currentIndex}`}>
          <Form.Label>Correct Answer</Form.Label>
          <Form.Control
            type="text"
            name="correct_option"
            value={q.correct_option}
            onChange={(e) => handleChange(currentIndex, e)}
            isInvalid={!!formErrors.correct_option}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.correct_option}
          </Form.Control.Feedback>
        </Form.Group>
      </div>
      <div className="mt-3 d-flex justify-content-between">
        {currentIndex > 0 && (
          <Button variant="secondary" onClick={handlePrevious}>
            Previous Question
          </Button>
        )}
        <div>
          {currentIndex < questions.length - 1 ? (
            <Button variant="primary" onClick={addQuestion}>
              Next Question
            </Button>
          ) : (
            <Button variant="primary" onClick={addQuestion}>
              Add Question
            </Button>
          )}
        </div>
        <Button variant="primary" type="submit">
          Create Quiz
        </Button>
      </div>
    </Form>
  );
};

export default QuestionsForm;


