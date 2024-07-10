import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PaymentTools from "./components/PaymentTools";
import Features from "./components/Features";
import Transact from "./components/Transact";
import SendFunds from "./components/SendFunds";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#060809] ">
        <HeroSection />
      </div>

      <div className="">
        <PaymentTools />
        <Features />
        <Transact />
        <SendFunds />
        <Footer />
      </div>
    </>
  );
};

export default App;
