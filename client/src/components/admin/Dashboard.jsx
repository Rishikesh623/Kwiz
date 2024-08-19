import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function Dashboard() {

    const {associates} = useContext(UserContext);

    return (
        <>
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>{associates.length}</h3>
                                <p className='fs-5'>Total Students</p>
                            </div>
                            <i className="bi bi-person-fill p-3 fs-1"></i>
                        </div>
                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>12</h3>
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
            <table className="table caption-top bg-white rounded mt-2">
                <caption className='text-white fs-4'>Recent Quizzes</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Course name</th>
                        <th scope="col">Total Marks</th>
                        <th scope="col">Date </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Maths</td>
                        <td>20</td>
                        <td>10-12-2023</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
};
export default Dashboard;