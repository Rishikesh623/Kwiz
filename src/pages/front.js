import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Front = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrame3Click = useCallback(() => {
    navigate("/quiz-list");
  }, [navigate]);

  const onRectangleContainerClick = useCallback(() => {
    navigate("/quiz-list");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/quiz-list");
  }, [navigate]);

  const onGETSTARTEDTextClick = useCallback(() => {
    navigate("/quiz-list");
  }, [navigate]);

  const onFrame5Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onRectangleContainer1Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="relative bg-white w-[1440px] h-[1024px] overflow-hidden shrink-0">
        <header className="absolute top-[29px] left-[4px] w-[1430px] overflow-hidden flex flex-col items-end justify-center">
          <header className="w-[1348px] h-[136px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[378px] text-left text-31xl text-black font-ruslan-display">
            <div className="w-[494px] h-[136px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[11px]">
              <img
                className="relative w-[145px] h-[136px] object-cover"
                alt=""
                src="/image-1@2x.png"
              />
              <h1 className="m-0 relative text-inherit tracking-[0.05em] font-normal font-inherit">
                QUIZEE.COM
              </h1>
            </div>
            <div className="w-[476px] h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[41px]">
              <div className="w-[378px] h-[43px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[24px]">
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[177px] h-[43px]"
                  onClick={onGroupButtonClick}
                >
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-lightgreen" />
                  <div className="absolute top-[23.26%] left-[30.51%] text-xl tracking-[0.05em] font-medium font-rubik text-black text-left">
                    Create
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[177px] h-[43px]"
                  onClick={onGroupButton1Click}
                >
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-lightgreen" />
                  <div className="absolute top-[23.26%] left-[17.51%] text-xl tracking-[0.05em] font-medium font-rubik text-black text-left">
                    Categories
                  </div>
                </button>
              </div>
              <img
                className="w-[57px] h-12 object-cover"
                alt=""
                src="/group-46@2x.png"
              />
            </div>
          </header>
        </header>
        <div className="absolute top-[173px] left-[0px] w-[1452px] h-[851px] overflow-hidden flex flex-col items-center justify-start">
          <div className="w-[1452px] h-[736px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
            <div className="bg-gray-200 w-[1440px] h-[723px] mr-3" />
            <img
              className="relative w-[1451px] h-[736px] overflow-hidden shrink-0 object-cover mt-[-723px]"
              alt=""
              src="/frame@2x.png"
            />
          </div>
          <section className="relative w-[1452px] h-[706px] overflow-hidden shrink-0 mt-[-591px] text-left text-81xl text-black font-sarpanch">
            <div className="absolute top-[0px] left-[446px] w-[560px] overflow-hidden flex flex-col items-start justify-center">
              <div className="relative tracking-[0.05em] font-semibold">
                WELCOME
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[194px] left-[217px] w-[1018px] overflow-hidden flex flex-col items-end justify-center"
              onClick={onFrame3Click}
            >
              <div
                className="relative w-[1016px] h-[81px] cursor-pointer"
                onClick={onRectangleContainerClick}
              >
                <button
                  className="cursor-pointer [border:none] p-0 bg-mediumorchid absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-21xl-5"
                  onClick={onRectangleButtonClick}
                />
                <div
                  className="absolute top-[13.58%] left-[32.19%] text-31xl tracking-[0.05em] font-semibold font-rubik text-white text-left cursor-pointer"
                  onClick={onGETSTARTEDTextClick}
                >{`GET STARTED `}</div>
              </div>
            </button>
            <div className="absolute top-[578px] left-[0px] w-[1452px] h-32 overflow-hidden flex flex-col items-center justify-end">
              <div className="w-[1452px] overflow-hidden flex flex-col items-start justify-center">
                <div className="relative bg-whitesmoke w-[1440px] h-32" />
              </div>
              <footer className="w-[1408px] overflow-hidden flex flex-col items-center justify-start mt-[-111px] text-left text-xl text-black font-ruslan-display">
                <div className="tracking-[0.05em] inline-block h-[22px] mr-[1272px]">
                  QUIZEE.COM
                </div>
                <div className="text-[15px] tracking-[0.05em] font-semibold font-roboto inline-block h-[18px] mr-[1342px]">
                  About us
                </div>
              </footer>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[329px] left-[219px] w-[1018px] overflow-hidden flex flex-col items-end justify-center"
              onClick={onFrame5Click}
            >
              <div
                className="relative w-[1016px] h-[81px] cursor-pointer"
                onClick={onRectangleContainer1Click}
              >
                <button
                  className="cursor-pointer [border:none] p-0 bg-mediumorchid absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-21xl-5"
                  onClick={onRectangleButton1Click}
                />
                <div className="absolute top-[13.58%] left-[20.57%] text-31xl tracking-[0.05em] font-semibold font-rubik text-white text-center">{`BUILD YOUR OWN QUIZ `}</div>
              </div>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Front;
