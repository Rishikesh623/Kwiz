import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import { QuizContext } from "../../context/QuizContext";

const Quizzes = () => {

    const { quizzList, showResult,submitted} = useContext(QuizContext);

    const checkStartTime = (start_time) => {
        const startTime = new Date(start_time);
        const currentTime = new Date();

        return currentTime < startTime;
    }
    const checkEndTime = (end_time) => {
        const endTime = new Date(end_time);
        const currentTime = new Date();

        return currentTime > endTime;
    }

    return (
        <>
            {
                quizzList &&
                quizzList.map((quiz, index) => (
                    <Card className="mb-3" key={index}>
                        <Card.Header as="h5">{quiz.title}</Card.Header>
                        <Card.Body>
                            <Card.Title>created on {(quiz.createdAt).slice(0, 10)}</Card.Title>
                            <Card.Text>
                                {quiz.description}
                            </Card.Text>
                            {
                                (checkStartTime(quiz.start_time)) ?
                                    <p>Quiz will Start at shortly </p> :
                                    (checkEndTime(quiz.end_time)) ?
                                        <Button variant="primary" onClick={() => showResult(quiz._id)}>
                                            <Link className="white-text" to={`result/${quiz._id}`} state={quiz}>
                                                View Result
                                            </Link>
                                        </Button> :
                                        (submitted) ? <p>Submitted</p>
                                            :
                                            <Button variant="primary">
                                                <Link className="white-text" to={`${quiz._id}`} state={quiz}>
                                                    Start
                                                </Link>
                                            </Button>
                            }

                        </Card.Body>
                    </Card>
                ))
            }


        </>
    )
};


export default Quizzes;