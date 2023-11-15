import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const RESULT = () => {
  const navigate = useNavigate();

  const onImage2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/quiz-list");
  }, [navigate]);

  const onWANNAGIVEMOREClick = useCallback(() => {
    navigate("/quiz-list");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrameContainer9Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative [background:linear-gradient(119.4deg,_rgba(206,_244,_49,_0.43)_21.88%,_rgba(212,_36,_36,_0))] w-full h-[1024px] overflow-hidden flex flex-col items-center justify-center gap-[22px]">
      <section className="w-[1440px] overflow-hidden flex flex-col items-start justify-center text-center text-81xl text-limegreen font-sarpanch">
        <div className="w-[1086px] h-[190px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[135px]">
          <img
            className="relative w-[219px] h-[190px] object-cover cursor-pointer"
            alt=""
            src="/image-3@2x.png"
            onClick={onImage2Click}
          />
          <h1 className="m-0 relative text-inherit tracking-[0.05em] font-semibold font-inherit flex items-center justify-center w-[732px] shrink-0">
            CONGO !!
          </h1>
        </div>
      </section>
      <section className="w-[1170px] overflow-hidden flex flex-col items-start justify-center text-center text-[60px] text-black font-sarpanch">
        <div className="w-[1139px] h-[658px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
          <div className="w-[1139px] flex flex-col items-center justify-start">
            <div className="w-[1139px] h-[130px] flex flex-row items-center justify-end pt-[5px] pb-0 pr-3 pl-0 box-border">
              <h2 className="m-0 relative text-inherit tracking-[0.05em] font-normal font-inherit flex items-center justify-center w-[1127px] h-[130px] shrink-0">
                YOUR SCORE: 90 %
              </h2>
              <div className="relative bg-plum w-[1139px] h-[125px] ml-[-1127px]" />
            </div>
            <div className="bg-gainsboro-100 w-[1139px] h-[528px] flex flex-col items-center justify-start p-[23px] box-border gap-[15px] text-left text-13xl">
              <div className="w-[1093px] h-[378px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[138px]">
                <div className="w-[1082px] overflow-hidden flex flex-col items-center justify-start h-[135px] mr-[11px]">
                  <div className="relative tracking-[0.05em] flex items-center w-[1082px]">
                    NO OF CORRECT ANSWERS:
                  </div>
                  <div className="relative tracking-[0.05em] flex items-center w-[1082px]">
                    NO OF INCORRECT ANSWERS:
                  </div>
                  <div className="relative tracking-[0.05em] flex items-center w-[1082px]">
                    TOTAL TIME TAKEN:
                  </div>
                </div>
                <div className="w-[527px] h-[105px] overflow-hidden shrink-0 flex flex-col items-center justify-start text-center text-darkblue">
                  <div className="relative w-[527px] h-[105px] overflow-hidden shrink-0" />
                  <div className="w-[527px] h-[105px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[15px] mt-[-105px]">
                    <div
                      className="w-[527px] overflow-hidden flex flex-col items-start justify-center cursor-pointer"
                      onClick={onFrameContainer4Click}
                    >
                      <div
                        className="relative tracking-[0.05em] flex items-center justify-center w-[515px] cursor-pointer"
                        onClick={onWANNAGIVEMOREClick}
                      >
                        WANNA GIVE MORE QUIZZES?
                      </div>
                    </div>
                    <div
                      className="w-[527px] overflow-hidden flex flex-col items-start justify-center cursor-pointer"
                      onClick={onFrameContainer5Click}
                    >
                      <div className="relative tracking-[0.05em] flex items-center justify-center w-[515px]">
                        BUILD YOUR OWN QUIZ HERE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[537px] overflow-hidden flex flex-col items-end justify-center cursor-pointer text-center text-darkblue"
                onClick={onFrameContainer9Click}
              >
                <div className="relative tracking-[0.05em] flex items-center justify-center w-[515px]">
                  HOME
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RESULT;
