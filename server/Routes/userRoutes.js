const express =  require("express");
const {userRegistration,userLogin,requestAssociation,approveAssociation,getAssociatedUsers,getUserProfile,updateUserProfile} = require("../Controllers/userController");
const router = express.Router();

router.post("/login",userLogin);
router.post("/register",userRegistration);

router.patch('/req', requestAssociation);
router.patch('/approve', approveAssociation);

router.get('/findassociatedusers/:userId', getAssociatedUsers);

router.get('/profile/:_id',getUserProfile);
router.patch('/profile/edit',updateUserProfile);

module.exports = router ; 