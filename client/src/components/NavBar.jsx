import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Nav ,Navbar, Stack } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Navbar  varient="dark" className="mb-4" style={{ backgroundColor:"#0B5899", height: "3.75rem" }}>
                <Container>
                    <h1><Link to="/" className="link-light text-decoration-none">Kwiz</Link></h1>
                    {/* <span className="text-warning">{user?.name}</span> */}
                    <Nav>
                        <Stack direction="horizontal" gap="3">
                            <Link to="/login" className="link-light text-decoration-none"><h5>Sign in</h5></Link>
                            <Link to="/register" className="link-light text-decoration-none"><h5>Sign up</h5></Link>
                        </Stack>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
