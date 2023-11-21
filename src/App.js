import React from "react";
import QuizInstructions from "./components/quiz/QuizInstructions.js";
import {
   BrowserRouter as Router,
    Route, 
    Routes
} from "react-router-dom";
 import Home from "./components/Home.js" ;
 import Play from "./components/quiz/Play.js";
 import QuizSummary from "./components/quiz/QuizSummary.js";
 import LoginForm from "./components/forms/LoginForm.js";
 import RegForm from "./components/forms/RegForm.js";

function App(){

    return(
        <Router>
            <Routes> 
                <Route path="/" exact  Component={Home}/> 
                <Route path="/play/instructions" exact Component={QuizInstructions}/>
                <Route path="/play" exact Component={Play}/>
                <Route path="/play/quizSummary" exact Component={QuizSummary}/>
                <Route path="/login" exact Component={LoginForm}/>
                <Route path="/register" exact Component={RegForm}/>
                </Routes>
        </Router>
    );
}

export default App;