import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import { UserContext } from "../../context/UserContext";

const CourseList = () => {

    const { associates } = useContext(UserContext);

    return (
        <>
            {
                associates &&
                associates.map((associate, index) => (
                    <Card key={index}>
                        <Card.Header as="h5">{associate}</Card.Header>
                        <Card.Body>
                            <Card.Title>Course 1</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary" ><Link className="white-text" to={`${associate}`}>Go to quizzes</Link></Button>
                        </Card.Body>
                    </Card>
                ))
            }


        </>
    )
};


export default CourseList;