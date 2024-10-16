import React, { useState } from "react";
import close from "../assets/close.png";
import menu from "../assets/hamburger.png";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toogleMenu = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="stikcy top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="" />
            <span className="text-xl tracking-tight">VirtuaIR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex jutify-center space-x-12 items-center">
            <a href="" className="py-2 px-3 border rounded-md ">
              Sign In
            </a>
            <a
              href=""
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toogleMenu}>
              {mobileDrawerOpen ? (
                <img className="w-5 h-5 text-white " src={close} />
              ) : (
                <img className="w-6 h-6 text-white " src={menu} />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center item-center lg:hidden">
            <ul className="lg:hidden flex flex-col items-center space-y-5">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center space-x-6 my-1">
              <a href="#" className="border rounded-md py-2 px-3">
                Sign In
              </a>
              <a
                href="#"
                className="border rounded-md py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
