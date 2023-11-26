import React from 'react'
import { NavLink, Outlet  } from "react-router-dom";

export default function navBar() {
  return (
    <>
    <nav className="bg-black text-white p-4 flex justify-between items-center">
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

      {/* Menu Items */}
      <ul className="flex space-x-4">
      
        <li className="hover:text-gray-300 transition duration-300">
        <NavLink to="/">
          Home
          </NavLink>
        </li>
        <li className="hover:text-gray-300 transition duration-300">
        <NavLink to="service">Services</NavLink>
        </li>
        <li className="hover:text-gray-300 transition duration-300">
        <NavLink to="about">About</NavLink>
        </li>
        <li className="hover:text-gray-300 transition duration-300">
        <NavLink to="blog">Blog</NavLink>
        </li>
        <li className="hover:text-gray-300 transition duration-300">
        <NavLink to="contact-us">Contact Us</NavLink>
        </li>
      </ul>

      <div>
        <span className="hover:text-blue-300 transition duration-300">
        <NavLink to="/log-in">Login</NavLink>
          </span>
        <span className="mx-2">|</span>
        <span className="hover:text-red-500 transition duration-300">
        <NavLink to="/">Logout</NavLink>
        </span>
      </div>
      
    </nav>
     <Outlet />
     </>
  )
}
