import React, { useState } from 'react';
import { NavLink , useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserAuthContext from '../../components/context/user/userAuthContext';

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { isloggedin, setIsLoggedIn } = useContext(UserAuthContext);
  const navigate = useNavigate();
  


  const handleLogin = () => {
    setIsLoggedIn(false); 
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav className="bg-black text-white p-4 flex flex-col md:flex-row justify-between items-center">
      
        <NavLink to="/">
          <div className="flex items-center">
            <img
              src="../../assets/Logo.jpg"
              alt="Logo"
              className="w-12 h-12 mr-2"
            />
            <span className="font-Roboto font-semibold text-lg">GHOSTING</span>
          </div>
        </NavLink>

       
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
            <NavLink to="/blog" onClick={toggleMenu}>Blog</NavLink>
          </li>

          <li className="hover:text-gray-300 transition duration-300">
            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
          </li>
          
          <li className="hover:text-gray-300 transition duration-300">
            <NavLink to="/contact-us" onClick={toggleMenu}>Contact Us</NavLink>
          </li>
        </ul>

        {/* Login/Logout (Hidden on small screens) */}
        <div className={`mt-4 md:mt-0 hidden md:block ${menuVisible ? 'block' : 'hidden'}`}>
          <span className="hover:text-blue-300 transition duration-300">
            <NavLink to={(!isloggedin) ? "/log-in" : "/"}  onClick={handleLogin}>{(!isloggedin) ? "Sign-In" : "Sign-Out"}</NavLink>
          </span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
