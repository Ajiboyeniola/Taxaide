import React from "react";
import { payment } from "../constants";

const SendFunds = () => {
  return (
    <div className="container mx-auto pt-12 pb-6 px-8 lg:px-[90px]">
      <div className="w-full bg-gradient-to-r from-[#5CB23A] to-[#048002] flex items-center justify-between text-white rounded-[10px]">
        <div className="w-full lg:w-[30%] flex flex-col items-center justify-center lg:items-start gap-6 py-8 mx-12">
          <ul className="">
            <li className="text-[32px] font-semibold">Send funds</li>
            <li className="text-[32px] font-normal">Remit taxes</li>
            <li className="text-[32px] font-normal">Buy utilities</li>
          </ul>
          <button
            href="#"
            className="bg-white to- text-[#048002] rounded-[10px] px-6 py-3"
          >
            Get Started
          </button>
        </div>

        <div className="hidden lg:flex w-[70%]">
          <img src={payment} alt="" className="h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default SendFunds;
