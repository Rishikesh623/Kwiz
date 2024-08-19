import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Button } from 'react-bootstrap';

function Associates() {

    const { associates, requests, approveStudent } = useContext(UserContext);

    return (
        <>
            <table className="table caption-top bg-white rounded mt-2">
                <caption className='text-white fs-4'>Students</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Reg_no </th>
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

            <table className="table caption-top bg-white rounded mt-2">
                <caption className='text-white fs-4'>Requests</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Reg_no </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        requests &&
                        requests.map((request, index) => (
                            <>
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{request}</td>
                                    {/* <td>{associate.department}</td>
                                    <td>{associate.reg_no}</td> */}
                                </tr>
                                <Button variant="dark" onClick={(e) => approveStudent(e,request)} >
                                    Approve
                                </Button>
                            </>
                        ))

                    }
                </tbody>
            </table>


        </>
    )
};
export default Associates;