import React from 'react';
import { use } from 'react';

const Models = ({modelPromise}) => {

    const models = use(modelPromise)
        console.log(models)

    return (
        <div className='mt-20 max-w-[1600px] mx-auto px-4 '>
            <div className='text-center space-y-2'>
                <h2 className='text-[48px] font-extrabold'>Premium Digital Tools</h2>
                <p className='text-[16px] text-[#627387]'>Choose from our curated collection of premium digital products designed<br></br>
                    to boost your productivity and creativity.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">

                {models.map(model =>
                     <div key={model.id} className="bg-white space-y-2 p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between"
                    style={{ height: "452px" }}>
             <div className=" flex justify-end mb-3">
        <span className={`px-3 py-1 text-xs rounded-full 
          ${model.tagType === "best" && "bg-yellow-200 text-yellow-800"}
          ${model.tagType === "popular" && "bg-purple-200 text-purple-800"}
          ${model.tagType === "new" && "bg-green-200 text-green-800"}
        `}>
          {model.tag}
        </span>
      </div>


                    <div className='flex mb-4'>
                        <div className='bg-gray-100 p-3 rounded-full'>
                        <img className='h-10 w-10 ' src={model.icon}></img>
                        </div>
                        </div>


                      <h2 className='text-[24px] font-bold '>
                        {model.name}
                      </h2>

                      <p className="text-[16px] text-[#627382] mt-1">
                         {model.description}
                     </p>

                      <div className=" mt-3">
                <span className="text-xl font-bold">${model.price}</span>
                 <span className="text-[16px] text-[#627382]"> / {model.period}</span>
                   </div>

                    <ul className="mt-4 space-y-1 text-sm text-gray-600">
              {model.features.map((f, i) => (
                <li key={i} className=''><span className='text-green-500 pr-1'>✔</span>  {f}</li>
              ))}
            </ul>

             <button className="mt-5 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-full">
              Buy Now
            </button>


                </div>)}

            </div>
            
        </div>
    );
};

export default Models;