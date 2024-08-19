import React from 'react';
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

const SignIn = () => {

    const {signinInfo,setSignInInfo,signinUser,signinError} = useContext(AuthContext);
    
    const updateInfo = (event) => {
        setSignInInfo({ ...signinInfo, [event.target.name]: event.target.value });
    };

    return (
        <>
            <Container fluid className="vh-100">
                <Row className="h-100">
                    <Col md={5} className="d-flex flex-column justify-content-center align-items-center main-bg-dark">
                        <h1 className="display-4 text-white">Welcome to Our Kwizz Application</h1>
                        <p className="lead text-white">Conduct online quizzes smoothly.</p>
                    </Col>
                    <Col md={7} className="d-flex flex-column justify-content-center align-items-center main-bg-light">
                        <Form onSubmit={signinUser} className="form-container">  
                            <h2>Sign in</h2>
                            <hr/>
                            <Stack gap={4}>
                                <Form.Control type="text" name="_id" placeholder="Enter Student ID or Course ID" onChange={updateInfo} />
                                <Form.Control type="password" name="password" placeholder="Enter a Password" onChange={updateInfo} />
                                <Button variant="primary" type="submit">
                                    Sign in
                                </Button>
                                {signinError?.error && (
                                    <Alert variant="danger">
                                        <small>{signinError.message}</small>
                                    </Alert>
                                )}
                            <small>Don't have an account.<Link to ="../signup">Sign Up</Link></small>
                            </Stack>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default SignIn;
