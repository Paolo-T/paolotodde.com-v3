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
               <div className="w-full bg-white mx-auto pb-10 md:pb-40 md:pt-32">
                  <section className="w-11/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto text-dark">
                     <div class="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0">
                        {/* Paragraph */}
                        <div className="hidden md:block md:mt-14 col-start-1 col-end-4">
                           <h4 className="font-sansTitle text-sm uppercase tracking-widest">Description</h4>
                           <h4 className="text-sm">Website</h4>
                        </div>
                        <div className="col-start-5 col-end-13">
                           <h2 className="mt-10 md:mt-0 font-sansTitle text-3xl mb-3 md:mb-4">Description</h2>
                           <p>
                              <span className="font-sansTitle">Space Digest</span> is an informative web resource for
                              the passionate about space and space technology.
                           </p>
                        </div>
                        {/* Paragraph */}
                        <div className="hidden md:block md:mt-14 col-start-1 col-end-4">
                           <h4 className="font-sansTitle text-sm uppercase tracking-widest">Design</h4>
                        </div>
                        <div className="col-start-5 col-end-13">
                           <h2 className="font-sansTitle text-3xl mb-3 md:mb-4">Design</h2>
                           <p>
                              The design is simple and accessible. The UI is designed to facilitate the displaying of
                              data information.
                           </p>
                        </div>
                        {/* Paragraph */}
                        <div className="hidden md:block md:mt-14 col-start-1 col-end-4">
                           <h4 className="font-sansTitle text-sm uppercase tracking-widest">Development</h4>
                        </div>
                        <div className="col-start-5 col-end-13">
                           <h2 className="font-sansTitle text-3xl mb-3 md:mb-4">Development</h2>
                           <p>
                              It was developed using the Jam stack. Gatsby.js, React.js and deployed on Netlify. It
                              consumes data from the Nasa and SpaceX open APIS
                           </p>
                        </div>
                        {/* Paragraph */}
                        {/* <div className="hidden md:block md:mt-14 col-start-1 col-end-4">
                           <h4 className="font-sansTitle text-sm uppercase tracking-widest">Website</h4>
                        </div>
                        <div className="col-start-5 col-end-13">
                           <h2 className="font-sansTitle text-3xl mb-3 md:mb-4">Visit the website</h2>
                           <a
                              href="https://spacedigest.live"
                              target="_blank"
                              className="underline hover:text-primary text-2xl mt-2"
                           >
                              www.spacedigest.live
                           </a>
                        </div> */}
                     </div>
                  </section>

                  <section className="w-11/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto mt-12 md:mt-20">
                     <div class="grid grid-cols-2 gap-x-5 md:gap-x-10 gap-y-10 md:gap-y-20">
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
                     </div>
                  </section>
               </div>

               <ImgNavTiles isPageNav={true} />
            </TransitionPageIn>
         </div>
      </>
   );
}

export default spaceDigest;
