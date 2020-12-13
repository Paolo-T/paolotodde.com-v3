import React from "react";
import SEO from "../components/Seo";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
// import InPageNav from "../components/InPageNav";

function About() {
   const data = useStaticQuery(graphql`
      query aboutImages {
         threeImg: file(relativePath: { eq: "three/three_1.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         digitalArtImg: file(relativePath: { eq: "about/digitalArtThumb.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
      }
   `);

   const softSkills = [
      "Empathy",
      "Adaptability",
      "Ability and eagerness to learn",
      "Judgement",
      "Decision-Making",
      "Interpersonal Abilities",
      "Problem Solving",
      "Analytical",
      "Managing Priorities",
   ];

   const techSkills = [
      "Sketch",
      "Figma",
      "Git",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "HTML5",
      "CSS/SCSS",
      "Javascript",
      "React.js",
      "Responsive design",
      "PHP",
      "Wordpress",
      "Principle",
      "UI design",
      "Web design",
   ];

   const lastSoftSkill = softSkills[softSkills.length - 1];
   const lastTechSkill = techSkills[techSkills.length - 1];

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
            title="About"
         />
         {/* <div className="h-2 w-100 bg-primary"></div> */}
         <div className="w-full bg-white pt-20 md:pt-48">
            <TransitionPageIn>
               <TransitionInview>
                  <section className="w-10/12 md:w-6/12 mx-auto pt-20 md:pt-10">
                     <h2 className="md:w-12/12 text-4xl md:text-5xl">Hi!</h2>
                     <div className="lg:w-9/12 block flex-2 pt-4 lg:pt-10">
                        <p className="mt-2">
                           My name is Paolo Todde, and I am a designer specializing in web and mobile experiences.
                           Currently designing remotely for&nbsp;
                           <a
                              className="cursor-pointer text-primary underline"
                              rel="noopener noreferrer"
                              href="https://www.brandwatch.com/"
                              target="_blank"
                           >
                              Brandwatch
                           </a>
                           &nbsp;in Brighton (UK).
                           <br />
                           <br />I have a passion for visual communication, creating and developing well crafted
                           designs, user focused utilitarian interfaces. Contributing to the great web environment
                           making the best experience mixing creativity and technology, sifting out the unnecessary.
                        </p>
                        <p className="mt-8">
                           Staying curious and seeking new skills, discovering better ways of implementing techniques.
                        </p>
                        <p className="mt-8">Learning focus: UI/UX Design, Javascript, React.</p>

                        <p className="mt-8">
                           Member of the Jury Panel at&nbsp;
                           <a
                              className="cursor-pointer text-primary underline "
                              rel="noopener noreferrer"
                              href="https://www.cssdesignawards.com/"
                              target="_blank"
                           >
                              CSS Design Awards
                           </a>
                        </p>
                     </div>

                     <a target="_parent" rel="noopener noreferrer" href="mailto:iampaolotodde@gmail.com">
                        <button
                           type="button"
                           className="inline-block bg-primary hover:bg-yellow-600 hover:text-white focus:outline-none transition duration-500 ease-in-out font-header text-xl md:text-2xl mt-20 py-3 px-10 rounded"
                        >
                           Contact
                        </button>
                     </a>
                  </section>
               </TransitionInview>

               {/* <TransitionInview>
                  <section className="w-full mt-20 py-6 md:pb-20 bg-yellow-100">
                     <div className="w-10/12 md:w-6/12 mx-auto md:flex">
                        <div className="flex-1">
                           <h2 className="text-2xl md:text-3xl mb-6 md:mt-10">Skills</h2>
                           <ul className="text-xl">
                              {softSkills.map((softSkill) => (
                                 <li className="inline-block text-xl mb-1 bg-black text-white px-3 py-1 mr-3 mt-2 rounded-md">
                                    {softSkill}
                                    {softSkill === lastSoftSkill ? null : ","}&nbsp;
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="flex-1">
                           <h2 className="text-2xl md:text-3xl mb-6 md:mt-10">Tech Skills</h2>
                           <ul className="text-xl inline-block">
                              {techSkills.map((techSkill) => (
                                 <li className="inline-block text-xl mb-1 bg-black text-white px-3 py-1 mr-3 mt-2 rounded-md">
                                    {techSkill}
                                    {techSkill === lastTechSkill ? null : ","}&nbsp;
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </section>
               </TransitionInview> */}

               <TransitionInview>
                  <section className="w-full mt-20 mb-10 bg-yellow-100 py-10">
                     <div className="w-10/12 md:w-6/12 mx-auto">
                        <h2 className="text-2xl md:text-3xl flex-1 mb-10 text-center">Side projects</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="w-full">
                              <a href="https://www.instagram.com/paolo_tde/" target="_blank">
                                 <Img
                                    fluid={data.digitalArtImg.childImageSharp.fluid}
                                    alt="Digital Art"
                                    className="transition duration-500 transform hover:scale-98 rounded-lg cursor-pointer underline"
                                    loading="eager"
                                 />
                              </a>
                              <h2 className="text-lg mt-4">Digital Art</h2>
                           </div>
                           <div className="w-full">
                              <Link to="/three" target="_blank">
                                 <Img
                                    fluid={data.threeImg.childImageSharp.fluid}
                                    alt="3dc designs"
                                    className="transition duration-500 transform hover:scale-98 rounded-lg cursor-pointer underline"
                                    loading="eager"
                                 />
                              </Link>

                              <h2 className="text-lg mt-4">3DC (Brand)</h2>
                           </div>
                        </div>
                     </div>
                  </section>
               </TransitionInview>
            </TransitionPageIn>
         </div>
         {/* <div className=" bg-white">
                <InPageNav />
            </div> */}
      </>
   );
}

export default About;
