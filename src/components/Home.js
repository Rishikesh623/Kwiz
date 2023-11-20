import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () =>(
    <Fragment>
        <Helmet>
            <title>Quiz App-Home</title>
        </Helmet>
        <div id='home'>
            <section>
                <div style={{textAlign:"center"}}>
                    <span className="mdi mdi-cube-outline cube " ></span>
                </div>
                <h1>QUIZ APP</h1>
                <div className="play-button-container">
                            <Link className="play-button" to="/play/instructions"> play</Link>
                        
                </div>
                <div className="auth-container">
                    <Link className="auth-buttons" id="login-button" to="/login">login</Link>
                    <Link className="auth-buttons" id="signup-button" to="/register"> register</Link>
                </div>
            </section>       
        </div>
    </Fragment>
    );   

export default Home;