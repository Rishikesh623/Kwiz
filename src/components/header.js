import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onImage1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <header className="absolute top-[0px] left-[-6px] w-[1436px] overflow-hidden flex flex-col items-end justify-center">
      <header className="w-[1430px] overflow-hidden flex flex-col items-end justify-center">
        <header className="w-[1348px] h-[136px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[378px] text-left text-31xl text-black font-ruslan-display">
          <div className="w-[494px] h-[136px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[11px]">
            <img
              className="relative w-[145px] h-[136px] object-cover cursor-pointer"
              alt=""
              src="/image-1@2x.png"
              onClick={onImage1Click}
            />
            <h1 className="m-0 relative text-inherit tracking-[0.05em] font-normal font-inherit">
              QUIZEE.COM
            </h1>
          </div>
          <div
            className="w-[476px] h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[41px] cursor-pointer"
            onClick={onFrameContainer2Click}
          >
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
    </header>
  );
};

export default Header;
