import { useContext } from 'react'
import { Routes, Route  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { AuthContext } from './context/AuthContext';
import { UserContextProvider } from './context/UserContext';
import { QuizContextProvider } from './context/QuizContext';



function App() {
  const {user} = useContext(AuthContext);
  return (

    <>
      {/* <Quiz/> */}
      <UserContextProvider user={user}>
      <QuizContextProvider user={user}>

        <Routes>
            <Route path="*" element={user ? <Home user= {user}/> : <SignIn />} />
            <Route path="/signup" element={user ? <Home user= {user}/> : <SignUp />} />
            <Route path="/signin" element={user ? <Home user= {user}/> : <SignIn />} />
            
        </Routes>
        
      </QuizContextProvider>
      </UserContextProvider>

    </>
  );
}

export default App;



