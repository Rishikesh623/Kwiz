import React, { useContext } from "react";
import {Link} from "react-router-dom";
import {Button,Card} from 'react-bootstrap';
import { QuizContext } from "../context/QuizContext";

const Quizzes = () => {

    const {quizzList} = useContext(QuizContext);

    return (
        <>
             {
                            quizzList &&
                            quizzList.map((quiz, index) => (
                                <Card>
                                    <Card.Header as="h5">{quiz.title}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{(quiz.createdAt).slice(0, 10)}</Card.Title>
                                        <Card.Text>
                                            {quiz.description}
                                        </Card.Text>
                                        <Button variant="primary"><Link className="white-text"  to={`${123}`}>Start</Link></Button>
                                    </Card.Body>
                                </Card>
                            ))
                        }

            
        </>
    )
};


export default Quizzes;