import React from "react";
import LeftBodyLogin from "../leftBodyLogin/LeftBodyLogin";
import RightBodyLogin from "../rightBodyLogin/RightBodyLogin";

const LoginBody = () => {
  return (
    <div className="flex flex-col mx-3 lg:mx-0 items-center gap-9 lg:flex-row lg:justify-around mt-8 mb-16">
      <div className=" lg:w-[45%]">
        <LeftBodyLogin />
      </div>
      <div className="lg:w-[45%]">
        <RightBodyLogin />
      </div>
    </div>
  );
};

export default LoginBody;
