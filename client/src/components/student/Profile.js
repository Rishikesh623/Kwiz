import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
    const { userProfile,editProfileInfo,setEditProfileInfo,saveProfile} = useContext(UserContext);

    // Split the name into parts
    const nameParts = userProfile.username.split(' ');
    // Get the first letter of each part
    const initials = nameParts.map(part => part.charAt(0)).join('');

    const updateInfo = (event) => {
        console.log(editProfileInfo);
        setEditProfileInfo({ ...editProfileInfo, [event.target.name]: event.target.value });
    };

    return (
        <div className="container-fluid mt-5">
            <div className="row g-3 my-2">
                <div className="col-md-4 p-1">
                    <div className="p-3 bg-white shadow-sm d-flex flex-column align-items-center rounded">
                        <div className="profile-picture">
                            {initials}
                        </div>
                        <h3 className="fs-2">{userProfile.username}</h3>
                        <p className="fs-5">{userProfile._id}</p>
                        <p className="fs-5">{userProfile.about}</p>
                    </div>
                </div>
                <div className="col-md-8 p-1">
                    <div className="p-3 bg-white shadow-sm rounded">

                        <h5>Contact Information</h5>
                        <hr />
                        <p>Email: {userProfile.email}</p>
                        <p>Phone: {userProfile.phone}</p>

                        <h5>Address</h5>
                        <hr />
                        <p>{userProfile.address}</p>
                    </div>
                </div>
                <button className="btn btn-primary mt-3 w-auto" data-toggle="modal" data-target="#editProfileModal">
                    <i className="bi bi-pencil-square"></i> Edit Profile
                </button>
            </div>
            
            <div className="modal fade" id="editProfileModal" tabIndex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editProfileModalLabel">Edit Profile</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" name="username"  placeholder={userProfile.username} onChange={updateInfo} contentEditable/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email"  placeholder={userProfile.email} onChange={updateInfo} contentEditable/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="number" className="form-control" name="phone"  placeholder={userProfile.phone} onChange={updateInfo} contentEditable/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" name="address" placeholder={userProfile.address} onChange={updateInfo} contentEditable/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="about">About</label>
                                    <textarea className="form-control" name="about" rows="3"  onChange={updateInfo} ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={(e) => {saveProfile(e)}} data-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
