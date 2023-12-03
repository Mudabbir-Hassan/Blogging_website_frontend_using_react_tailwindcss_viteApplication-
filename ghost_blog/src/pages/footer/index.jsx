// Footer.js
import React from 'react';
import { Outlet , NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <Outlet / >
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <p className="text-lg font-semibold">Ghost</p>
          <span className="text-gray-500">© 2023</span>
        </div>
        {/* <div className="flex items-center space-x-4">
        <NavLink to="/" className="hover:text-gray-400 transition duration-300">Home</NavLink>
        <NavLink to="/" className="hover:text-gray-400 transition duration-300">About</NavLink>
        <NavLink to="/" className="hover:text-gray-400 transition duration-300">Contact us</NavLink> 
        </div> */}
      </div>
    </footer>
    </>
  );
};

export default Footer;
