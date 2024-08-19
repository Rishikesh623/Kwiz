const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
    question_id: { 
        type: Number, 
        required: true 
    },
    selected_option: { 
        type: String, 
        required: true 
    }
});

const resultSchema = new mongoose.Schema({
    quiz_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Quiz', 
        required: true 
    },
    student_id: { 
        type: String, 
        ref: 'User', 
        required: true 
    },
    score: { 
        type: Number, 
        required: true 
    },
    answers: [answerSchema],
    completed_at: { 
        type: Date, 
        default: Date.now 
    }
},
    {
        timestamps: true 
    }
);

module.exports = mongoose.model("Result", resultSchema);
