import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onImage2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center">
      <main className="bg-white w-[1440px] h-[1024px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[41px] px-[69px] box-border gap-[29px] text-left text-31xl text-dimgray font-roboto">
        <section className="w-[1302px] overflow-hidden flex flex-col items-start justify-center">
          <img
            className="relative w-[219px] h-[190px] object-cover cursor-pointer"
            alt=""
            src="/image-2@2x.png"
            onClick={onImage2Click}
          />
        </section>
        <div className="w-[903.6px] h-[618px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[87px]">
          <div className="relative tracking-[0.05em] font-medium inline-block w-[194px] h-[55px] shrink-0">
            LOG IN
          </div>
          <div className="w-[902.8px] h-[197.6px] flex flex-col items-center justify-start pt-0 px-0 pb-[0.00000762939453125px] box-border gap-[24px] ml-px">
            <TextField
              className="[border:none] bg-[transparent]"
              color="primary"
              label="Email Address*"
              sx={{ width: 902.8 }}
              variant="standard"
            />
            <TextField
              className="[border:none] bg-[transparent]"
              color="primary"
              label="Password*"
              sx={{ width: 902.8 }}
              variant="standard"
            />
          </div>
          <div className="w-[660px] h-[190px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[38px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[660px] overflow-hidden flex flex-col items-start justify-center">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[659px] h-[76px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-24xl-5 bg-forestgreen" />
                <div className="absolute top-[23.68%] left-[42.19%] text-16xl tracking-[0.05em] font-semibold font-rubik text-white text-center">
                  Login
                </div>
              </button>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[660px] overflow-hidden flex flex-col items-start justify-center">
              <div className="relative w-[659px] h-[76px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-24xl-5 bg-forestgreen" />
                <div className="absolute top-[23.68%] left-[24.73%] text-16xl tracking-[0.05em] font-semibold font-rubik text-white text-center">
                  Login with google
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
