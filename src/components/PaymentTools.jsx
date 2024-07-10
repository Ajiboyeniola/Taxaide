import { features } from "../constants";

const PaymentTools = () => {
  return (
    <div className="container mx-auto pt-12 pb-6 px-[90px] flex flex-col gap-10">
      <div className="flex flex-col gap-2 text-[#4F4F4F] text-center">
        <h6 className="text-[26px] leading-[36px] font-semibold ">
          Payments tools designed for you
        </h6>
        <p className="text-lg ">
          Explore payment features that provides you with every possible
          solution
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="border border-[#5CB23A] border-opacity-25 p-6 rounded-lg text-center lg:text-left flex flex-col gap-8 items-center lg:items-start flex-1"
          >
            <div className="w-12 h-12">
              <img src={feature.icon} alt={feature.title} />
            </div>
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <h2 className="text-xl font-medium text-[#0F0919] text-opacity-80">
                {feature.title}
              </h2>
              <p className="text-base font-normal text-[555555]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentTools;
