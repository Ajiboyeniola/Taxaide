import BussinessHeroSection from "../components/BussinessHeroSection";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import PaymentTools from "../components/PaymentTools";
import SendFunds from "../components/SendFunds";
import Transact from "../components/Transact";
import picture from "../assets/picture.jpg";
import circle from "../assets/circle embellishment.svg";

// ./pages/Bussiness.jsx
export const Bussiness = () => {
  // Component code here
  return (
    <>
      <div className="bg-[#060809] relative">
        <BussinessHeroSection />
      </div>

      <div className="">
        <PaymentTools />
        <Features />
        <Transact />
        <SendFunds />
      </div>
    </>
  );
};
