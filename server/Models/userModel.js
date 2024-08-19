const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    username: { 
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 30 
    },
    email: { 
        type: String, 
        required: true, 
        minlength: 9, 
        maxlength: 100, 
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    phone: { 
        type: Number, 
        minlength: 10, 
        maxlength: 10, 
        unique: true,
    },
    address: { 
        type: String, 
        maxlength: 100, 
    },
    about: { 
        type: String, 
        maxlength: 400, 
    },
    password: { 
        type: String, 
        required: true,
        minlength: 8, 
        maxlength: 100 
    },
    role: {
        type: String, 
        required: true,
        enum: ["student", "admin"]
    }
}, 
{
    timestamps: true
});


// Middleware to hash the password before saving the user document
// This ensures that passwords are always stored securely in the database
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    //proceed to the next middleware in the stack or to complete the save operation
    next();
});

module.exports = mongoose.model("User", userSchema);
