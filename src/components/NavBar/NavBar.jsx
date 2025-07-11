// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdMenu, MdClose } from "react-icons/md";
import { NavbarMenu } from "../../mockData/data";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 flex items-center gap-1">
          <span>redeem</span>
          <span className="text-primary">hub</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-4">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className={`
                  px-4 py-2 rounded-md font-semibold transition duration-200
                  ${isActive(item.link)
                    ? "bg-primary text-white"
                    : "text-gray-700 border border-gray-300 hover:bg-gray-100"}
                `}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="text-2xl hover:bg-primary hover:text-white p-2 rounded-full transition">
            <CiSearch />
          </button>
          <Link
            to="/auth"
            className="hidden md:block border-2 border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-md font-semibold transition duration-200"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white border-t px-6 pb-6">
          {NavbarMenu.map((item) => (
            <li key={item.id} className="my-2">
              <Link
                to={item.link}
                className={`block px-4 py-2 rounded-md font-medium text-center border 
                ${isActive(item.link)
                  ? "bg-primary text-white border-primary"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"}`}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              to="/auth"
              className="block w-full text-center bg-primary text-white py-2 rounded-md font-semibold"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
