import { createContext, useEffect, useState } from "react";
import { getRequest, patchRequest } from "../utils/services";


export const UserContext = createContext();


//wraps our entire component tree
export const UserContextProvider = ({ children, user }) => {

    const [userProfile, setUserProfile] = useState({
        _id: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        about: ""
    });

    const [associates, setAssociates] = useState([]);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const getAssociates = async (userId) => {

            const res = await getRequest(`/findassociatedusers/${userId}`);

            if (res.error) {
                console.log(res.error);
                return;
            }

            setAssociates(res.associatedUsers);
            setRequests(res.requests);
        }
        if (user?._id)
            getAssociates(user._id);

    }, [user]);

    useEffect(()=>{
        console.log(userProfile);
    },[userProfile]);
    const [courseID, setCourseID] = useState("");
    const [joinAdminError, setJoinAdminError] = useState(null);

    const requestAdmin = async (event) => {

        setJoinAdminError(null);

        const res = await patchRequest("/req", { userId: user._id, associateUserId: courseID });

        if (res.error) {
            return setJoinAdminError(res);
        }

        setRequests(res.requests);

        console.log(res);
    };

    const approveStudent = async (event, request) => {
        const res = await patchRequest("/approve", { userId: user._id, associateUserId: request });

        setAssociates(res.associatedUsers);
        setRequests(res.requests);

        console.log(res);
    };

    const [editProfileInfo, setEditProfileInfo] = useState({});
    const [editProfileError, setEditProfileError] = useState(null);

    useEffect(() => {
        const getProfile = async (_id) => {
            // event.preventDefault();

            const res = await getRequest(`/profile/${user?._id}`);

            console.log(res);
            if (res.error) {
                return ;
            }
            setUserProfile(res);
            return res;
        };
        if (user?._id){
            getProfile(user._id);
            setEditProfileInfo({_id:user._id,username:user.username,email:user.email});
        }

    }, [user]);


    const saveProfile = async (event) => {
        event.preventDefault();

        setEditProfileError(null);

        const res = await patchRequest("/profile/edit", editProfileInfo);

        if (res.error) {
            return setEditProfileError(res);
        }

        setUserProfile(res);
    };

    return (
        <UserContext.Provider value={{
            associates, requests, courseID, setCourseID, joinAdminError, requestAdmin, approveStudent,
            userProfile,setUserProfile, editProfileInfo, setEditProfileInfo, editProfileError, saveProfile
        }}>
            {children}
        </UserContext.Provider>
    );
};
