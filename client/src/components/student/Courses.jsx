import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Button, Alert } from 'react-bootstrap';


function Courses() {

    const { associates, requests, courseID, setCourseID, joinAdminError, requestAdmin } = useContext(UserContext);

    const updateInfo = (event) => {
        setCourseID(event.target.value);
        console.log(courseID);
    };

    return (
        <>  
            {
                associates.length>0 &&

                <table className="table caption-top bg-white rounded mt-2">
                    <caption className='text-white fs-4'>Courses</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Course Id</th>
                            <th scope="col">Department</th>
                            <th scope="col">Admin Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            associates &&
                            associates.map((associate, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{associate}</td>
                                    {/* <td>{associate.department}</td>
                                    <td>{associate.reg_no}</td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
            {
                associates.length===0 &&
                <h3>No Courses yet.</h3>
            }
            {
                requests.length>0 &&
                <>
                    <table className="table caption-top bg-white rounded mt-2">
                        <caption className='text-white fs-4'>Requests</caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Course Id</th>
                                <th scope="col">Department</th>
                                <th scope="col">Admin Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                requests.map((request, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{request}</td>
                                        {/* <td>{associate.department}</td>
                                <td>{associate.reg_no}</td> */}
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </>
            }



            <input name="associateUserId" type="text" placeholder="Enter Admin Id" onChange={updateInfo}></input>
            <Button variant="dark" onClick={requestAdmin} >
                Join
            </Button>
            {
                joinAdminError?.error
                &&
                <Alert variant="danger">
                    <small>{joinAdminError?.message}</small>
                </Alert>
            }
        </>
    )
};
export default Courses;









/*

callback in button 

Passing Arguments: Allows you to pass arguments to the function.
Binding this
Flexibility 

*/