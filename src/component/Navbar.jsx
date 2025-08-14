import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white w-full shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <img
              src="/photo-output.PNG"
              width="125"
              height="60"
              alt="Nurture Logo"
              className="object-contain"
            />
          </NavLink>
        </div>
        {/* Desktop Menu */}
       <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-black font-medium">
            <li>
              <NavLink
                to="/"
                className="hover:text-blue-600 hover:underline underline-offset-8 hover:bg-blue-50 px-3 py-1 rounded transition-all duration-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className="hover:text-blue-600 hover:underline underline-offset-8 hover:bg-blue-50 px-3 py-1 rounded transition-all duration-200"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-blue-600 hover:underline underline-offset-8 hover:bg-blue-50 px-3 py-1 rounded transition-all duration-200"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-blue-600 hover:underline underline-offset-8 hover:bg-blue-50 px-3 py-1 rounded transition-all duration-200"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/account"
                className="hover:text-blue-600 hover:underline underline-offset-8 hover:bg-blue-50 px-3 py-1 rounded transition-all duration-200"
              >
                Account
              </NavLink>
            </li>
          </ul>
          <NavLink
            to="/cart"
            className="ml-4 hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/trolley-cart.png"
              width="30"
              height="30"
              className="trolley"
              alt="Cart"
            />
          </NavLink>
        </nav>
        {/* Mobile Menu Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <img
            src="/9ad6b27e5b5888e44a66640cc9cff90d.png"
            width="32"
            height="32"
            alt="Menu"
          />
        </button>
      </div>
      {/* Mobile Menu */}
       {open && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-black font-medium">
            <li>
              <NavLink
                to="/"
                className="hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded w-full text-center transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className="hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded w-full text-center transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded w-full text-center transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded w-full text-center transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/account"
                className="hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded w-full text-center transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                Account
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className="flex items-center hover:bg-blue-50 px-4 py-2 rounded transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                <img
                  src="/trolley-cart.png"
                  width="30"
                  height="30"
                  className="trolley"
                  alt="Cart"
                />
                <span className="ml-2">Cart</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;