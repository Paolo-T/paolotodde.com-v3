import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import ImgNavTiles from "../components/ImgNavTiles";

function Shuush() {
   const data = useStaticQuery(graphql`
      query {
         shuushImg_0: file(relativePath: { eq: "shuush/shuush_0.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }

         shuushImg_1: file(relativePath: { eq: "shuush/shuush_1.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         shuushImg_2: file(relativePath: { eq: "shuush/shuush_2.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         shuushImg_3: file(relativePath: { eq: "shuush/shuush_3.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         shuushImg_4: file(relativePath: { eq: "shuush/shuush_4.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         shuushImg_5: file(relativePath: { eq: "shuush/shuush_5.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         shuushImg_6: file(relativePath: { eq: "shuush/shuush_6.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         shuushImg_7: file(relativePath: { eq: "shuush/shuush_7.png" }) {
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
      data.shuushImg_2.childImageSharp.fluid,
      data.shuushImg_3.childImageSharp.fluid,
      data.shuushImg_4.childImageSharp.fluid,
      data.shuushImg_5.childImageSharp.fluid,
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
            title="Shuush App"
         />
         <div className="w-full max-w-full mx-auto bg" style={{ backgroundColor: "#f6f6f6" }}>
            <TransitionPageIn>
               <Img
                  className="max-w-screen-xl mx-auto"
                  fluid={data.shuushImg_0.childImageSharp.fluid}
                  loading="eager"
               />

               <div className="w-full bg-white mx-auto pb-10 md:pb-20 md:pt-32 ">
                  <section className="w-11/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto text-dark">
                     <div class="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0">
                        {/* Paragraph */}
                        <div className="hidden md:block md:mt-14 col-start-1 col-end-4">
                           <h4 className="font-sansTitle text-sm uppercase tracking-widest">Description</h4>
                           <h4 className="text-sm">Messaging app</h4>
                        </div>
                        <div className="mt-10 md:mt-0 col-start-5 col-end-13">
                           <h2 className="text-3xl mb-4 md:mb-4">Description</h2>
                           <p>
                              <span className="font-sansTitle">Shuush!</span> is a fun messaging app. Its fresh and
                              friendly design will help you keeping in contact with your loved ones. The simple and
                              intuitive user interface will facilitate communications and sharing.
                           </p>
                        </div>
                     </div>
                  </section>
               </div>

               {imageData.map((image, i) => (
                  <div className="max-w-screen-lg mx-auto">
                     <Img key={i} fluid={image} loading="eager" alt="App screen" />
                  </div>
               ))}

               <div className="w-full mx-auto">
                  <Img fluid={data.shuushImg_7.childImageSharp.fluid} loading="eager" alt="App screen" />
               </div>

               <div className="w-100 bg-dark">
                  <div className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-lg mx-auto">
                     <ImgNavTiles isPageNav={true} />
                  </div>
               </div>
            </TransitionPageIn>
         </div>
      </>
   );
}

export default Shuush;
