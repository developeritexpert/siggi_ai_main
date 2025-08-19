"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Button from "./common/Button";
import Link from "next/link";
const menuItems = [
  { name: "How it works", href: "how-it-works" },
  { name: "Features & Benefits", href: "features" },
  { name: "Why Siggy?", href: "whysiggy" },
  { name: "About Us", href: "about-us" },
  { name: "Partners", href: "partners" },

];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("How it works");

  const handleMenuClick = (name) => {
    setActive(name);
    setIsMenuOpen(false);
  };

  return (
    
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent ">
        <div className="w-full px-4 sm:px-6 lg:px-4 xl:px-10">
          <div className="container mx-auto flex items-center justify-between py-3">
   
            <Logo />
   
            {/* Desktop Menu */}
            <div className="hidden  lg:text-[18pxl font-normal lg:flex items-center">
              <ul className="w-[712px] lg:w-[570px] xl:w-[772px] flex justify-between">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`hover:opacity-90 transition no-underline${
                        active === item.name
                          ? ""
                          : "text-[#0E1412]"
                      } `}
                      onClick={() => handleMenuClick(item.name)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
      <Link href="#/contact">
              <Button
                buttonText="Contact Us"
                className="hidden lg:block px-[42px] py-[19px]   text-white bg-[#0E1412]   "
              />
             </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-[#0E1412] transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2 mb-[8px]" : "mb-1 "
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#0E1412] mb-1 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-[#0E1412] transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden !bg-white/80 backdrop-blur-md px-4 py-4 transition-all duration-300 ${
              isMenuOpen
                ? " opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <ul className="flex flex-col gap-2 pl-5">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`block py-2 px-2 rounded transition-colors duration-200 cursor-pointer ${
                      active === item.name
                        ? "text-[#0E1412]"
                        : "text-[#0E1412]"
                    } hover:opacity-90`}
                    onClick={() => handleMenuClick(item.name)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <Link href="#/contact">
              <div
              
                className="ml-[26px] mt-[10px] curso"
              >
                Contact Us
              </div>
             </Link>
          </div>
    </div>
      </header>
   
    
  );
};

export default Navbar;
