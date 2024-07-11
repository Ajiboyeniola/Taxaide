import circle from "../../src/assets/circle embellishment.svg";
import picture from "../assets/picture.jpg";

const BussinessHeroSection = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center text-white pt-12 pb-40 px-[90px] mb-96 relative">
      <div className="z-10">
        <div className="w-full z-10 flex flex-col gap-4 items-center px-0 lg:px-48">
          {/* flex flex-col gap-8 */}
          <div className="flex flex-col gap-4 text-center ">
            <h1 className="text-[46px] leading-[56px]">
              Manage payroll, compliance & HR in real time
            </h1>
            <p className="text-lg px-0 lg:px-20">
              Make income tax remittances to the state internal revenue service
              for your employees.
            </p>
          </div>
          <div className="">
            <button
              href="#"
              className="bg-gradient-to-r from-[#5CB23A] to-[#048002] rounded-[10px] px-6 py-3"
            >
              Create free account
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-10">
        <img
          src={circle}
          alt="Background Circle"
          className="h-[320px] object-cover max-w-fit md:w-auto"
        />
      </div>

      <div className="absolute md:-bottom-[55%] -bottom-[48%] lg:left-1/2 lg:transform lg:-translate-x-1/2">
        <img
          src={picture}
          alt="imag"
          className="w-[300px] md:w-[600px] lg:w-[800px] h-[374px] rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default BussinessHeroSection;
