import React from 'react';
import { BsCart2 } from "react-icons/bs";
const Navbar = ({cartCount}) => {
    return (
       <div className="max-w-[1600px] h-[92px] mx-auto border-b border-gray-200  navbar">
      <div className="navbar-start">
        <div className="flex items-center font-bold text-2xl  bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
          DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-[16px]  font-semibold text-[#101727]">
          <li>
            <a>products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5 font-semibold relative"> <BsCart2 /> {cartCount > 0 && (
    <span className="absolute  mr-45 bg-red-500 text-white text-xs rounded-full px-2">
      {cartCount}
    </span>
  )}
        <a className='text-[16px]  '>Login</a>
        <a className="btn rounded-full  text-white bg-gradient-to-r from-blue-800 to-purple-800">Get Started</a>
      </div>
    </div>
    );
};

export default Navbar;