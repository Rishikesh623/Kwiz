// LeftBar.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


const LeftBar = ({ totalQuestions, onSelectQuestion }) => {
  const questionNumbers = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  return (
    <>
      <ButtonToolbar aria-label="Toolbar with button groups" className='quiz-leftbar '>
        <ButtonGroup vertical className="me-2" aria-label="First group">
          {questionNumbers.map((number) => (
            <Button key={number} onClick={() => onSelectQuestion(number)}>
              {number}
            </Button>
          ))}
        </ButtonGroup>
        {/* <ButtonGroup aria-label="Third group">
        <Button>8</Button>
      </ButtonGroup> */}
      </ButtonToolbar>
    </>

  );
};

export default LeftBar;
