import React, { useContext, useState } from 'react';
import Sidebar from '../components/SideBar';
import Dashboard from '../components/admin/Dashboard';
import Associates from '../components/admin/Associates';
import Quizzes from '../components/admin/Quizzes';
import Logout from '../components/admin/Logout';
import Nav from '../components/Nav'
import { AuthContext } from '../context/AuthContext';
import { QuizContext } from '../context/QuizContext';


const Admin = ({ Component }) => {
    const {user} = useContext(AuthContext);
    const {getQuizzes} = useContext(QuizContext);

    const [toggle, setToggle] = useState(true);

    const Toggle = () => {
        setToggle(!toggle);
    };

    const renderContent = () => {
        switch (Component) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Students':
                return <Associates />;
            case 'Quizzes':{
                return <Quizzes />;
            }
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

export default Admin;
