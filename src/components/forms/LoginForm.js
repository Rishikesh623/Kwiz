import React, { Fragment,useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const[allEntry,setAllEntry] = useState([]);
    
    const submitForm = (event) => {
        // Prevent page reload
        event.preventDefault();

        const newEntry = {email : email,password:password};
        setAllEntry([... allEntry,newEntry]);
        console.log(allEntry);
    }
    return (
        <Fragment>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"></link>
            <div className="form">
                <form action="" onSubmit={submitForm} className="form-container">
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
                <div>
                    {
                        allEntry.map((curElemt) => {
                        return (<div className="showData">
                                <p>{curElemt.email}</p>
                                <p>{curElemt.password}</p>
                            </div>)
                        })
                    }
                </div>
            </div>
        </Fragment>

    )
}

export default LoginForm;