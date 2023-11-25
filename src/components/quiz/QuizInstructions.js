import React from "react";
import { Fragment} from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const QuizInstructions=({user}) =>(
<Fragment>
    <Helmet><title>Quiz instructions- quiz app</title></Helmet>
    {/* {console.log(user.name)} */}
    <div className="username container">{user ? user.name : "Guest"}</div>

    <div className="instructions container">
        <h1>How to attemp this quiz</h1>
        <p>Read the instructions carefully</p>
        <ul>
            <li>There will be 15 questions</li>
            <li>You will get 3 minutes to complete the quiz</li>
            <li>Try to score as much as possibke</li>
        </ul>
        <div>
            <span className="left"> <Link to='/'>No take me back</Link> </span>
            <span className="right"> <Link to='/play'>Yes lets go</Link> </span>
        </div>
    </div>
</Fragment>
    );

export default QuizInstructions;