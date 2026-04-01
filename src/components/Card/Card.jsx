import React from 'react';
import UserIcon from "../../assets/user.png"
import Package from "../../assets/package.png"
import Rocket from "../../assets/rocket.png"
const Card = () => {
    return (
        <div className='bg-gray-100 mt-25 '>
            <div className='text-center space-y-2 mb-10 pt-20 '>
                <h1 className='text-[48px] font-extrabold text-[#101727]'>Get Started in 3 Steps</h1>
                <p className='text-[#627382] text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className=" flex items-center  justify-center p-8">
                <div className="grid  md:grid-cols-3 gap-8 max-w-5xl w-full  ">
                 

                 {/* card 1 */}

                 
                    <div className="relative bg-white py-10 px-5 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-2 rounded-full">
            01
          </div>

          <div className="flex justify-center mb-4">
            <div className="bg-purple-100 p-4 rounded-full">
             
              <img src={UserIcon}></img>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2">Create Account</h3>
                        <p className="text-sm text-gray-500">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                   </div>


                 {/* card 2 */}


                    <div className="relative bg-white py-10 px-5 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-2 rounded-full">
            02
          </div>

          <div className="flex justify-center mb-4">
            <div className="bg-purple-100 p-4 rounded-full">
             
              <img src={Package}></img>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2">Choose Products</h3>
                        <p className="text-sm text-gray-500">
                           Browse our catalog and select the tools 
                           that fit your needs.
                        </p>
                   </div>


                 {/* card 3 */}


                    <div className="relative bg-white py-10 px-5 rounded-2xl shadow-md hover:shadow-xl transition text-center">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-2 rounded-full">
            03
          </div>

          <div className="flex justify-center mb-4">
            <div className="bg-purple-100 p-4 rounded-full">
             
              <img src={Rocket}></img>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2">Start Creating</h3>
                        <p className="text-sm text-gray-500">
                            Download and start using your premium 
                            tools immediately.
                        </p>
                   </div>

                </div>

            </div>

            
        </div>
    );
};

export default Card;