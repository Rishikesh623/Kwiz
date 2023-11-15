import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Frame6 from "../components/frame6";

const QuizStart = () => {
  const navigate = useNavigate();

  const onImage2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-darkkhaki w-full overflow-hidden flex flex-col items-center justify-end gap-[93px]">
      <section className="w-[1440px] h-[266px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[33px] text-center text-81xl text-black font-sarpanch">
        <div className="w-[1200px] h-[190px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[57px] mr-60">
          <img
            className="relative w-[219px] h-[190px] object-cover cursor-pointer"
            alt=""
            src="/image-3@2x.png"
            onClick={onImage2Click}
          />
          <div className="w-[924px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <h1 className="m-0 relative text-inherit tracking-[0.05em] font-semibold font-inherit inline-block w-[924px]">
              QUIZ 1
            </h1>
          </div>
        </div>
        <div className="text-31xl tracking-[0.05em] font-alumni-sans text-red flex items-center justify-center w-[682px] h-[43px] shrink-0 ml-9">
          TIME REMAINING- 2:46 MINUTES
        </div>
      </section>
      <Frame6 />
    </div>
  );
};

export default QuizStart;
