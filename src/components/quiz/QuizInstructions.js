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
        <h1>How to play the game</h1>
        <p>read the instructions carefully</p>
        <ul>
            <li>xjdjkmhugkuggkugkg</li>
            <li>hxhdcjgncdjhyfyj</li>
            <li>hgxdtdydikyfkuhgujhfuydeytey5te</li>
        </ul>
        <div>
            <span className="left"> <Link to='/'>No take me back</Link> </span>
            <span className="right"> <Link to='/play'>Yes lets go</Link> </span>
        </div>
    </div>
</Fragment>
    );

export default QuizInstructions;