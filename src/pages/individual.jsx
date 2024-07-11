import React from "react";
import HeroSection from "../components/HeroSection";
import PaymentTools from "../components/PaymentTools";
import Features from "../components/Features";
import Transact from "../components/Transact";
import SendFunds from "../components/SendFunds";
import { embellishment } from "../constants";

const Individual = () => {
  return (
    <>
      <div className="bg-[#060809] ">
        <HeroSection />
      </div>

      <div className="container mx-auto">
        <PaymentTools />
        <div className="relative">
          <Features />
          <div className="hidden lg:block absolute right-0 bottom-[25%] -z-10">
            <img
              src={embellishment}
              alt="cirle icon"
              className="object-cover h-[772px]"
            />
          </div>
          <Transact />
        </div>
        <SendFunds />
      </div>
    </>
  );
};

export default Individual;
