import React from 'react';

const PricingCard = () => {
    return (
        <div className=' max-w-[1600px] mx-auto'>
           <div className='text-center space-y-2 mb-10 pt-20'>
                <h1 className='text-[48px] font-extrabold text-[#101727]'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382] text-[16px]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='flex gap-10 justify-center items-center items-stretch '>
                <div className="card w-96 shadow-sm h-full min-h-[470px]  ">
  <div className="card-body flex flex-col justify-between rounded-2xl bg-[#F9FAFC]">
    
    <div className="space-y-1 mb-3 ">
      <h2 className="text-2xl font-bold">Starter</h2>
      <small className='text-[16px] text-[#627382]'>Perfect for getting started</small>
    
    </div>
    <div className=''>
       <span className="text-4xl font-bold">$0</span>
       <span className='text-[20px] text-[#627382]'>/Month</span>
    </div>
   
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] text-[#627382]'>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] text-[#627382]'>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] text-[#627382]'>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] text-[#627382]'>1 project per month</span>
      </li>

      
    </ul>
    <div className="mt-6">
      <button className="btn rounded-full btn-block  text-white bg-gradient-to-r from-blue-800 to-purple-800  ">Get Started Free</button>
    </div>
  </div>
</div>

{/* pricing card 2 */}

 <div className="card w-96 shadow-sm relative h-full">
 
  <div className="card-body flex flex-col justify-between rounded-2xl text-white bg-gradient-to-r from-blue-800 to-purple-700 ">
    <div className='absolute -top-3 left-1/2 -translate-x-1/2'>
    <div className="badge rounded-full bg-[#FEF3C6] ">
      <span className='text-[#BB4D00] text-[14px] font-medium'>MostPopular</span>
    </div>
    </div>
    <div className="space-y-1 mb-3 ">
      <h2 className="text-2xl font-bold">pro</h2>
      <small className='text-[16px] text-white'> Best for professionais</small>
    
    </div>
    <div className=''>
       <span className="text-4xl font-bold">$29</span>
       <span className='text-[20px] text-white'>/Month</span>
    </div>
   
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] '>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] '>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] '>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] '>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] '>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] '>adanced analytics</span>
      </li>

      
    </ul>
    <div className="mt-6 ">
      <button className="btn rounded-full btn-block  ">
        <span className='bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent'>
          
      Start Pro Trial

        </span>
       
        </button>
    </div>
  </div>
    
</div>

{/* pricing card 3 */}

 <div className="card w-96 shadow-sm h-full">
  <div className="card-body flex flex-col justify-between rounded-2xl bg-[#F9FAFC]">
    
    <div className="space-y-1 mb-3 ">
      <h2 className="text-2xl font-bold">Enterprise</h2>
      <small className='text-[16px] text-[#627382]'>For teams and businesses</small>
    
    </div>
    <div className=''>
       <span className="text-4xl font-bold">$99</span>
       <span className='text-[20px] text-[#627382]'>/Month</span>
    </div>
   
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] text-[#627382]'>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] text-[#627382]'>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] text-[#627382]'>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] text-[#627382]'>Dedicated support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] text-[#627382]'>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-[16px] text-[#627382]'>Custom branding</span>
      </li>

      
    </ul>
    <div className="mt-6">
      <button className="btn rounded-full btn-block  text-white bg-gradient-to-r from-blue-800 to-purple-800  ">Contact Sales</button>
    </div>
  </div>
</div>

            </div>
        </div>
    );
};

export default PricingCard;