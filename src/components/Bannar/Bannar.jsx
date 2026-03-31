import React from 'react';
import BannerImage from "../../assets/banner.png"
import BannerLogo from "../../assets/Rectangle 4.png"
import { FaPlay } from 'react-icons/fa';
const Bannar = () => {
    return (
          <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" max-w-[1600px]  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] border border-gray-100  text-sm font-medium px-5 py-2 rounded-full">
           <img src={BannerLogo}></img>
          <small className='bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent'> New: AI-Powered Tools Available</small>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold ">
            Supercharge Your
            <br />
            <span className="mt-3 block">
             Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.Explore Products

          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className=" hover:bg-blue-200  px-8 py-4 rounded-full  text-white bg-gradient-to-r from-blue-800 to-purple-800 font-semibold text-[16px] flex items-center gap-3 group">
             Explore Products
            </button>



  <button className="relative inline-flex items-center gap-2 px-1 py-rounded-full font-medium text-purple-600 overflow-hidden group">
      {/* Gradient Border */}
      <span className="absolute inset-0 rounded-full  bg-gradient-to-r from-blue-500 to-purple-500"></span>

      {/* Inner Button */}
      <span className="relative flex items-center gap-2 px-6 py-3 rounded-full bg-white group-hover:bg-gray-100 transition">
        <FaPlay className="w-4 h-4 "/>
        <span>Watch Demo</span>
      </span>
    </button>
              


          </div>

          </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={ BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>



    </div>


    );
};

export default Bannar;