import React, { Fragment,useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import character from '../../assets/img/register.jpg'; // Import your background image
import validator from 'validator';


function RegForm() {

    const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirm: ''
  });

  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    confirm: ''
  });

  const[alreadyRegistered,setAlreadyRegistered] = useState('')

  const handleUsernameChange = (event) => {
    const username = event.target.value;
    setUser({ ...user, username: username });

    const re = /^\S*$/; // Regex for no whitespace
    if (username.length < 6 || !re.test(username)) {
        setError({ ...error, username: "at least 6 characters" });
    } else {
        setError({ ...error, username: "" });
    }
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setUser({ ...user, email: email });

    if (!validator.isEmail(email)) {
        setError({ ...error, email: 'Enter valid Email!' });
    } else {
        setError({ ...error, email: "" });
    }
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setUser({ ...user, password: password });

    if (password.length < 8) {
        setError({ ...error, password: "Password length should be more than 8 characters" });
    } else {
        setError({ ...error, password: "" });
    }
  };

  const handleConfirmChange = (event) => {
    const confirm = event.target.value;
    setUser({ ...user, confirm: confirm });

    if (user.password !== confirm) {
        setError({ ...error, confirm: "Confirm Password didn't match" });
    } else {
        setError({ ...error, confirm: "" });
    }
  };

  const register = (event) => {
    event.preventDefault();

    if (!Object.values(error).some(x => x !== '')) {
        axios.post("http://localhost:9002/register", user)
        .then( res => {
            if(res.data.message === "User already registered")
                setAlreadyRegistered(res.data.message);
            else
                navigate("/login");
        })
    }
  };

  return (
    <Fragment>
            {/* {console.log(user)} */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"></link>
            <div className="form">
                
                <form action="" className="form-container">
                    {alreadyRegistered && <div className="Registered">{alreadyRegistered}</div>}
                    <div>
                        <label><i className="zmdi zmdi-account"></i> </label>
                        <input type="text" name="username" value={user.username} placeholder="Enter your name"
                            onChange={handleUsernameChange}
                            required />
                    </div>
                        <span className="error">{error.username}</span>
                    <div>
                        <label><i class="zmdi zmdi-mall"></i> </label>
                        <input type="email" name="email" value={user.email} placeholder="Enter your email"
                            onChange={handleEmailChange}
                            required />
                    </div>
                        <p className="error">{error.email}</p>
                    <div>
                        <label><i class="zmdi zmdi-lock"></i> </label>
                        <input type="password" name="password" value={user.password} placeholder="Create a password"
                            onChange={handlePasswordChange}
                            required />
                    </div>
                        <span className="error">{error.password}</span>
                    <div>
                        <label><i class="zmdi zmdi-lock"></i> </label>
                        <input type="password" name="confirm" value={user.confirm} placeholder="Confirm password"
                            onChange={handleConfirmChange}
                            required />
                    </div>
                        <span className="error">{error.confirm}</span>
                    <div>
                        <button type="submit" onClick = {register}>Register</button>
                    </div>
                </form>

                <div className="characters">
                   <figure> <img src={character} alt="Register" /></figure>
                </div>
                
                {/* <div>
                    {
                        user.map((curElemt) => {
                        return (<div className="showData">
                                <p>{curElemt.username}</p>
                                <p>{curElemt.email}</p>
                                <p>{curElemt.password}</p>
                                <p>{curElemt.confirm}</p>
                            </div>)
                        })
                    }
                </div> */}
            </div>
        </Fragment>
  );
}

export default RegForm;
