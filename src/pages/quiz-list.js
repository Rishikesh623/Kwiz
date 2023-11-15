import { useCallback } from "react";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

const QuizList = () => {
  const navigate = useNavigate();

  const onQUIZAQUIZClick = useCallback(() => {
    navigate("/quiz-start");
  }, [navigate]);

  return (
    <div className="relative [background:linear-gradient(206.51deg,_rgba(121,_34,_118,_0.81),_rgba(237,_181,_181,_0)_92.86%)] w-full h-[1755px] overflow-hidden">
      <Header />
      <section className="absolute top-[233px] left-[108px] text-81xl tracking-[0.05em] font-semibold font-sarpanch text-gray-100 text-center flex items-center justify-center w-[1265px] h-28">
        QUIZ LIST
      </section>
      <section
        className="absolute top-[399px] left-[138px] text-inherit tracking-[0.05em] font-semibold font-inherit text-black text-left inline-block w-[1163px] h-[1150px] cursor-pointer"
        onClick={onQUIZAQUIZClick}
      >
        <ul className="m-0 pl-[93px]">
          <li className="mb-[1.5px]">QUIZ A</li>
          <li className="mb-[1.5px]">QUIZ B</li>
          <li className="mb-[1.5px]">QUIZ C</li>
          <li className="mb-[1.5px]">QUIZ D</li>
          <li className="mb-[1.5px]">QUIZ E</li>
          <li>QUIZ F</li>
        </ul>
      </section>
    </div>
  );
};

export default QuizList;
