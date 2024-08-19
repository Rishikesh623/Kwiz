const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    _id : {
        type:Number,
        required: true
    },
    question: { 
        type: String, 
        required: true 
    },
    options: [{ 
        type: String,  
    }],
    correct_option: { 
        type: String, 
        required: true 
    }
});

const quizSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    questions: [questionSchema],
    created_by: { 
        type: String, 
        ref: 'User', 
        required: true 
    },
    start_time:{
        type: Date,
        required:true
    },
    end_time:{
        type: Date,
        required:true
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Quiz", quizSchema);
