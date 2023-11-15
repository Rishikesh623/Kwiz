import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame6 = () => {
  const navigate = useNavigate();

  const onSUBMITTextClick = useCallback(() => {
    navigate("/result");
  }, [navigate]);

  return (
    <section className="w-[1174px] overflow-hidden flex flex-col items-start justify-center text-left text-xl text-black font-secular-one">
      <div className="w-[1172px] h-[584px] overflow-hidden shrink-0 flex flex-row items-start justify-end">
        <div className="rounded-31xl bg-lightcyan w-[1172px] h-[584px] flex flex-col items-start justify-end pt-[207px] px-[86px] pb-[37.00001525878906px] box-border gap-[53px]">
          <div className="w-[1012px] h-[209px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[41px]">
            <div className="w-[1012px] h-[84px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[208px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[402px] h-[84px] flex flex-col items-center justify-start">
                <div className="relative bg-plum w-[399px] h-[82px]" />
                <div className="relative text-31xl tracking-[0.05em] font-sawarabi-gothic text-black text-center inline-block w-[402px] h-[84px] shrink-0 mt-[-82px]">
                  OPTION A
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[402px] h-[84px] flex flex-col items-center justify-start">
                <div className="relative bg-plum w-[399px] h-[82px]" />
                <div className="relative text-31xl tracking-[0.05em] font-sawarabi-gothic text-black text-center inline-block w-[402px] h-[84px] shrink-0 mt-[-82px]">
                  OPTION B
                </div>
              </button>
            </div>
            <div className="w-[1012px] h-[84px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[208px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[402px] h-[84px] flex flex-col items-center justify-start">
                <div className="relative bg-plum w-[399px] h-[82px]" />
                <div className="relative text-31xl tracking-[0.05em] font-sawarabi-gothic text-black text-center inline-block w-[402px] h-[84px] shrink-0 mt-[-82px]">
                  OPTION C
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[402px] h-[84px] flex flex-col items-center justify-start">
                <div className="relative bg-plum w-[399px] h-[82px]" />
                <div className="relative text-31xl tracking-[0.05em] font-sawarabi-gothic text-black text-center inline-block w-[402px] h-[84px] shrink-0 mt-[-82px]">
                  OPTION D
                </div>
              </button>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-0 pr-[0.00042724609375px] pl-0 bg-[transparent] w-[346px] h-[78px] flex flex-col items-start justify-end box-border ml-[328px]">
            <div className="relative rounded-31xl bg-silver w-[343.4px] h-[76.1px]" />
            <div
              className="relative text-31xl tracking-[0.05em] font-sawarabi-gothic text-black text-center inline-block w-[346px] h-[78px] shrink-0 cursor-pointer mt-[-76px]"
              onClick={onSUBMITTextClick}
            >
              <p className="m-0">SUBMIT</p>
            </div>
          </button>
        </div>
        <div className="w-[1110px] h-[184px] overflow-hidden shrink-0 flex flex-row items-start justify-end ml-[-1120px]">
          <div className="w-[1086px] h-[184px] overflow-hidden shrink-0" />
          <div className="w-[1086px] h-[47px] overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-1062px]">
            <div className="relative tracking-[0.05em] flex items-center w-[1085px] h-[47px] shrink-0">
              QUESTION 1 OF 15
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame6;
