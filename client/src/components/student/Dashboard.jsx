import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import QuizHistory from '../QuizHistory';

function Dashboard() {

    const {associates,userProfile} = useContext(UserContext);
   
    return (
        <>
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>{associates.length}</h3>
                                <p className='fs-5'>Total Admins</p>
                            </div>
                            <i className="bi bi-person-fill p-3 fs-1"></i>
                        </div>
                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>{userProfile.total_quizzes}</h3>
                                <p className='fs-5'>Quizzes</p>
                            </div>
                            <i className='bi bi-question-square-fill p-3 fs-1'></i>
                        </div>
                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>2250</h3>
                                <p className='fs-5'>XYZ</p>
                            </div>
                            <i className='bi bi-truck p-3 fs-1'></i>
                        </div>
                    </div>
                </div>
            </div>
            <QuizHistory/>
        </>
    )
};
export default Dashboard;