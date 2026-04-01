import React, { useState } from "react";

const ModelCard = ({ model, addToCart }) => {

  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(model);
    setAdded(true);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between">

     
      <div className="flex justify-end mb-3">
        <span className={`px-3 py-1 text-xs rounded-full 
          ${model.tagType === "best" && "bg-yellow-200 text-yellow-800"}
          ${model.tagType === "popular" && "bg-purple-200 text-purple-800"}
          ${model.tagType === "new" && "bg-green-200 text-green-800"}
        `}>
          {model.tag}
        </span>
      </div>

     
      <div className="flex mb-4">
        <div className="bg-[#F2F2F2] p-3 rounded-full">
          <img 
            className="h-10 w-10" 
            src={model.icon}
            alt={model.name} 
          />
        </div>
      </div>

      
      <h2 className="text-[24px] font-bold">{model.name}</h2>

      <p className="text-[16px] text-[#627382] mt-1">
        {model.description}
      </p>

      <div className="mt-3">
        <span className="text-xl font-bold">${model.price}</span>
        <span className="text-[#627382]"> / {model.period}</span>
      </div>

      <ul className="mt-4 space-y-1 text-sm text-gray-600">
        {model.features.map((f, i) => (
          <li key={i} className="flex items-center">
            <span className="text-green-500 pr-1">✔</span>
            {f}
          </li>
        ))}
      </ul>

      
      <button
        onClick={handleAdd}
        className={`mt-5 w-full py-2 rounded-full text-white
          ${added 
            ? "bg-green-500" 
            : "bg-gradient-to-r from-blue-600 to-purple-600"
          }`}
      >
        {added ? "Add to card" : "Buy Now"}
      </button>

    </div>
  );
};

export default ModelCard;