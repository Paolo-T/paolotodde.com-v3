import React from "react";

function Card({ title, subtitle, description, list_top, list_top_title, list_bottom, list_bottom_title, image, id }) {
   return (
      <div key={id} className="w-28 bg-white shadow-lg rounded-lg overflow-hidden my-4">
         <img className="w-full h-64 object-cover object-center" src={image} alt="avatar" />
         <div className="pt-4 pb-8 px-4 md:px-8">
            <div className="flex justify-between items-baseline ">
               <h1 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h1>
               <h1 className="text-base mb-2 mt-0">{subtitle}</h1>
            </div>
            <p className="pt-4 text-sm text-gray-700">{description}</p>
            <div className="mt-4 text-gray-700">
               <h1 className="text-base mb-2 mt-0">{list_top_title}</h1>
               <ul className="text-sm list-disc pl-4">
                  {list_top.map((list_item, i) => (
                     <li key={i}>{list_item}</li>
                  ))}
               </ul>
            </div>

            <div className="mt-4 text-gray-700">
               <h1 className="text-base mb-2 mt-0">{list_bottom_title}</h1>
               <ul className="text-sm list-disc pl-4">
                  {list_bottom.map((list_item, i) => (
                     <li key={i}>{list_item}</li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Card;
