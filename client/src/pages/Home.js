import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import Student from './Student';
import Quiz from '../components/student/Quiz';
import Quizzes from '../components/admin/Quizzes';
import QuizResult from '../components/student/QuizResult';

const Home = ({ user }) => {

    if (user.role === "admin") {
        
        return (
            <>
                <Routes>
                    <Route path="/" element={<Admin Component={"Dashboard"} />} />
                    <Route path="/Dashboard" element={<Admin Component={"Dashboard"} />} />
                    <Route path="/Profile" element={<Admin Component={"Profile"} />} />
                    <Route path="/Students" element={<Admin Component={"Students"} />} />
                    <Route path="/Quizzes" element={<Admin Component={"Quizzes"} />} />
                    <Route path="/Quizzes/:quiz_id" element={<Quizzes/>}/>
                    <Route path="/Logout" element={<Admin Component={"Logout"} />} />
                    
                </Routes>
            </>
        );
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<Student Component={"Dashboard"} />} />
                <Route path="/Dashboard" element={<Student Component={"Dashboard"} />} />
                <Route path="/Profile" element={<Student Component={"Profile"} />} />
                <Route path="/Courses" element={<Student Component={"Courses"} />} />
                <Route path="/Quizzes" element={<Student Component={"CourseList"} />} />
                <Route path="/Quizzes/:course_id" element={<Student Component={"Quizzes"} />} />
                <Route path="/Quizzes/:course_id/:quiz_id" element={<Quiz/>} />
                <Route path="/Quizzes/:course_id/result/:quiz_id" element={<QuizResult/>} />
                <Route path="/Logout" element={<Student Component={"Logout"} />} />
            </Routes>
        </>
    );

};




export default Home;
