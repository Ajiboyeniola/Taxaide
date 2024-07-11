import BussinessHeroSection from "../components/BussinessHeroSection";
import Features from "../components/Features";
import PaymentTools from "../components/PaymentTools";
import SendFunds from "../components/SendFunds";
import { embellishment } from "../constants";

export const Bussiness = () => {
  return (
    <>
      <div className="bg-[#060809] relative">
        <BussinessHeroSection />
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
          <SendFunds />
        </div>
      </div>
    </>
  );
};
