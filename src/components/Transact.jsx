import phone, {
  apple,
  appstore,
  download,
  get,
  google,
  googleplay,
} from "../constants";

const Transact = () => {
  return (
    <div className="container mx-auto pt-12 pb-6 px-8 lg:px-[90px] flex flex-col-reverse lg:flex-row  items-center gap-5 lg:gap-40">
      <div className="bg-[#F1F1F1] rounded-[8px] flex justify-center h-[320px] lg:h-[500px] px-24 pt-14">
        <img src={phone} alt="phone" className="w-[307px] object-contain" />
      </div>

      <div className="flex flex-col items-center lg:items-start gap-10">
        <div className="flex flex-col items-center lg:items-start gap-2 text-[#4F4F4F] text-center lg:text-left">
          <h1 className="text-[26px] leading-[36px] font-semibold">
            Transact on the go
          </h1>
          <p className="text-lg">
            Stay on top of your business with our easy-to-use app
          </p>
        </div>

        <div className="">
          <button
            href="#"
            className="bg-gradient-to-r from-[#5CB23A] to-[#048002] text-white rounded-[10px] px-6 py-3"
          >
            Get Started
          </button>
        </div>

        <div className="flex gap-6">
          <button
            href="#"
            className="bg-black flex items-center gap-2 border-2 border-[#A6A6A6] text-white rounded-[10px] px-2 py-2"
          >
            <img src={apple} alt="apple" className="w-8 h-8" />
            <div className="flex flex-col gap-1 items-start">
              <img src={download} alt="" />
              <img src={appstore} alt="" />
            </div>
          </button>

          <button
            href="#"
            className="bg-black flex items-center gap-2 border-2 border-[#A6A6A6] text-white rounded-[10px] px-2 py-2"
          >
            <img src={google} alt="apple" className="w-8 h-8" />
            <div className="flex flex-col gap-1 items-start">
              <img src={get} alt="" />
              <img src={googleplay} alt="" />
            </div>
          </button>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default Transact;
