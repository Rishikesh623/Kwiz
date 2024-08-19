import { createContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { postRequest, getRequest } from "../utils/services";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children, user }) => {

  const [quizzList, setQuizzList] = useState([]);

  //create quiz
  const [isAddingQuiz, setIsAddingQuiz] = useState(null);
  const [addQuizError, setAddQuizError] = useState(null);
  const addQuiz = async (quiz) => {


    quiz.created_by = user._id;

    setIsAddingQuiz(true);
    setAddQuizError(null);

    const res = await postRequest("/quiz/add", quiz);

    if (res.error) {
      return setAddQuizError(res);
    }
    return res;
  };


  const location = useLocation();


  //get quizzes
  useEffect(() => {
    const getQuizzes = async (course_id) => {

      const res = await getRequest(`/quiz/${course_id}`);

      if (res.error) {
        console.log(res?.message);
        return;
      }

      setQuizzList(res);

      // console.log(res);
    };

    const handleRouteEnter = () => {
      const path = location.pathname;
      const pathSegments = path.split('/');

      if (user?.role === 'student' && pathSegments[1] === 'Quizzes' && pathSegments[2]) {
        let course_id = pathSegments[2];
        getQuizzes(course_id);
      } else if (user?.role === 'admin' && path === '/Quizzes') {
        let course_id = user._id;
        getQuizzes(course_id);
      }
    };

    handleRouteEnter();
  }, [location.pathname, user]);



  const [currentResult, setCurrentResult] = useState([]);
  const [resultLoading, setResultLoading] = useState(false);
  const [resultError, setResultError] = useState(null);

  
  const showResult = async (quiz_id) => {

    setResultLoading(true);
    setResultError(null);
    
    const res = await getRequest(`/quiz/results/find/${quiz_id}/${user._id}`);
    
    if (res==null || res.error) {
      return setResultError(res);
    }

    setCurrentResult(res);
  };


  const [storeResultError,setStoreResultError] = useState({error:true,message:"has to submit"});
  const [submitted,setSubmitted] = useState(false);

  useEffect(() => {
    // Check if the quiz was previously submitted (on page load)
    const storedSubmitted = localStorage.getItem('submitted');
    if (storedSubmitted === 'true') {
      setSubmitted(true);
    }
  }, []);

  const storeResult = async (quiz_id,answers,score) => {

      const res = await postRequest("/quiz/results/add", {quiz_id,student_id : user._id,score,answers});

      if (res?.error) {
          return setStoreResultError(res);
      }
      setSubmitted(true);
      localStorage.setItem('submitted', true);
      setStoreResultError({error:false});
  };

  return (
    <QuizContext.Provider value={{
      quizzList, addQuiz, isAddingQuiz, addQuizError,
      currentResult,resultError,resultLoading,setResultLoading, showResult,
      storeResult,storeResultError,setStoreResultError,submitted,
    }}>
      {children}
    </QuizContext.Provider>
  );
};
