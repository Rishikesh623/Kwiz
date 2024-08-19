const mongoose = require("mongoose");
const quizModel = require("../Models/quizModel");
const resultModel = require("../Models/resultModel");

const createQuiz = async (req, res) => {
    try {
        const { title, description, questions, created_by, start_time, end_time } = req.body;

        //client side error
        if (!title || !description || !questions.length || !created_by || !start_time || !end_time) {
            return res.status(422).json("Error : fill the required fields.");
        }

        let i;z
        for (i = 0; i < questions.length; i++) {
            const { question, options, correct_option } = questions[i];

            if (!question || !correct_option) {
                return res.status(422).json("Enter the question or correct answer.");
            }
            questions[i]._id = i + 1;
            console.log(questions);
        }
        const quiz = new quizModel({ title, description, questions, created_by, start_time, end_time });

        // console.log(quiz);

        await quiz.save();

        //send data to client 
        return res.status(200).json({ title, description, questions, created_by });

        // res.send(req.body);
    }
    catch (error) {
        return res.status(500).send(error);
    }
}

const findQuiz = async (req, res) => {

    try {
        const adminId = req.params.adminId;

        const quizzes = await quizModel.find({ created_by: adminId }).sort({ createdAt: -1 });;

        return res.json(quizzes);

    }
    catch (error) {
        res.status(500).send(error);
    }
};

const storeResult = async (req, res) => {
    try {
        const { quiz_id, student_id, score, answers } = req.body;

        //client side error
        if (!quiz_id || !student_id || !answers.length || !score) {
            return res.status(422).json("Error : fill the required fields.");
        }

        const result = new resultModel({ quiz_id, student_id, score, answers });

        console.log(result);

        await result.save();

        //send data to client 
        return res.status(200).json("Submitted Successfully.");

        // res.send(req.body);
    }
    catch (error) {
        return res.status(500).send(error);
    }
    ;
}

const findQuizResult = async (req, res) => {
    try {
        const quizId = req.params.quizId;
        const studentId = req.params.studentId;

        // console.log(quizId,studentId);
        const result = await resultModel.findOne({ quiz_id: quizId, student_id: studentId });

        if (result == null) {
            return res.status(422).json("You did not gave the quiz.")
        }
        return res.json(result);

    }
    catch (error) {
        return res.status(500).send(error);
    }
};
const getResults = async (req, res) => {
    try {
        const quizId = req.params.quizId;

        const results = await resultModel.find({ quiz_id: quizId });

        return res.json(results);

    }
    catch (error) {
        return res.status(500).send(error);
    }
};

const getAllQuizzes = async (req, res) => {
    const { limit = 5, adminIDs } = req.query;

    try {
        // Convert adminIDs query parameter into an array
        const adminIDArray = adminIDs ? adminIDs.split(',') : [];

        // Fetch the quizzes with filtering by adminID and limiting the number of results
        const quizzes = await quizModel.find({ created_by: { $in: adminIDArray } })
            .select('_id created_by createdAt')
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .exec();

        // Get the total number of quizzes that match the query
        const totalQuizzes = await quizModel.countDocuments({ created_by: { $in: adminIDArray } });

        res.json({ quizzes, totalQuizzes });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quizzes' });
    }
};



module.exports = { createQuiz, findQuiz, storeResult, findQuizResult, getResults, getAllQuizzes };