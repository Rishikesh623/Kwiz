import React, { Fragment,useState } from "react";
import { useNavigate } from 'react-router-dom';

const RegForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const[allRecords,setAllRecords] = useState([]);
    
    const submitForm = (event) => {
        // Prevent page reload
        event.preventDefault();

        const newRecord = {username : username,email:email,password:password,confirm:confirm,id:new Date().getTime().toString()};
        setAllRecords([... allRecords,newRecord]);

    }

    const PostData =async (event) => {
            event.preventDefault();
            const res = await fetch('http://localhost:8080/login',{
                method: "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    username,email,password,confirm
                })
            });

            const data = await res.json();
            if(res.status == 422 || !data){
                window.alert("Invalid Registration");
                
            }else{
                window.alert("Registration Successful.");
                navigate('/login');
            }
    }

    return (
        <Fragment>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"></link>
            <div className="form">
                <form action="" onSubmit={submitForm} className="form-container">
                    <div>
                        <label><i class="zmdi zmdi-account"></i> </label>
                        <input type="text" name="username" value={username} placeholder="Enter your name"
                            onChange={(event) => { setUsername(event.target.value) }}
                            required />
                    </div>
                    <div>
                        <label><i class="zmdi zmdi-mall"></i> </label>
                        <input type="email" name="email" value={email} placeholder="Enter your email"
                            onChange={(event) => { setEmail(event.target.value) }}
                            required />
                    </div>
                    <div>
                        <label><i class="zmdi zmdi-lock"></i> </label>
                        <input type="password" name="password" value={password} placeholder="Create a password"
                            onChange={(event) => { setPassword(event.target.value) }}
                            required />
                    </div>
                    <div>
                        <label><i class="zmdi zmdi-lock"></i> </label>
                        <input type="password" name="confirm" value={confirm} placeholder="Confirm password"
                            onChange={(event) => { setConfirm(event.target.value) }}
                            required />
                    </div>
                    <div>
                        <button type="submit" onClick = {PostData}>Register</button>
                    </div>
                </form>
                <div>
                    {
                        allRecords.map((curElemt) => {
                        return (<div className="showData">
                                <p>{curElemt.username}</p>
                                <p>{curElemt.email}</p>
                                <p>{curElemt.password}</p>
                                <p>{curElemt.confirm}</p>
                            </div>)
                        })
                    }
                </div>
            </div>
        </Fragment>

    )
}

export default RegForm;