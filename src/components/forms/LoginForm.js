import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import character from '../../assets/img/login_char.jpg'; // Import your background image

const LoginForm = ({ setLoginUser }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState("");

    const login = async (event) => {
        event.preventDefault();

        const newEntry = { email: email, password: password };

        try {
            const res = await axios.post("http://localhost:9002/login", newEntry);
            // alert(res.data.message);
            if (res.data.message === "Login Successful") {
                setLoginUser(res.data.user);
                navigate("/play/instructions");
            }
            else {
                setShowError(res.data.message);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Fragment >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"></link>
            <div className="form">
                <div className="characters">
                   <figure> <img src={character} alt="Character 1" /></figure>
                </div>
                <form action="" onSubmit={login} className="form-container">
                    {showError && <div className="showError">{showError}</div>}
                    <div>
                        <label><i class="zmdi zmdi-mall"></i> </label>
                        <input type="email" name="email" value={email} placeholder="Enter your email"
                            onChange={(event) => { setEmail(event.target.value) }}
                            required />
                    </div>
                    <div>
                        <label><i class="zmdi zmdi-lock"></i> </label>
                        <input type="password" name="password" value={password} placeholder="Enter password"
                            onChange={(event) => { setPassword(event.target.value) }}
                            required />
                    </div>

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}


export default LoginForm;