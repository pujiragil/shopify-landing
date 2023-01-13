import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-tertiary-300">
      <div className="container p-5 md:py-6 lg:px-0 mx-auto flex items-center justify-between">
        {/* Icon */}
        <a href="#">
          <img
            className="w-[125px]"
            src="/shopify-header.png"
            alt="shopify-icon"
          />
        </a>

        {/* Hamburger */}
        <div
          onClick={handleOpen}
          className={`${
            isOpen ? "open" : ""
          } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden`}
        >
          <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
          <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black-500 rounded-full"></span>
          <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-black-200 text-sm lg:text-lg">
          <a href="#" className="navlink active-navlink">
            Product
          </a>
          <a href="#" className="navlink">
            Solutions
          </a>
          <a href="#" className="navlink">
            Pricing
          </a>
          <a href="#" className="navlink">
            Resources
          </a>
          <a href="#" className="navlink">
            Customers
          </a>
        </div>

        {/* Button */}
        <div className="flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-lg">
          <a href="#">
            <p className="text-black-100 underline cursor-pointer">Login</p>
          </a>
          <a href="#">
            <button className="text-white bg-primary-100 font-medium md:py-2.5 px-4 py-3.5 px-[25px]">
              Start free
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
