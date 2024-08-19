import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Sidebar() {

    const { user, logoutUser } = useContext(AuthContext);


    const link = (user.role === "admin") ? ("Students") : ("Courses");

    return (
        <div className='bg-white sidebar p-2'>
            <div className='m-2'>
                <div className="kwizapp">
                    KwizApp
                </div>
                
                <span className=''>{user.username}</span>
            </div>

            <hr className='text-dark' />

            <div className='list-group list-group-flush'>
                <Link to="/Dashboard" className='list-group-item py-2'>
                    <i className='bi bi-speedometer2 fs-5 me-3'></i>

                    <span>Dashboard</span>
                </Link>
                <Link to={`/${link}`} className='list-group-item py-2'>
                    <i className="bi bi-people-fill fs-5 me-3"></i>
                    <span>{link}</span>
                </Link>
                <Link to="/Quizzes" className='list-group-item py-2'>
                    <i className="bi bi-question-square-fill fs-5 me-3"></i>
                    <span>Quizzes</span>
                </Link>
                <Link onClick={logoutUser} className='list-group-item py-2'>
                    <i className="bi bi-box-arrow-left fs-5 me-3"></i>
                    <span>Logout</span>
                </Link>
            </div>

        </div>
    );
}

export default Sidebar;
