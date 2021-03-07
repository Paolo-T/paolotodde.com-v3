import React from "react";
import SEO from "../components/Seo";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import ImgNavTiles from "../components/ImgNavTiles";

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

   // const softSkills = [
   //    "Empathy",
   //    "Adaptability",
   //    "Ability and eagerness to learn",
   //    "Judgement",
   //    "Decision-Making",
   //    "Interpersonal Abilities",
   //    "Problem Solving",
   //    "Analytical",
   //    "Managing Priorities",
   // ];

   // const techSkills = [
   //    "Sketch",
   //    "Figma",
   //    "Git",
   //    "Adobe Photoshop",
   //    "Adobe Illustrator",
   //    "Adobe InDesign",
   //    "HTML5",
   //    "CSS/SCSS",
   //    "Javascript",
   //    "React.js",
   //    "Responsive design",
   //    "PHP",
   //    "Wordpress",
   //    "Principle",
   //    "UI design",
   //    "Web design",
   // ];

   // const lastSoftSkill = softSkills[softSkills.length - 1];
   // const lastTechSkill = techSkills[techSkills.length - 1];

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
         <TransitionPageIn>
            <div className="w-screen pt-20 md:pt-48">
               <TransitionInview>
                  <section className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto pt-20 md:pt-10 md:pl-20">
                     <h1 className="md:w-12/12 text-4xl md:text-5xl text-gray-300">Hi!</h1>
                     <div className="lg:w-10/12 block flex-2 pt-4 text-gray-400">
                        <p className="mt-2 leading-8">
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
                           &nbsp;in Brighton (UK) and member of the Jury Panel at&nbsp;
                           <a
                              className="cursor-pointer text-primary underline "
                              rel="noopener noreferrer"
                              href="https://www.cssdesignawards.com/"
                              target="_blank"
                           >
                              CSS Design Awards
                           </a>
                           .
                           <br />
                           <br />I have a passion for visual communication, creating and developing well crafted
                           designs, user focused utilitarian interfaces. Contributing to the great web environment
                           making the best experience mixing creativity and technology, sifting out the unnecessary.
                        </p>
                        <p className="mt-9 leading-9">
                           Staying curious and seeking new skills, discovering better ways of implementing techniques.
                        </p>
                     </div>
                  </section>
               </TransitionInview>

               <section
                  className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto mb-10 md:mb-20 mt-20
                grid md:grid-cols-12 gap-5 md:gap-10 pt-6 md:pt-12 pb-3 md:pb-10 pl-5 md:pl-10 rounded-2xl"
                  style={{ backgroundColor: "#181818" }}
               >
                  <div className="col-span-6 md:col-span-6 text-gray-400">
                     <p className="text-lg mb-3">
                        <span className="font-header text-white">Recent books / courses</span>
                     </p>
                     <div className="flex">
                        <div className="flex flex-col space-y-2 mr-3 mt-0.5">
                           <span className="w-4">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                 />
                              </svg>
                           </span>
                           <span className="w-4">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path fill="none" d="M12 14l9-5-9-5-9 5 9 5z" />
                                 <path
                                    fill="none"
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                 />
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                 />
                              </svg>
                           </span>
                           <span className="w-4">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path fill="none" d="M12 14l9-5-9-5-9 5 9 5z" />
                                 <path
                                    fill="none"
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                 />
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                 />
                              </svg>
                           </span>
                        </div>
                        <ul>
                           <li>
                              <span className="italic">‘Refactoring UI’</span>&nbsp;&nbsp;by A. Wathan & S. Schoger
                           </li>
                           <li>
                              <span className="italic">‘User Experience for web design’</span>&nbsp;&nbsp;by Chris
                              nodder
                           </li>
                           <li>
                              <span className="italic">
                                 ‘UX & Web Design Master Course: Strategy, Design,<br></br>Development’
                              </span>
                              &nbsp;&nbsp;by Joe Natoli
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-span-6 md:col-span-3 text-gray-400">
                     <p className="text-lg mb-3">
                        <span className="font-header text-white">Current focus</span>
                     </p>
                     <div className="flex">
                        <div className="flex flex-col space-y-2 mr-3 mt-0.5">
                           <span className="w-4">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                 />
                              </svg>
                           </span>
                           <span className="w-4">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                 />
                              </svg>
                           </span>
                           <span className="w-4">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                 />
                              </svg>
                           </span>
                        </div>
                        <ul>
                           <li>UI / UX Design</li>
                           <li>Design Systems</li>
                           <li>React.js</li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-span-2 md:col-span-3 text-gray-400">
                     <p className="text-lg mb-3">
                        <span className="font-header text-white">Next focus</span>
                     </p>
                     <div className="flex">
                        <div className="flex flex-col space-y-2 mr-3 mt-0.5">
                           <span className="w-4">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                 />
                              </svg>
                           </span>
                           <span className="w-4">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                 />
                              </svg>
                           </span>
                           <span className="w-4">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                 />
                              </svg>
                           </span>
                        </div>
                        <ul>
                           <li>Web animations</li>
                           <li>User Research</li>
                           <li>Design Sprints</li>
                        </ul>
                     </div>
                  </div>
               </section>

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
                  <section className="w-full pb-10 pt-4">
                     <div className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto">
                        <h1 className="text-2xl md:text-3xl flex-1 mb-10">Side projects</h1>
                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="w-full">
                              <a href="https://www.instagram.com/roomzeroone/" target="_blank">
                                 <Img
                                    fluid={data.digitalArtImg.childImageSharp.fluid}
                                    alt="Digital Art"
                                    className="transition duration-500 transform hover:scale-95 rounded-lg cursor-pointer underline"
                                    loading="eager"
                                 />
                              </a>
                              <h3 className="text-lg mt-4 text-gray-400">Digital Art</h3>
                           </div>
                           <div className="w-full">
                              <Link to="/three" target="_blank">
                                 <Img
                                    fluid={data.threeImg.childImageSharp.fluid}
                                    alt="3dc designs"
                                    className="transition duration-500 transform hover:scale-95 rounded-lg cursor-pointer underline"
                                    loading="eager"
                                 />
                              </Link>

                              <p className="text-lg mt-4 text-gray-400">3 Design Company ( Visual Brand )</p>
                           </div>
                        </div>
                     </div>
                  </section>
               </TransitionInview>
            </div>
         </TransitionPageIn>
      </>
   );
}

export default About;
