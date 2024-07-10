import logo from "../assets/tpay.png";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="container mx-auto pt-12 pb-12 px-[90px] flex flex-col lg:flex-row justify-between gap-12">
      <div className="flex flex-col items-center lg:items-start gap-5">
        <div className="">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex gap-8">
          <img src={instagram} alt="instagram" className="w-6 h-6" />
          <img src={facebook} alt="facebook" className="w-6 h-6" />
          <img src={twitter} alt="twitter" className="w-6 h-6" />
        </div>
        <p className="text-lg font-normal text-[#979797] text-center lg:text-left">
          2015-2022 Taxaide Technologies Limited. All rights reserved
        </p>
      </div>

      <div className="flex lg:gap-20 justify-between">
        <ul className="flex flex-col gap-2">
          <li className="text-xl font-bold text-[#000E0C]">About Us</li>
          <li className="text-lg font-normal text-[#979797]">About</li>
          <li className="text-lg font-normal text-[#979797]">
            Legal & privacy
          </li>
        </ul>

        <ul className="flex flex-col gap-2">
          <li className="text-xl font-bold text-[#000E0C]">Products</li>
          <li className="text-lg font-normal text-[#979797]">TBook®</li>
          <li className="text-lg font-normal text-[#979797]">TaxiTWithhold®</li>
          <li className="text-lg font-normal text-[#979797]">TaxiTPayroll®</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
