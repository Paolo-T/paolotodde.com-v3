import React from "react";

const userPersonas = [
   {
      name: "Jenny",
      pet: "Two dogs",
      bio:
         "26 years old. Lives in the city and works as a Marketing manager in a medium sized tech company. Lives a very active lifestyle, loves sports and the outdoors and enjoys walks and traveling",
      goals: [
         "Enjoying the outdoords with her pets",
         "Find dog friendly venues",
         "Find where her dogs will be taken care of when needed (Vet, Dog groomer)",
      ],
      frustrations: [
         "She is new in the city and doesn't know the best places where she can walk her dogs",
         "Some shops/venues don't allow in dogs",
      ],
   },
   {
      name: "Drew",
      pet: "Cat",
      bio:
         "26 years old. Lives in the city and works as a Marketing manager in a medium sized tech company. Lives a very active lifestyle, loves sports and the outdoors and enjoys long walks and traveling",
      goals: ["Goal 3", "Goal 4", "Goal 5"],
      frustrations: ["frustrations 4", "frustrations 5", "frustrations 6"],
   },
];

function UserCard() {
   return (
      <div className="md:grid grid-cols-2 gap-5">
         {userPersonas.map((persona, i) => (
            <div key={i} className="w-28 bg-white shadow-lg rounded-lg overflow-hidden my-4">
               <img
                  className="w-full h-56 object-cover object-center"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="avatar"
               />

               <div className="pt-4 pb-8 px-8">
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
