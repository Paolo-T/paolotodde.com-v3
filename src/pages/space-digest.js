import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import ImgNavTiles from "../components/ImgNavTiles";

function spaceDigest() {
   const data = useStaticQuery(graphql`
      query {
         spaceDigestImg_1: file(relativePath: { eq: "spaceDigest/spaceDigest_tile.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         spaceDigestImg_2: file(relativePath: { eq: "spaceDigest/spaceDigest_0.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         spaceDigestImg_3: file(relativePath: { eq: "spaceDigest/spaceDigest_1.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         spaceDigestImg_4: file(relativePath: { eq: "spaceDigest/spaceDigest_2.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         spaceDigestImg_5: file(relativePath: { eq: "spaceDigest/spaceDigest_3.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
      }
   `);

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
         <div className="w-12/12 mx-auto bg-blackPure">
            <TransitionPageIn>
               <Img
                  fluid={data.spaceDigestImg_1.childImageSharp.fluid}
                  className="max-w-screen-xxl mx-auto bg-dark"
                  loading="eager"
               />
               <div className="w-full bg-white">
                  <div className="pt-10 pb-20 md:pt-28 md:pb-48">
                     <section className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto text-dark md:flex mt-8 md:mt-5 mb-0">
                        <div className="hidden md:block md:w-4/12 md:mt-16">
                           <h4 className="text-sm font-black uppercase tracking-widest mt-2">Description</h4>
                           {/* <h4 className="text-sm pt-4">App design</h4> */}
                        </div>

                        <div className="w-12/12 md:w-7/12 md:mt-0 mt-10">
                           <h2 className="text-3xl font-black mb-4 md:mb-4">Description</h2>
                           <p>
                              <span className="font-black">Space Digest's</span> is an informative web resource for the
                              passionate about space and space technology.
                           </p>
                        </div>
                     </section>
                     <section className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto text-dark md:flex mt-10 md:mt-20 mb-0">
                        <div className="hidden md:block md:w-4/12 md:mt-16">
                           <h4 className="text-sm uppercase tracking-widest mt-2">Design</h4>
                           {/* <h4 className="text-sm pt-4">App design</h4> */}
                        </div>

                        <div className="w-12/12 md:w-7/12 md:mt-0">
                           <h2 className="text-3xl font-black mb-4 md:mb-4">Design</h2>
                           <p>
                              <span className="font-black">Space Digest's</span> design is simple and accessible. The UI
                              is designed to facilitate the displaying of data information
                           </p>
                        </div>
                     </section>
                     <section className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto text-dark md:flex mt-10 md:mt-20 mb-0">
                        <div className="hidden md:block md:w-4/12 md:mt-16">
                           <h4 className="text-sm uppercase tracking-widest mt-2">Development</h4>
                           {/* <h4 className="text-sm pt-4">App design</h4> */}
                        </div>

                        <div className="w-12/12 md:w-7/12 md:mt-0">
                           <h2 className="text-3xl font-black mb-4 md:mb-4">Development</h2>
                           <p>
                              <span className="font-black">Space Digest</span> is developed using the Jam stack.
                              Gatsby.js, React.js and deployed on Netlify. It consumes data from the Nasa and SpaceX
                              open APIS
                           </p>
                        </div>
                     </section>
                     <section className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto text-dark md:flex mt-10 md:mt-20 mb-0">
                        <div className="hidden md:block md:w-4/12 md:mt-16">
                           <h4 className="text-sm font-black uppercase tracking-widest mt-2">Website</h4>
                           {/* <h4 className="text-sm pt-4">App design</h4> */}
                        </div>

                        <div className="w-12/12 md:w-7/12 md:mt-0">
                           <h2 className="text-3xl font-black mb-4 md:mb-4">Visit the website</h2>
                           <a
                              href="https://spacedigest.live"
                              target="_blank"
                              className="underline hover:text-primary text-2xl mt-2"
                           >
                              www.spacedigest.live
                           </a>
                        </div>
                     </section>
                     <section className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto flex space-x-4 md:space-x-16 text-dark mt-10 md:mt-10 mb-0">
                        <Img
                           fluid={data.spaceDigestImg_2.childImageSharp.fluid}
                           className="flex-1 shadow-lg"
                           loading="eager"
                           alt="App screen"
                        />
                        <Img
                           fluid={data.spaceDigestImg_3.childImageSharp.fluid}
                           className="flex-1 shadow-lg"
                           loading="eager"
                           alt="App screen"
                        />
                     </section>
                     <section className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto flex space-x-4 md:space-x-16 text-dark mt-10 md:mt-5 mb-0">
                        <Img
                           fluid={data.spaceDigestImg_4.childImageSharp.fluid}
                           className="flex-1 shadow-lg"
                           loading="eager"
                           alt="App screen"
                        />
                        <Img
                           fluid={data.spaceDigestImg_5.childImageSharp.fluid}
                           className="flex-1 shadow-lg"
                           loading="eager"
                           alt="App screen"
                        />
                     </section>
                  </div>
               </div>

               <div className="w-full bg-dark mx-auto">
                  <ImgNavTiles isPageNav={true} />
               </div>
            </TransitionPageIn>
         </div>
      </>
   );
}

export default spaceDigest;
