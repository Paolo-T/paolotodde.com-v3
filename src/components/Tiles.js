import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ImgTile from "./ImgTile";
import TransitionInview from "../components/TransitionInview";

function Tiles({ isPageNav }) {
   // const pageLocation = typeof window !== "undefined" ? window.location.pathname : "";

   const data = useStaticQuery(graphql`
      query {
         classicaImg: file(relativePath: { eq: "classica/classica_tile_2.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         shuushImg: file(relativePath: { eq: "shuush/shuush_tile_2.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         petImg: file(relativePath: { eq: "petTime/petTime_tile_2.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         spaceDigestImg: file(relativePath: { eq: "spaceDigest/spaceDigest_tile.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         buzzsumoImg: file(relativePath: { eq: "buzzsumo/buzzsumo_tile.png" }) {
            id
            childImageSharp {
               fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
      }
   `);

   const tilesData = [
      {
         title: "Pet Time",
         subTitle: "Pet management app - UI/UX Design",
         cta: "View use case",
         tileImg: data.petImg.childImageSharp.fluid,
         linkTo: "/pet-time",
         imgAlt: "Pet Time app ui design",
         rounded: "lg",
      },
      {
         title: "Shuush!",
         subTitle: "Messaging app - UI/UX Design",
         cta: "View use case",
         tileImg: data.shuushImg.childImageSharp.fluid,
         linkTo: "/shuush",
         imgAlt: "Shuush! app ui design",
         rounded: "lg",
      },
      {
         title: "Classica",
         subTitle: "Classical music app - UI/UX Design",
         cta: "View use case",
         tileImg: data.classicaImg.childImageSharp.fluid,
         linkTo: "/classica",
         imgAlt: "classica app ui design",
         rounded: "lg",
      },
      {
         title: "Space Digest",
         subTitle: "Website - Web Design / Development",
         cta: "View more",
         tileImg: data.spaceDigestImg.childImageSharp.fluid,
         linkTo: "/space-digest",
         imgAlt: "Website page",
         rounded: "lg",
      },
      {
         title: "BuzzSumo.com",
         subTitle: "Web marketing assets - Web design",
         cta: "View more",
         tileImg: data.buzzsumoImg.childImageSharp.fluid,
         linkTo: "/buzzsumo",
         imgAlt: "Buzzsumo web page",
         rounded: "lg",
      },
   ];

   // const navItemsNumber = Object.keys(data).length;
   // const onOneLine = pageLocation === "/three" ? navItemsNumber : navItemsNumber - 1;

   return (
      <section className="w-full">
         {isPageNav && (
            <h2 className="block text-center mb-12 text-2xl md:text-4xl text-primary pt-10">Check other projects</h2>
         )}

         <div
            className={`mx-auto -mb-10 md:m-0
            grid ${isPageNav ? "grid-cols-2 md:grid-cols-5 gap-0" : "grid-cols-1 md:gap-20 gap-3"}`}
         >
            {tilesData.map((tile, i) => (
               // pageLocation !== tile.linkTo && (
               <TransitionInview>
                  <ImgTile
                     key={i}
                     title={!isPageNav && tile.title}
                     subTitle={!isPageNav && tile.subTitle}
                     cta={tile.cta}
                     tileImg={tile.tileImg}
                     linkTo={tile.linkTo}
                     imgAlt={tile.imgAlt}
                     marginTop={tile.marginTop}
                     marginBottom={tile.marginBottom}
                     rounded={!isPageNav && tile.rounded}
                     isPageNav={isPageNav}
                  />
               </TransitionInview>
            ))}
         </div>
      </section>
   );
}

export default Tiles;
