import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-tertiary-300 relative">
      <div className="container mx-auto">
        <div className="h-16 md:h-20 p-5 md:py-6 lg:px-0 flex items-center justify-between z-20 bg-tertiary-300 relative">
          {/* Icon */}
          <a href="#">
            <img
              className="w-[124px] h-9 lg:w-[150px] lg:h-[42px] object-cover z-20 relative"
              src="/shopify-header.png"
              alt="shopify-icon"
            />
          </a>

          {/* Hamburger */}
          <div
            onClick={handleOpen}
            className={`${
              isOpen ? "open" : ""
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-black-200 text-sm lg:text-base font-body">
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
          <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-head font-medium">
            <a href="#">
              <p className="text-black-100 underline cursor-pointer">Login</p>
            </a>
            <a href="#">
              <button className="text-white bg-primary-100 md:py-2.5 px-4 py-3.5 px-[25px]">
                Start free
              </button>
            </a>
          </div>
        </div>

        {/* Navbar Menu (Mobile) */}
        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}

function NavbarDropdown({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } pt-[75.55px] md:hidden bg-tertiary-300 absolute top-0 left-0 w-full h-screen text-center transition-all duration-500 ease-in-out p-5 z-10`}
    >
      <div className="flex flex-col gap-16 mt-16">
        <div className="flex flex-col gap-8 items-center text-black-200">
          <a className="w-fit" href="#">
            <p className="navlink active-navlink">Product</p>
          </a>
          <a className="w-fit" href="#">
            <p className="navlink">Solutions</p>
          </a>
          <a className="w-fit" href="#">
            <p className="navlink">Pricing</p>
          </a>
          <a className="w-fit" href="#">
            <p className="navlink">Resources</p>
          </a>
          <a className="w-fit" href="#">
            <p className="navlink">Customers</p>
          </a>
        </div>
        <div className="flex flex-col gap-8">
          <a href="#">
            <p className="underline text-black-100 py-3.5 border border-black-100">
              Login
            </p>
          </a>
          <a href="#">
            <button className="py-3.5 border border-primary-100 w-full text-white bg-primary-100 font-medium">Start Free</button>
          </a>
        </div>
      </div>
    </div>
  );
}
