import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { MdMenu, MdClose } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `inline-block py-2 px-3 font-medium transition duration-200 ${
      isActive ? "text-primary border-b-2 border-primary" : "text-gray-600 hover:text-primary"
    }`;

  return (
    <nav className="w-full bg-white shadow-md z-50 fixed top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-1">
          <span className="text-black">redeem</span>
          <span className="text-primary">hub</span>
        </Link>

{/* Desktop Menu */}
<div className="hidden md:flex items-center gap-8">
  <div className="border border-gray-200 rounded-lg p-3 shadow-sm bg-white">
    <ul className="flex items-center gap-4">
      {NavbarMenu.map((item) => (
        <li key={item.id}>
          <NavLink to={item.link} className={navLinkClass}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>

  <button className="text-2xl p-2 rounded-full hover:bg-gray-100 transition">
    <CiSearch />
  </button>

  <Link
    to="/auth"
    className="font-semibold text-primary border-2 border-primary px-5 py-2 rounded-md hover:bg-primary hover:text-white transition duration-200"
  >
    Login
  </Link>
</div>


        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl text-gray-800 z-[60]">
          {open ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          <ul className="flex flex-col gap-4">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  onClick={() => setOpen(false)}
                  className={navLinkClass}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/auth"
            onClick={() => setOpen(false)}
            className="block font-semibold text-primary border-2 border-primary px-5 py-2 rounded-md hover:bg-primary hover:text-white transition duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
