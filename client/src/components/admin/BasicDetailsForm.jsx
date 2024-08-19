import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const BasicDetailsForm = ({ onNext }) => {
  const [details, setDetails] = useState({
    title: '',
    description: '',
    start_time: '',
    end_time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(details);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Quiz Title</Form.Label>
          <Form.Control type="text" name="title" value={details.title} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" value={details.description} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formStartTime">
          <Form.Label>Start Time</Form.Label>
          <Form.Control type="datetime-local" name="start_time" value={details.start_time} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formEndTime">
          <Form.Label>End Time</Form.Label>
          <Form.Control type="datetime-local" name="end_time" value={details.end_time} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">Next</Button>
      </Form>
    </>
  );
};

export default BasicDetailsForm;
