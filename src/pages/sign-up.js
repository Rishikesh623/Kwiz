import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onImage3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center">
      <main className="bg-white w-[1440px] overflow-hidden flex flex-col items-start justify-start py-[37px] px-[50px] box-border gap-[17px] text-left text-31xl text-dimgray font-roboto">
        <div className="w-[764px] overflow-hidden flex flex-row items-start justify-between">
          <img
            className="relative w-[219px] h-[190px] object-cover cursor-pointer"
            alt=""
            src="/image-3@2x.png"
            onClick={onImage3Click}
          />
          <h2 className="m-0 text-inherit tracking-[0.05em] font-medium font-inherit inline-block w-[154px] mt-[95px]">
            Sign Up
          </h2>
        </div>
        <section className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[41px]">
          <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
            <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.00000762939453125px] gap-[23px]">
              <input
                className="font-inter text-6xl bg-gainsboro-200 box-border w-[902.8px] overflow-hidden flex flex-row items-center justify-between pt-[16.37457275390625px] px-[41.781982421875px] pb-[17.29583740234375px] border-[2px] border-solid border-black"
                placeholder="Email Address*"
                type="text"
              />
              <input
                className="font-inter text-6xl bg-gainsboro-200 box-border w-[902.8px] overflow-hidden flex flex-row items-center justify-between pt-[21.6834716796875px] px-[43px] pb-[22.195697784423828px] border-[2px] border-solid border-black"
                placeholder="Password*"
                type="text"
              />
              <input
                className="font-inter text-6xl bg-gainsboro-200 box-border w-[902.8px] overflow-hidden flex flex-row items-center justify-between pt-[21.6834716796875px] px-[43px] pb-[22.195697784423828px] border-[2px] border-solid border-black"
                placeholder="Confirm Password*"
                type="text"
              />
            </div>
          </div>
          <div className="w-[1137px] overflow-hidden flex flex-col items-end justify-center">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[937px] h-[78px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-32xl bg-forestgreen" />
              <div className="absolute top-[24.36%] left-[33.3%] text-16xl tracking-[0.05em] font-medium font-rubik text-white text-left">
                Create Account
              </div>
            </button>
          </div>
          <footer className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[66px] text-left text-[30px] text-black font-roboto">
            <div className="w-[914px] overflow-hidden flex flex-col items-end justify-center">
              <div
                className="relative tracking-[0.05em] cursor-pointer"
                onClick={onAlreadyHaveAnClick}
              >
                Already have an account? Log In
              </div>
            </div>
            <div className="w-[1024px] overflow-hidden flex flex-col items-end justify-center">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[659px] h-[76px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-24xl-5 bg-forestgreen" />
                <div className="absolute top-[23.68%] left-[24.58%] text-16xl tracking-[0.05em] font-semibold font-rubik text-white text-center">
                  Login with Google
                </div>
              </button>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default SignUp;
