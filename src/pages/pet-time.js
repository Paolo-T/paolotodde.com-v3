import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import Card from "../components/Card";
import ImgNavTiles from "../components/ImgNavTiles";

import persona_image_1 from "../images/petTime/petTime_persona_1.png";
import persona_image_2 from "../images/petTime/petTime_persona_2.png";

// User Personas Data
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

function petTime() {
   // Image data
   const data = useStaticQuery(graphql`
      query {
         petTime_1: file(relativePath: { eq: "petTime/petTime_1.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         petTime_2: file(relativePath: { eq: "petTime/petTime_2.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         petTime_3: file(relativePath: { eq: "petTime/petTime_3.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         petTime_4: file(relativePath: { eq: "petTime/petTime_4.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         petTime_5: file(relativePath: { eq: "petTime/petTime_5.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         petTime_6: file(relativePath: { eq: "petTime/petTime_6.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
      }
   `);

   const imageData = [data.petTime_2.childImageSharp.fluid, data.petTime_3.childImageSharp.fluid];

   return (
      <>
         <SEO
            keywords={[
               `UI Design`,
               `Product Design`,
               `Product Designer`,
               `Messaging App`,
               `App`,
               `UI Designer`,
               `Web Designer`,
               `Product Designer`,
               `Front-end Developer`,
               `Portfolio`,
               `Brighton`,
               `Uk`,
            ]}
            title="Portfolio page PetTime App"
         />

         <div className="w-12/12 mx-auto bg-dark">
            <TransitionPageIn>
               <Img className="max-w-screen-xl mx-auto" fluid={data.petTime_1.childImageSharp.fluid} loading="eager" />
               <div className="w-full bg-white">
                  <div className="w-full mx-auto pt-1 pb-10 md:pb-20 md:pt-32">
                     <section className="w-11/12 md:w-7/12 max-w-screen-lg mx-auto md:flex text-dark">
                        <div className="md:w-4/12 mt-0 hidden md:block md:mt-16">
                           <h4 className="text-sm font-extrabold uppercase tracking-widest">Description</h4>
                           <h4 className="text-sm pt-1">App design</h4>
                        </div>
                        <div className="md:w-7/12 mt-10 md:mt-0">
                           <h2 className="text-3xl font-black mb-4 md:mb-4">Description</h2>
                           <p>
                              <span className="font-extrabold">Pet Time</span> is a fun and friendly managing app for
                              animal lovers. Whether you are experts or enthusiastic newbies, you'll find plenty of
                              learning resources to help taking care of your pet friends.
                              {/* <span className="font-extrabold">Pet Time</span>{" "}
                                provides a dedicated section for interesting
                                articles, news, podcasts, learning resources. A
                                section to help finding pet friendly locations
                                and facilities. The UI will be user friendly and
                                easy to navigate. All resources will be easy to
                                access and quick to find. */}
                           </p>
                        </div>
                     </section>
                     <section className="w-11/12 md:w-7/12 max-w-screen-lg mx-auto text-dark md:flex mt-8 md:mt-16 mb-0">
                        <div className="hidden md:block md:w-4/12 mt-0 md:mt-16">
                           <h4 className="text-sm font-extrabold uppercase tracking-widest">Skills applied</h4>
                           <h4 className="text-sm pt-1">
                              Strategy
                              <br /> Concept
                              <br /> UI Design
                              <br /> Product Design
                           </h4>
                        </div>
                        <div className="w-11/12 md:w-7/12">
                           <h2 className="text-3xl font-black mb-4 md:mb-4">The brief</h2>
                           <p>
                              The app is for those passionate about pets, who want to learn more about their loved
                              domestic animals.
                              <br />
                              The target customers are the curious newbie who has, so far, lacked a convenient
                              opportunity to educate themselves on the topic, and the long-standing aficionado who’s
                              looking for a high-quality, comprehensive app to teach them how to take care of their
                              beloved pets, plus related content to enjoy on the go.
                              <br />
                              <br />
                              The app monetizes through subscriptions. Some content and features are free for all users,
                              while others are reserved for subscribers.
                              <br />
                              <br />
                              There are four sections: <br />
                              <br />• &nbsp; DISCOVER. The User are recommended content.
                              <br />• &nbsp; MAPS. The User can find pet shops, veterinary clinics, and so on.
                              <br />
                              ​• &nbsp; LEARN. The User can follow an educational track and test their knowledge on pets
                              <br />• &nbsp; ​PROFILE​. This includes the User's history of content consumption, their
                              favourites, their achievements, and some settings.
                              <br />
                              <br />
                              The main navigation between sections may happen through a tab bar UI, or another system of
                              your choosing.
                           </p>
                        </div>
                     </section>
                     <section className="w-11/12 md:w-7/12 max-w-screen-lg mx-auto text-dark md:flex mt-8 md:mt-16 mb-0">
                        <div className="hidden md:block md:w-4/12 mt-0 md:mt-16">
                           <h4 className="text-sm font-extrabold uppercase tracking-widest">Problem</h4>
                        </div>
                        <div className="w-11/12 md:w-7/12">
                           <h2 className="text-3xl font-black mb-4 md:mb-4">The problem</h2>
                           <p>
                              Pet owners need a resource to help looking after their pet friends and making sure they
                              are happy and pampered. They need a hub to gather educational material such as articles,
                              blog posts, podcasts as well as information on the best vets in the area, the best pet
                              friendly shops, pet friendly shops and cafes.
                              <br />
                              The curious newbie and aficionados looking for a high-quality, comprehensive app to teach
                              them how to take care of their beloved pets. The app is for those passionate about pets,
                              and who want to learn more about domestic animals.
                           </p>
                        </div>
                     </section>
                     <section className="w-11/12 md:w-7/12 max-w-screen-lg mx-auto text-dark md:flex mt-8 md:mt-16 mb-0">
                        <div className="hidden md:block md:w-4/12 mt-0 mb-10 md:mt-16">
                           <h4 className="text-sm font-extrabold uppercase tracking-widest">Solution</h4>
                        </div>
                        <div className="w-11/12 md:w-7/12">
                           <h2 className="text-3xl font-black mb-4 md:mb-4">The solution</h2>
                           <p>
                              An app that provides a dedicated section for interesting articles, news, podcasts,
                              learning resources. A section to help finding pet friendly locations and facilities. The
                              UI will be user friendly and easy to navigate. All resources will be easy to access and
                              quick to find.
                           </p>
                        </div>
                     </section>
                     <section className="w-11/12 md:w-7/12 max-w-screen-lg mx-auto text-dark mt-8 md:mt-16 mb-0">
                        <div className="md:flex">
                           <div className="hidden md:block md:w-4/12 mt-0 md:mt-16"></div>
                           <h2 className="text-3xl font-black mb-4 md:mb-4">User Personas</h2>
                        </div>
                        <div className="md:grid grid-cols-2 gap-8">
                           {userPersonas.map((persona, i) => (
                              <Card
                                 key={i}
                                 id={i}
                                 title={persona.name}
                                 subtitle={`Pets owned: ${persona.pet}`}
                                 description={persona.bio}
                                 list_top={persona.goals}
                                 list_top_title="Goals"
                                 list_bottom={persona.frustrations}
                                 list_bottom_title="Frustrations"
                                 image={persona.image}
                              />
                           ))}
                        </div>
                     </section>
                     <section className="w-11/12 md:w-7/12 max-w-screen-lg mx-auto text-dark md:flex mt-8 md:mt-16 mb-0">
                        <div className="hidden md:block md:w-4/12 mt-0 md:mt-16">
                           <h4 className="text-sm font-extrabold uppercase tracking-widest">Flow</h4>
                        </div>
                        <div className="w-11/12 md:w-8/12 pr-0 md:pr-16">
                           <h2 className="text-3xl font-black mb-4 md:mb-4">User Flow</h2>
                           <p>
                              After the initial Log in / Sign Up, the user is presented with the Home screen where they
                              can browse the most important topics regarding the care of their beloved pets. After
                              choosing their subject of interest, they are presented with all the available resources
                              and content focused on that particular topic. Some of the content is free and some is
                              "Premium" that requires a paid subscription to access. If the user is not yet subscribed,
                              is directed to a paywall where they can subscribe before accessing the Premium content.
                           </p>
                        </div>
                     </section>
                  </div>
               </div>
               <section className="w-full max-w-screen-xl mx-auto mt-10 px-0 md:px-50 py-24">
                  <Img fluid={data.petTime_6.childImageSharp.fluid} loading="eager" alt="App screen" />
               </section>
               {imageData.map((image, i) => (
                  <div className="w-full max-w-screen-xl mx-auto">
                     <Img key={i} fluid={image} className="-m-2" loading="eager" alt="App screen" />
                  </div>
               ))}

               <div className="w-full mx-auto">
                  <Img fluid={data.petTime_5.childImageSharp.fluid} className="-m-2" loading="eager" alt="App screen" />
               </div>

               <div className="w-full bg-dark mx-auto">
                  <ImgNavTiles isPageNav={true} />
               </div>
            </TransitionPageIn>
         </div>
      </>
   );
}

export default petTime;
