import React from "react";
import persona_image_1 from "../images/personas/persona_1.png";
import persona_image_2 from "../images/personas/persona_2.png";

const userPersonas = [
   {
      name: "Jenny",
      pet: "Two dogs",
      bio:
         "26 years old. Lives in the city and works as a Marketing manager in a medium sized tech company. Lives a very active lifestyle, loves sports and the outdoors and enjoys walks and traveling",
      goals: [
         "Enjoying the outdoors with her pets",
         "Find dog friendly venues",
         "Find where her dogs will be taken care of when needed (Vet, Dog groomer)",
      ],
      frustrations: [
         "She is new in the city and doesn't know the best places where she can walk her dogs",
         "Some shops/venues don't allow in dogs",
      ],
      image: persona_image_1,
   },
   {
      name: "Drew",
      pet: "Cat",
      bio:
         "34 years old. Lives in the city and works long hours as Chef in a restaurant he owns. Has a family and not much free time. Recently adopted a pet cat from animal shelter.",
      goals: [
         "Learn how to welcome newly adopted cat",
         "Find learning resources about rescue animals",
         "Find where their cat will be taken care of when needed (Vet, Cat groomer)",
      ],
      frustrations: ["Doesn't have much experience with rescue pets", "Doesn't much free time"],
      image: persona_image_2,
   },
];

function UserCard() {
   return (
      <div className="md:grid grid-cols-2 gap-5">
         {userPersonas.map((persona, i) => (
            <div key={i} className="w-28 bg-white shadow-lg rounded-lg overflow-hidden my-4">
               <img className="w-full h-64 object-cover object-center" src={persona.image} alt="avatar" />

               <div className="pt-4 pb-8 px-4 md:px-8">
                  <div className="flex justify-between items-baseline">
                     <h1 className="text-2xl font-semibold text-gray-800 mb-2">{persona.name}</h1>
                     <h1 className="text-sm mb-2 mt-0">Pets owned: {persona.pet}</h1>
                  </div>
                  <p className="pt-4 text-sm text-gray-700">{persona.bio}</p>
                  <div className="mt-4 text-gray-700">
                     <h1 className="text-sm mb-2 mt-0">Goals</h1>
                     <ul className="text-sm list-disc pl-4">
                        {persona.goals.map((goal, i) => (
                           <li key={i}>{goal}</li>
                        ))}
                     </ul>
                  </div>

                  <div className="mt-4 text-gray-700">
                     <h1 className="text-sm mb-2 mt-0">Frustrations</h1>
                     <ul className="text-sm list-disc pl-4">
                        {persona.frustrations.map((frustrations, i) => (
                           <li key={i}>{frustrations}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}

export default UserCard;
