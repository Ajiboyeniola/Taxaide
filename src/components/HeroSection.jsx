import image from "../assets/hero.png";
const HeroSection = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center text-white pt-12 pb-6 px-8 lg:px-[90px]">
      <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center lg:items-start">
        {/* flex flex-col gap-8 */}
        <div className="flex flex-col gap-4 text-center lg:text-left ">
          <h1 className="text-[46px] leading-[46px]">
            Secure & seamless online transactions
          </h1>
          <p className="text-lg ">
            Providing you with the best online payment experience
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
      <div className="w-full lg:w-1/2">
        <img src={image} alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
