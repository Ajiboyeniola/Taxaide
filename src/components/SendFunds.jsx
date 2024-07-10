import React from "react";
import { payment, paymentImage } from "../constants";

const SendFunds = () => {
  return (
    <div className="container mx-auto pt-12 pb-6 px-[90px]">
      <div className="bg-gradient-to-r from-[#5CB23A] to-[#048002] flex items-center justify-between text-white rounded-[10px]">
        <div className="flex flex-col items-center lg:items-start gap-6 px-28 py-8">
          <ul className="">
            <li className="text-[36px] font-semibold">Send funds</li>
            <li className="text-[36px] font-normal">Remit taxes</li>
            <li className="text-[36px] font-normal">Buy utilities</li>
          </ul>
          <button
            href="#"
            className="bg-white to- text-[#048002] rounded-[10px] px-6 py-3"
          >
            Get Started
          </button>
        </div>

        <div className="hidden lg:flex h-[400px]">
          <img src={payment} alt="" className="h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default SendFunds;
