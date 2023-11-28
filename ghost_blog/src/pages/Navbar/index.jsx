import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav className="bg-black text-white p-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <div className="flex items-center">
            <img
              src="../../assets/Logo.jpg"
              alt="Logo"
              className="w-12 h-12 mr-2"
            />
            <span className="font-semibold text-lg">GHOST</span>
          </div>
        </NavLink>

        {/* Menu Icon (Visible on small screens) */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menu Items (Hidden on small screens) */}
        <ul className={`md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${menuVisible ? 'block' : 'hidden'}`}>
          <li className="hover:text-gray-300 transition duration-300">
            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <NavLink to="/service" onClick={toggleMenu}>Services</NavLink>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <NavLink to="/blog" onClick={toggleMenu}>Blog</NavLink>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <NavLink to="/contact-us" onClick={toggleMenu}>Contact Us</NavLink>
          </li>
        </ul>

        {/* Login/Logout (Hidden on small screens) */}
        <div className={`mt-4 md:mt-0 hidden md:block ${menuVisible ? 'block' : 'hidden'}`}>
          <span className="hover:text-blue-300 transition duration-300">
            <NavLink to="log-in" onClick={toggleMenu}>Login</NavLink>
          </span>
          <span className="mx-2">|</span>
          <span className="hover:text-red-500 transition duration-300">
            <NavLink to="/" onClick={toggleMenu}>Logout</NavLink>
          </span>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
