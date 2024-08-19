import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import { Container,Alert, Button, Form, Row, Col, Stack, Tab, Tabs } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {

    const { registerInfo, setRegisterInfo, registerUser, isRegistering, registerError } = useContext(AuthContext);
    const [selectedTab, setSelectedTab] = useState('student'); // Initialize with the default active key

    const updateInfo = (event) => {
        setRegisterInfo({ ...registerInfo, [event.target.name]: event.target.value });
    };


    //to handle admin or student tab select 
    const handleTabSelect = (key) => {
        setSelectedTab(key);
        setRegisterInfo({ ...registerInfo, "role": key });
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
                        <Form onSubmit={registerUser} className="form-container">
                            <h2>Sign up</h2>
                            <hr/>
                            <Tabs defaultActiveKey={selectedTab}  justify onSelect={handleTabSelect} className="mb-3">
                                <Tab eventKey="admin" title="Admin"></Tab>
                                <Tab eventKey="student" title="Student"></Tab>
                            </Tabs>
                            <Stack gap="4">
                                <Form.Control type="text" placeholder="Enter your Name" name="_id" onChange={updateInfo} />
                                <Form.Control type="text" placeholder="Enter your Name" name="username" onChange={updateInfo} />
                                <Form.Control type="text" placeholder="Enter your Email" name="email" onChange={updateInfo} />
                                <Form.Control type="text" placeholder="Enter  a Password" name="password" onChange={updateInfo} />

                                <Button variant="primary" type="submit">
                                    {isRegistering ? "Signing up..." : "Sign up"}
                                </Button>
                                {
                                    registerError?.error
                                    &&
                                    <Alert variant="danger">
                                        <small>{registerError?.message}</small>
                                    </Alert>
                                }
                       
                                <small>Already have an account.<Link to="../signin">Sign in</Link></small>

                            </Stack>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default SignUp;