const mongoose = require("mongoose");
const userModel = require("../Models/userModel");
const userAssociationModel = require("../Models/userAssociationModel");
const bcrypt =require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken=  (_id)=>{
    return jwt.sign({_id},process.env.JWT_SECRET_KEY,{expiresIn : "3d"});
}

const userRegistration = async (req,res)=>{

    try{
        const {_id,username,email,password,role} = req.body;
        
        //client side error
        if(!_id || !username || !email || !password ){
            return res.status(422).json("Error : fill the required fields."); 
        }
        // if user is already registered 
        const userExist = await userModel.findOne({_id:_id});
        if(userExist){
            return res.status(422).json(" User already exists ."); 
        }

        const user = new userModel({_id,username,email,password,role});
        console.log(user);
        await user.save();

        //create a new association 
        const Association = new userAssociationModel({_id,role,associatedUsers: [],requests: []});
        await Association.save();
        console.log('Admin association saved!');

        const token = createToken(_id);
    
        //send data to client 
        return res.status(200).json({_id,username,email,role,token});
                
        // res.send(req.body);
    }
    catch(error){
        return res.status(500).send(error);
    }
}

const userLogin = async (req,res) => {
    try{
        const {_id,password} = req.body;
    
        //client side error
        if( !_id || !password){
            return res.status(422).json("Error : fill the required fields."); 
        }
        
        // if user is not registered 
        const userExist = await userModel.findOne({_id : _id});

        if(!userExist){
            return res.status(422).json("Error : User not exists ."); 
        }
       
        const isValidPassword = await bcrypt.compare(password,userExist.password);

        if(!isValidPassword)
            return res.status(400).json("Invalid email or password.");

        const token = createToken(_id);
    
        //send data to client 
        return res.status(200).json({_id,username: userExist.username,email: userExist.email,role: userExist.role,token});
                
        // res.send(req.body);
    }
    catch(error){ 
        return res.status(500).send(error);
    }
}


const requestAssociation = async (req, res) => {
    
    try {
        const { userId, associateUserId } = req.body; // userId and asociateUserIds are passed in the request body
    
        //client side error
        if( !userId || !associateUserId){
            return res.status(422).json("Please fill the Course Id."); 
        }

        // find the existing association
        console.log(userId);
        let user_Association = await userAssociationModel.findOne({_id:userId});

        const alreadyJoined = user_Association.associatedUsers.includes(associateUserId);

        if (alreadyJoined) {
            return res.status(422).json("Already enrolled in this Course.");
        }

        const alreadyRequested = user_Association.requests.includes(associateUserId);

        if (alreadyRequested) {
            return res.status(422).json("Already requested for this Course.");
        }

        let associateuser_Association = await userAssociationModel.findOne({_id:associateUserId});
        
        if (associateuser_Association===null) {
            return res.status(422).json("Course not exist.");
        }

        //push new student IDs to the existing request array
        user_Association.requests.push(...[associateUserId]);
        associateuser_Association.requests.push(...[userId]);
            
        await user_Association.save();
        await associateuser_Association.save();
        
        console.log("Admin association requested!");

        return res.status(200).json(user_Association);

    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while processing the admin association Request.');
    }
};

const approveAssociation = async (req,res) => {
    const { userId, associateUserId } = req.body; // userId and asociateUserIds are passed in the request body

    try {
        // find the existing association
        const user_Association = await userAssociationModel.findByIdAndUpdate(
            userId,
            {
                $pull: { requests: associateUserId }, // Remove 'stringToRemove' from array1
                $push: { associatedUsers: associateUserId } // Add 'stringToRemove' to array2
            },
            {new : true}
        );

        const associateuser_Association = await userAssociationModel.findByIdAndUpdate(
            associateUserId,
            {
                $pull: { requests: userId }, // Remove 'stringToRemove' from array1
                $push: { associatedUsers: userId } // Add 'stringToRemove' to array2
            },
            {new : true}
        );
            
        await user_Association.save();
        await associateuser_Association.save();
        
        return res.status(200).json(user_Association);

    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while processing the admin association Request.');
    }
};
const getAssociatedUsers = async (req,res) =>{
    try {
        const userId = req.params.userId;
        const users = await userAssociationModel.findOne({_id : userId}).populate('associatedUsers');
        
       return  res.json(users);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


const getUserProfile = async(req,res) => {
    try {
        const _id = req.params._id;
        const profile = await userModel.findOne({_id : _id});
        
        return  res.json({ _id,username:profile.username,email:profile.email,phone:profile.phone,address:profile.address,about:profile.about});

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const updateUserProfile = async (req,res) => {
    try {
        
        const userId = req.body._id;        
        const profile = await userModel.findByIdAndUpdate(userId,{$set :req.body},{new:true});
        
        await profile.save();

        return  res.json({ userId,username:profile.username,email:profile.email,phone:profile.phone,address:profile.address,about:profile.about});

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {userRegistration,userLogin,requestAssociation,approveAssociation,getAssociatedUsers,getUserProfile,updateUserProfile};