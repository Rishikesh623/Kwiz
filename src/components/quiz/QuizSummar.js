import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
class QuizSummary extends Component{
    constructor(props){
        super(props);
        this.state={
            score:0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers:0
        }
    }
    componentDidMount(){
        const {state}= this.props.location;
        this.setState({
            score : (state.score/state.numberOfQuestions) *100,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
            correctAnswers: state.correctAnswers,
            wrongAnswers:state.wrongAnswers}
        );
    }
    render(){
        const {state} =this.props.location;
        let stats;
        if(state !== undefined){
            stats=(
                <Fragment>
                <div>
                    <span className="mdi mdi-check-circle-outline success-icon"></span>
                </div>
                <h1> quiz has ended</h1>
                <div className="container">
                    <h4>Well Done</h4>
                    <h2>Your Score : {this.state.score.toFixed(0)}&#37</h2>
                    <span className="left stat">Total number of Questions:</span>
                    <span className="right">{this.state.numberOfQuestions}</span><br />
                    <span className="left stat">Total number of answersed Questions:</span>
                    <span className="right">{this.state.numberOfAnsweredQuestions}</span><br />
                    <span className="left stat">Total number of correct answers:</span>
                    <span className="right">{this.state.correctAnswers}</span><br />
                    <span className="left stat">Total number of wrong answers:</span>
                    <span className="right">{this.state.wrongAnswers}</span><br />
                </div>
                <section>
                    <ul>
                        <li>
                            <Link to="/">Back To Home</Link>
                        </li>
                        <li>
                            <Link to="/play/quiz">Play Again</Link>
                        </li>
                    </ul>
                </section>
                </Fragment>
               
            );
        }
        else{
            stats=(
            <section>
            <h1 className="no-stats">stats is unavailable</h1>
            <ul>
                <li>
                    <Link to="/">Back To Home</Link>
                </li>
                <li>
                    <Link to="/play/quiz">Take a Quiz</Link>
                </li>
            </ul>
        </section>);
        }
        return(
        <Fragment>
            <Helmet><title>Quiz-app-summary</title></Helmet>
            {stats}
        </Fragment>       
         );
    }
}
export default QuizSummary;