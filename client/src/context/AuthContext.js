import { createContext, useEffect, useState } from "react";
import {postRequest} from "../utils/services";


export const AuthContext =  createContext();


//wraps our entire component tree
export const AuthContextProvider = ({children}) => {
    
    const [user,setUser] = useState(null);


    useEffect(()=>{
        const user = localStorage.getItem("User");
        setUser(JSON.parse(user));
    },[]);

    const [registerInfo,setRegisterInfo] = useState({
        _id:"",
        username : "",
        email : "",
        password : "",
        role : "student"
    });
    const [isRegistering,setIsRegistering] = useState(false);
    const [registerError,setRegisterError] = useState(null);

    const registerUser = async (event) =>{

        event.preventDefault();

        setIsRegistering(true);
        setRegisterError(null);

        const res = await postRequest("/register",registerInfo);

        setIsRegistering(false);

        if(res.error){
            return setRegisterError(res);
        }

        localStorage.setItem("User",JSON.stringify(res));
        setUser(res);
        
    }

    const [signinInfo, setSignInInfo] = useState({
        _id: "",
        password: ""
    });

    const [isSigning,setIsSigning] = useState(false);
    const [signinError, setSignInError] = useState({ error: false, message: "" });

    const signinUser = async (event) => {
        event.preventDefault();

        setIsSigning(true);
        setSignInError(null);

        const res = await postRequest("/login", signinInfo);

        setIsSigning(false);
        if (res.error) {
            return setSignInError(res);
        }
        // console.log(res);
        localStorage.setItem("User",JSON.stringify(res));
        setUser(res);
    }

    const logoutUser = () => {
        localStorage.removeItem("User");
        setUser(null);
    };
    
    
    return (
        <AuthContext.Provider value = {{user,setUser,registerInfo,setRegisterInfo,registerUser,isRegistering,registerError,
                                            signinInfo,setSignInInfo,signinUser,isSigning,signinError,logoutUser}}>
            {children}
        </AuthContext.Provider>
    );
};

// export default AuthContextProvider;
// export {AuthContext};