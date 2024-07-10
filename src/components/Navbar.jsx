import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/tpay.png";
import { navItems } from "../constants";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <nav className="sticky top-0 z-50 px-10 py-5 backdrop-blur-lg bg-[#060809] text-white">
      <div className="container mx-auto relative text-base font-semibold">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex gap-8 items-center flex-shrink-0">
            <img
              src={logo}
              alt="logo"
              className="h-[42px] w-[93px] lg:h-[64px] lg:w-[163px]"
            />
            <ul className="hidden lg:flex gap-5">
              {navItems.slice(0, 2).map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="p-[10px]">
                    {" "}
                    {item.label}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Items */}
          {/* <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, i) => (
              <li key={i}>
                <a href={item.href} className="text-base font-semibold">
                  {" "}
                  {item.label}{" "}
                </a>
              </li>
            ))}
          </ul> */}

          {/* Login / create acount */}
          <div className="hidden lg:flex gap-5 justify-center items-center ">
            <ul className="hidden lg:flex gap-5">
              {navItems.slice(-2).map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="p-[10px]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="h-5 w-[2px] bg-white text-white" />
            <div className="flex gap-5">
              <button href="#" className="p-[10px]">
                Login
              </button>
              <button
                href="#"
                className="bg-gradient-to-r from-[#5CB23A] to-[#048002] rounded-[10px] px-6 py-3"
              >
                Create free account
              </button>
            </div>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="fixed mt-8 right-2 z-20 bg-[#060809] p-6 flex flex-col gap-3 justify-center items-center lg:hidden rounded-2xl">
            <ul className="flex flex-col items-center">
              {navItems.map((item, i) => (
                <li key={i} className="py-2">
                  <a href={item.href} className="p-[10px]">
                    {" "}
                    {item.label}{" "}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="h-[1px] w-40 bg-white text-white" />
            <div className="flex flex-col gap-2">
              <button href="#" className="p-[10px]">
                Login
              </button>
              <button
                href="#"
                className="bg-gradient-to-r from-[#5CB23A] to-[#048002] rounded-[10px] px-6 py-3"
              >
                Create free account
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
