import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "../context/UserContext";
import { getRequest } from '../utils/services';

const Quizzes = () => {
    const { associates,userProfile,setUserProfile } = useContext(UserContext);

    const [quizzes, setQuizzes] = useState([]);
    const [limit, setLimit] = useState(5);
    const [quizloading, setQuizLoading] = useState(false);
    const [quizLoaderror, setQuizLoadError] = useState(null);
    const [hasMore, setHasMore] = useState(true);

    const fetchQuizzes = async () => {
        setQuizLoading(true);
        const adminIDs = associates.join(',');
        try {
            const queryParams = new URLSearchParams({
                limit,
                adminIDs
            });

            const response = await getRequest(`/quiz?${queryParams}`);
            setUserProfile({...userProfile,total_quizzes:response.totalQuizzes});
            
            setHasMore(response.quizzes.length < response.totalQuizzes);
            setQuizzes(response.quizzes);
            setLimit(limit+5);
            setQuizLoading(false);
            
        } catch (err) {
            setQuizLoadError(err.message);
            setQuizLoading(false);
        }
    };

    useEffect(() => {
        fetchQuizzes();
    }, [associates]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {
    //             if(hasMore && !loading){
    //                 fetchQuizzes();
    //             }
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [hasMore, loading]);

    if (quizloading && quizzes.length === 0) return <p>Loading...</p>;
    if (quizLoaderror) return <p>{quizLoaderror}</p>;

    return (
        <div>
            <table className="table caption-top bg-white rounded mt-2">
                <caption className='text-white fs-4'>Recent Quizzes</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Course name</th>
                        <th scope="col">Total Marks</th>
                        <th scope="col">Date </th>
                    </tr>
                </thead>
                <tbody>
                    {quizzes.map((quiz, index) => (
                        <tr key={quiz._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{quiz.created_by}</td>
                            <td>20</td>
                            <td>{new Date(quiz.createdAt).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {quizloading && <p>quizloading more...</p>}
            {!quizloading && hasMore && (
                <button className="btn btn-primary mt-2" onClick={fetchQuizzes}>
                    See More
                </button>
            )}
        </div>
    );
};

export default Quizzes;
