import { useState } from "react";
import { services } from "../constants";

const Features = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  return (
    <div className="container mx-auto pt-12 pb-6 px-8 lg:px-[90px] flex items-center justify-between">
      <div className="">
        <div className="flex flex-col items-center justify-center gap-10 lg:hidden">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 items-center justify-center text-center"
            >
              <div className="flex flex-col gap-2 text-[#4F4F4F]">
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="text-lg font-normal">{service.description}</p>
              </div>
              <img
                src={service.image}
                alt={service.title}
                className=" rounded-lg object-contain"
              />
            </div>
          ))}
        </div>
        <div className="w- hidden lg:flex flex-col">
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col border-l-[6px] pl-4 ${
                i === services.length - 1 ? "pb-0" : "pb-10"
              } cursor-pointer ${
                selectedService.title === service.title
                  ? "border-l-4 border-[#25A75C]"
                  : "border-l-4 border-[#DBE2EA]"
              }`}
              onClick={() => setSelectedService(service)}
            >
              <div className="flex flex-col gap-2 text-[#4F4F4F]">
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="text-lg font-normal">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex">
        <img
          src={selectedService.image}
          alt={selectedService.title}
          className="w-[669px] h-[711px] rounded-lg object-contain"
        />
      </div>
    </div>
  );
};

export default Features;
