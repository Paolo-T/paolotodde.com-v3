import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import ImgNavTiles from "../components/ImgNavTiles";

function Three() {
   const data = useStaticQuery(graphql`
      query threeImages {
         threeImages: allFile(filter: { relativeDirectory: { eq: "three" } }, sort: { order: ASC, fields: name }) {
            nodes {
               id
               childImageSharp {
                  fluid(maxWidth: 2880) {
                     ...GatsbyImageSharpFluid
                  }
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
            title="Three"
         />
         <TransitionPageIn>
            <div className="w-full max-w-full mx-auto ">
               {data.threeImages.nodes.map((image) => (
                  <Img key={image.id} fluid={image.childImageSharp.fluid} loading="eager" />
               ))}
            </div>
         </TransitionPageIn>
         <TransitionPageIn>
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/three_design_company/">
               <div className="w-full pb-20 text-center" style={{ backgroundColor: "#f7f7f7" }}>
                  <h2 className="xlg:inline-block sm:text-2xl lg:text-4xl text-primary ease-in-out mb-3 underline w-10/12 md:w-8/12 mx-auto ">
                     Instagram
                  </h2>
               </div>
            </a>
         </TransitionPageIn>
         <div className="bg-blackPure">
            <ImgNavTiles isPageNav={true} />
         </div>
      </>
   );
}

export default Three;
