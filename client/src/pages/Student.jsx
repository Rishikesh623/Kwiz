import React, { useState } from 'react';
import Sidebar from '../components/SideBar';
import Dashboard from '../components/student/Dashboard';
import Profile from '../components/student/Profile';
import CourseList from '../components/student/CourseList';
import Logout from '../components/student/Logout';
import Courses from '../components/student/Courses';
import Nav from '../components/Nav'
import Quizzes from '../components/student/Quizzes';


const Student = ({ Component }) => {
    const [toggle, setToggle] = useState(true);

    const Toggle = () => {
        setToggle(!toggle);
    };
    
    const renderContent = () => {
        switch (Component) {
            case 'Profile':
                return <Profile/>
            case 'Dashboard':
                return <Dashboard />;
            case 'CourseList':
                return <CourseList/>
            case 'Quizzes':
                return <Quizzes />
            case 'Courses':
                return <Courses />;
            case 'Logout':
                return <Logout />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className='container-fluid home-board min-vh-100'>
            <div className='row'>
                {toggle && (
                    <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
                        <Sidebar />
                    </div>
                )}
                {toggle && <div className='col-4 col-md-2'></div>}
                <div className='col'>
                    <div className='Main-board px-3'>
                        <Nav Toggle={Toggle}/>
                        {renderContent()}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Student;
