import React, { useEffect, useState } from 'react';
import ModelCard from '../ModelCard/ModelCard';


const Models = ({modelPromise, addToCart,  setView, cart, view }) => {
   
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    modelPromise.then(data => {
      setModels(data);
      setLoading(false);
  
  });
  }, [modelPromise]);
  
  if (loading) {
    return (
    <p className="text-center mt-10">Loading...</p>

    );
  }


    return (
        <div className='mt-20 max-w-[1600px] mx-auto  '>

            <div className='text-center space-y-2'>
                <h2 className='text-[48px] font-extrabold'>Premium Digital Tools</h2>
                <p className='text-[16px] text-[#627387]'>Choose from our curated collection of premium digital products designed<br></br>
                    to boost your productivity and creativity.</p>
            </div>

            {/* Toggle Button */}
          
          {/* name of each tab group should be unique */}

{/* tab */}
<div className="flex justify-center my-8 gap-4">
  {/* Products Tab */}
  <label
    className={`tab rounded-full w-32 p-2 text-center cursor-pointer font-bold ${
      view === "products"
        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
        : "bg-gray-200 text-gray-700"
    }`}
  >
    <input
      type="radio"
      name="my_tabs_1"
      className="hidden"
      checked={view === "products"}
      onChange={() => setView("products")}
    />
    Products
  </label>

  {/* Cart Tab */}
  <label
    className={`tab rounded-full w-32 p-2 text-center cursor-pointer font-bold ${
      view === "cart"
        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
        : "bg-gray-200 text-gray-700"
    }`}
  >
    <input
      type="radio"
      name="my_tabs_1"
      className="hidden"
      checked={view === "cart"}
      onChange={() => setView("cart")}
    />
    Cart ({cart.length})
  </label>
</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">

                {models.map(model =>(
                   <ModelCard
                    key={model.id}
                 model={model}
               addToCart={addToCart}
                   ></ModelCard>))}
  
            </div>
            
        </div>
    );
};

export default Models;