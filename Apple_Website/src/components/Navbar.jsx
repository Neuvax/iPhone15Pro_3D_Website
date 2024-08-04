import React, { useState } from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex w-full items-center justify-between p-5 sm:px-10">
      <nav className="screen-max-width flex w-full items-center justify-between">
        <div className="flex items-center">
          <img src={appleImg} alt="Apple" width={14} height={18} />
        </div>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item) => (
            <div
              key={item}
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="text-gray cursor-pointer px-5 text-sm font-bold transition-all hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
          <button
            className="z-50 ml-4 flex flex-col items-center justify-center sm:hidden"
            onClick={toggleMenu}
          >
            <span
              className={`mb-1 block h-0.5 w-6 bg-white transition-transform duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`mb-1 block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>
      <div
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        className={`fixed inset-0 z-40 transform bg-black transition-transform duration-700 sm:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-start p-4">
          {navLists.map((item) => (
            <div
              key={item}
              className="cursor-pointer py-2 text-3xl font-bold text-white transition-all hover:text-gray-400"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
