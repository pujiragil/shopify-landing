import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(prev => !prev)

  return (
    <nav className="bg-tertiary-300">
      <div className="container p-5 mx-auto flex items-center justify-between">
        {/* Icon */}
        <img className="w-[125px]" src="/shopify-header.png" alt="shopify-icon" />

        {/* Hamburger */}
        <div onClick={handleOpen} className={`${isOpen ? "open" : ""} flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden`}>
          <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
          <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black-500 rounded-full"></span>
          <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-black-200">
          <p>Product</p>
          <p>Solutions</p>
          <p>Pricing</p>
          <p>Resources</p>
          <p>Customers</p>
        </div>
      </div>
    </nav>
  )
}