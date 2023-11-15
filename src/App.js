import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Front from "./pages/front";
import RESULT from "./pages/r-e-s-u-l-t";
import QuizStart from "./pages/quiz-start";
import QuizList from "./pages/quiz-list";
import SignUp from "./pages/sign-up";
import Login from "./pages/login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/result":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-start":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-list":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Front />} />
      <Route path="/result" element={<RESULT />} />
      <Route path="/quiz-start" element={<QuizStart />} />
      <Route path="/quiz-list" element={<QuizList />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
