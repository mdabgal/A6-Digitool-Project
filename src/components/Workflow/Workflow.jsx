import React from 'react';

const Workflow = () => {
    return (
        <div className='text-white min-h-[448px] bg-gradient-to-r from-blue-800 to-purple-700 flex items-center justify-center text-center  mt-24'>
            <div className='pb-10 space-y-4'>
                <h1 className='text-[40px] font-extrabold'>Ready To Transform Your Workflow?</h1>
                <small className='text-[16px] text-[#b9c1c9] '>Join thousands of professionals who are already using Digitools to <br></br>work smarter.
                    Start your free trial today.</small>
                    <div className='pt-7 flex justify-center gap-4'>
                   <button className="btn rounded-full ">
        <span className='bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent'>
          
      Explore Products

        </span> </button>
        <button className='border border-1 border-white rounded-full py-2 px-4 text-[16px]'>View Pricing</button>
        </div>

        <small className='text-[16px] text-[#b9c1c9] '>14-day free trial • No credit card required • Cancel anytime</small>
            </div>
            
        </div>
    );
};

export default Workflow;