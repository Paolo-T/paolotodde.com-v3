import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import ImgNavTiles from "../components/ImgNavTiles";

function classNameica() {
   const data = useStaticQuery(graphql`
      query {
         heroImg: file(relativePath: { eq: "buzzsumo/buzzsumo_tile.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         buzzsumoImages: allFile(
            filter: { relativeDirectory: { eq: "buzzsumo" }, name: { ne: "buzzsumo_blog-grid" } }
            sort: { fields: absolutePath }
         ) {
            nodes {
               id
               childImageSharp {
                  fluid(maxWidth: 2880) {
                     ...GatsbyImageSharpFluid_withWebp
                  }
               }
            }
         }
         gridImg: file(relativePath: { eq: "buzzsumo/buzzsumo_blog-grid.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
      }
   `);
   {
      console.log(data);
   }

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
            title="Portfolio page Buzzsumo"
         />
         <div className="w-12/12 mx-auto bg-white">
            <TransitionPageIn>
               <Img fluid={data.heroImg.childImageSharp.fluid} className="" loading="eager" />

               <section className="w-full bg-white mx-auto pb-10 md:pb-40 md:pt-32">
                  <div className="w-11/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-xl mx-auto text-dark">
                     <div class="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0">
                        {/* Paragraph */}
                        <div className="hidden md:block md:mt-14 col-start-1 col-end-4">
                           <h4 className=" text-sm uppercase tracking-widest">Skills applied</h4>
                           <h4 className="text-sm pt-4">
                              Branding
                              <br /> Photo manipulation
                           </h4>
                        </div>
                        <div className="mt-10 md:mt-0 col-start-5 col-end-13">
                           <h2 className=" text-3xl mb-3 md:mb-4">Description</h2>
                           <p>
                              <span className="">BuzzSumo</span> Creation of blog image headers to express BuzzSumo's
                              branding identity. The tone of voice is playful and informal.
                           </p>
                        </div>
                        {/* Paragraph */}
                        <div className="hidden md:block md:mt-14 col-start-1 col-end-4">
                           <h4 className=" text-sm uppercase tracking-widest">Images</h4>
                        </div>
                        <div className="col-start-5 col-end-13">
                           <h2 className=" text-3xl mb-3 md:mb-4">Blog Images</h2>
                           <p>
                              <span className="">BuzzSumo</span> is a platform that allows you to find engaging pieces
                              of content and discover new potential outreach opportunities. The site allows you to
                              search for content that has received the most shares, links and comments.
                           </p>
                        </div>
                        {/* Paragraph */}
                        <div className="hidden md:block md:mt-14 col-start-1 col-end-4">
                           <h4 className=" text-sm uppercase tracking-widest">Live</h4>
                        </div>
                        <div className="col-start-5 col-end-13">
                           <h2 className=" text-3xl mb-3 md:mb-4">See it live</h2>
                           <a
                              href="https://buzzsumo.com/blog/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-primary text-2xl mt-2"
                           >
                              www.buzzsumo.com/blog
                           </a>
                        </div>
                     </div>
                  </div>
               </section>

               <section className="w-11/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-xl mx-auto">
                  <div className="grid grid-cols-3 gap-5">
                     {data.buzzsumoImages.nodes.map((image) => (
                        <Img
                           key={image.id}
                           fluid={image.childImageSharp.fluid}
                           className=""
                           loading="eager"
                           alt="Buzzsumo images"
                        />
                     ))}
                  </div>
               </section>

               <section className="w-11/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-xl mx-auto text-dark mt-52">
                  <div class="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0 mb-14 md:mb-32">
                     {/* Paragraph */}
                     <div className="hidden md:block md:mt-14 col-start-1 col-end-4">
                        <h4 className=" text-sm uppercase tracking-widest">Live</h4>
                     </div>
                     <div className="col-start-5 col-end-13">
                        <h2 className=" text-3xl mb-3 md:mb-4">Web page</h2>
                        <p>How the image come together in the grid on Buzzsumo's blog page.</p>
                     </div>
                  </div>

                  <Img
                     fluid={data.gridImg.childImageSharp.fluid}
                     className="shadow-lg mb-20 md:mb-32"
                     loading="eager"
                     alt="App screen"
                  />
               </section>

               <div className="w-100 bg-dark">
                  <div className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-xl mx-auto">
                     <ImgNavTiles isPageNav={true} />
                  </div>
               </div>
            </TransitionPageIn>
         </div>
      </>
   );
}

export default classNameica;
