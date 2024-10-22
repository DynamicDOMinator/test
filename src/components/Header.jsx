import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* navigation bar starts */}
      <nav className="lg:flex  items-center justify-around pb-7 lg:pb-3 bg-zinc-800 py-4 px-2 relative">
        {/* hamburger icon */}
        <div
          className="absolute mt-2 flex flex-col items-end cursor-pointer right-2 lg:hidden"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          <div className={`w-[40px]  transform transition-all duration-300 h-[4px] bg-white rounded-md ${isVisible ? "rotate-45" : ""}`}></div>
          <div className={`w-[40px]    h-[4px] bg-white rounded-md ${isVisible ? "-rotate-45  " : "mt-1 "}`}></div>
          <div
            className={`w-[20px] ${
              isVisible ? "hidden" : ""
            }  mt-1 h-[4px] bg-white rounded-md`}
          ></div>
        </div>

        {/* Logo with Name of brand */}
        <div className="flex items-center">
          <img src={require("../images/Symbol.png")} alt="logo" />
          <p className="lg:text-4xl text-3xl font-semibold pl-2 text-white">
            Estatein
          </p>
        </div>

        <ul
          className={`lg:flex gap-10 ${
            isVisible
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          } lg:opacity-100 lg:max-h-none transition-all duration-300 ease-in-out`}
        >
          <Link to="/" className="text-xl text-white cursor-pointer pt-3 lg:pt-0">
            Home
          </Link>
          <li className="text-xl text-white cursor-pointer pt-3 lg:pt-0">
            About Us
          </li>
          <li className="text-xl text-white cursor-pointer pt-3 lg:pt-0">
            Properties
          </li>
          <li className="text-xl text-white cursor-pointer pt-3 lg:pt-0">
            Services
          </li>
        </ul>

        <div
          className={`transition-all duration-300 ease-in-out ${
            isVisible
              ? "max-h-16 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          } lg:max-h-none lg:opacity-100 lg:block`}
        >
          <button className="bg-black px-4 py-3 rounded-lg mt-5 lg:mt-0 text-white hover:bg-white hover:text-black">
            Contact Us
          </button>
        </div>
      </nav>
    </>
  );
}
