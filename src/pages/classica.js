import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import ImgNavTiles from "../components/ImgNavTiles";
import Card from "../components/Card";

import persona_image_1 from "../images/classica/classica_persona_2.png";
import persona_image_2 from "../images/classica/classica_persona_1.png";

// User Personas Data
const userPersonas = [
   {
      name: "Gabriel",
      bio:
         "25 years old. Lives in the city and works as a retail assistant for a small clothing shop. Loves music and is a self taught guitar player. Wants to expand his musical boundaries by listening to classical music and learning about its culture.",
      goals: [
         "Learn about the culture surrounding classical music",
         "Start listening to classical music",
         "Find learning resources",
      ],
      frustrations: ["Confusion on what learning path should take", "Scattered learning resources"],
      image: persona_image_1,
   },
   {
      name: "Emmalynn",
      bio:
         "48 years old. Lives in a small town where she works as a teacher. Has a family and not much free time. Recently rediscovered her love for classical music and wants to resume listening to the classics and learn about the modern composers.",
      goals: ["Deepen knowledge of the classics", "Discover modern composers", "Find curated learning resources"],
      frustrations: ["Not much free time available to research", "Scattered learning resources"],
      image: persona_image_2,
   },
];

function classica() {
   // Image data
   const data = useStaticQuery(graphql`
      query {
         classicaImg_1: file(relativePath: { eq: "classica/classica_1.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         classicaImg_2: file(relativePath: { eq: "classica/classica_2.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         classicaImg_3: file(relativePath: { eq: "classica/classica_3.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         classicaImg_4: file(relativePath: { eq: "classica/classica_4.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         classicaImg_5: file(relativePath: { eq: "classica/classica_5.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         classicaImg_6: file(relativePath: { eq: "classica/classica_6.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         classicaImg_7: file(relativePath: { eq: "classica/classica_7.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         classicaImg_8: file(relativePath: { eq: "classica/classica_8.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
      }
   `);

   const imageData = [
      data.classicaImg_2.childImageSharp.fluid,
      data.classicaImg_3.childImageSharp.fluid,
      data.classicaImg_4.childImageSharp.fluid,
      data.classicaImg_5.childImageSharp.fluid,
   ];

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
            title="Portfolio page classica App"
         />
         <div className="w-12/12 mx-auto bg-dark">
            <TransitionPageIn>
               <Img
                  fluid={data.classicaImg_1.childImageSharp.fluid}
                  className="max-w-screen-xl mx-auto bg-dark"
                  loading="eager"
               />
               <div className="w-full bg-white pt-1 pb-10 md:pb-20 md:pt-32">
                  <section className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto text-dark md:flex mt-8 md:mt-0 mb-0">
                     <div className="hidden md:block md:w-4/12 md:mt-16">
                        <h4 className="text-sm font-black uppercase tracking-widest">Description</h4>
                        <h4 className="text-sm pt-1">App design</h4>
                     </div>

                     <div className="w-12/12 md:w-8/12 md:pr-16">
                        <h2 className="text-3xl font-black mb-4 md:mb-4">Description</h2>
                        <p>
                           <span className="font-black">classica</span> is a fun and friendly app for the classical
                           music lovers. Whether they are seasoned aficionados or enthusiastic newbies, they'll find
                           plenty of learning material to support their listening experience.
                        </p>
                     </div>
                  </section>
                  <section className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto text-dark md:flex mt-8 md:mt-16 mb-0">
                     <div className="hidden md:block md:w-4/12 mt-24">
                        <h4 className="text-sm font-black uppercase tracking-widest">Skills applied</h4>
                        <h4 className="text-sm pt-1">
                           Strategy
                           <br /> Concept
                           <br /> Product Design
                           <br /> UI Design
                        </h4>
                     </div>

                     <div className="w-11/12 md:w-8/12 max-w-screen-lg md:pr-16">
                        <h2 className="text-3xl font-black mb-4 md:mb-4">The brief</h2>
                        <p>
                           You’re asked to design some materials for a mobile app to be run on smartphones only. Here
                           some information on the app itself: The app is for listening to and learning about classical
                           music.
                           <br />
                           The app monetizes through subscriptions. Some of the content and features are free for all
                           users, while some are reserved to subscribers.
                           <br />
                           <br />
                           The target customers are the newbie with curiosity for the topic, but that so far has lacked
                           a convenient opportunity to educate themselves on it; and the long-standing aficionado that’s
                           looking for a high-quality, comprehensive library of classical music and related content to
                           enjoy on the go.
                           <br />
                           <br />
                           There are four different sections: <br />
                           <br />• &nbsp; DISCOVER. Here users are recommended content,​
                           <br />• &nbsp; SEARCH​. Here they can search for content,
                           <br />
                           ​• &nbsp; LEARN. Users can follow an educational track and test their knowledge,
                           <br />• &nbsp; ​PROFILE​. This includes their history of content consumption, their
                           favorites, their achievements, and some settings.
                           <br />
                           <br />
                           The main navigation between sections may happen through a tab bar UI.
                        </p>
                     </div>
                  </section>
                  <section className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto text-dark md:flex mt-8 md:mt-16 mb-0">
                     <div className="md:w-4/12 md:mt-16">
                        <h4 className="text-sm hidden md:block font-black uppercase tracking-widest mt-2">Problem</h4>
                     </div>
                     <div className="md:w-8/12 md:pr-16">
                        <h2 className="text-3xl mb-4 md:mb-4">The problem</h2>
                        <p>
                           The need for a comprehensive resource hub to satisfy the curiosity of the classical music
                           enthusiasts.
                           <br />A place for the curious newbie searching for high-quality learning resources, discover
                           interesting content to learn about the classical music world. A hub for the expert to dig
                           deep into the details of their passion subject, discover new music and enjoy the
                           classNameics.
                        </p>
                     </div>
                  </section>
                  <section className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto text-dark md:flex mt-8 md:mt-16 md:pb-0">
                     <div className="hidden md:block md:w-4/12 md:mt-16">
                        <h4 className="text-sm font-black uppercase tracking-widest mt-2">Solution</h4>
                     </div>
                     <div className="md:w-8/12 md:pr-16">
                        <h2 className="text-3xl mb-4 md:mb-4">The solution</h2>
                        <p>
                           An app that besides the excellent music player, provides a learning center to access
                           articles, podcasts, blogs and relevevant personalities in the field.
                        </p>
                     </div>
                  </section>
                  <section className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto text-dark mt-8 md:mt-16 mb-0">
                     <div className="md:flex">
                        <div className="hidden md:block md:w-4/12 mt-0 md:mt-16"></div>
                        <div className="w-11/12 md:w-8/12 md:mx-auto">
                           <h2 className="text-3xl mb-4 md:mb-4">User Personas</h2>
                        </div>
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
               </div>
               <div className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto pt-20">
                  {imageData.map((image, i) => (
                     <Img key={i} fluid={image} loading="eager" alt="App screen" />
                  ))}
               </div>

               <div className="w-full mx-auto">
                  <Img fluid={data.classicaImg_7.childImageSharp.fluid} loading="eager" alt="App screen" />
               </div>

               <div className="w-full bg-dark mx-auto">
                  <ImgNavTiles isPageNav={true} />
               </div>
            </TransitionPageIn>
         </div>
      </>
   );
}

export default classica;
