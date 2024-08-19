const express =require('express');
const { createQuiz,findQuiz ,storeResult,findQuizResult,getResults,getAllQuizzes} =  require("../Controllers/quizController");

const router = express.Router();



router.get("/quiz",getAllQuizzes);

router.post("/quiz/add",createQuiz); 
router.get("/quiz/:adminId",findQuiz);

router.post("/quiz/results/add",storeResult);  //result store after submission from student 
router.get("/quiz/results/find/:quizId/:studentId",findQuizResult); //for student 

router.get("/quiz/results/:quizId",getResults); // for admin 
module.exports = router;