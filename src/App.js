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
 import { useState } from 'react';

function App(){
    const [ user, setLoginUser] = useState("{}");
    return(
        
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play/instructions" element={user && user._id ? <QuizInstructions setLoginUser={setLoginUser} user={user} /> : <QuizInstructions/>} />
            <Route path="/play" element={<Play />} />
            <Route path="/play/quizSummary" element={<QuizSummary />} />
            <Route path="/login" element={<LoginForm setLoginUser={setLoginUser}/>} />
            <Route path="/register" element={<RegForm />} />
        </Routes>

        </Router>
    );
}

export default App;