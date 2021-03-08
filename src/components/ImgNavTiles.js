import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ImgTile from "./ImgTile";
import TransitionInview from "./TransitionInview";

function ImgNavTiles({ isPageNav }) {
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
         brandwatchImg: file(relativePath: { eq: "brandwatch/brandwatch_tile.png" }) {
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
         inProgress: false,
         label: "UI/UX Design",
         title: "Pet Time",
         subTitle: "Pet management app",
         cta: "View use case",
         tileImg: data.petImg.childImageSharp.fluid,
         linkTo: "/pet-time",
         imgAlt: "Pet Time app ui design",
         rounded: "2xl",
      },
      {
         inProgress: false,
         label: "UI/UX Design",
         title: "Shuush!",
         subTitle: "Messaging app",
         cta: "View use case",
         tileImg: data.shuushImg.childImageSharp.fluid,
         linkTo: "/shuush",
         imgAlt: "Shuush! app ui design",
         rounded: "2xl",
      },
      {
         inProgress: false,
         label: "UI/UX Design",
         title: "Classica",
         subTitle: "Classical music app",
         cta: "View use case",
         tileImg: data.classicaImg.childImageSharp.fluid,
         linkTo: "/classica",
         imgAlt: "classica app ui design",
         rounded: "2xl",
      },
      // {
      //    label: "Web Design / Development",
      //    title: "Space Digest",
      //    subTitle: "Website",
      //    cta: "View more",
      //    tileImg: data.spaceDigestImg.childImageSharp.fluid,
      //    linkTo: "/space-digest",
      //    imgAlt: "Website page",
      //    rounded: "2xl",
      // },
      {
         inProgress: false,
         label: "Web Design",
         title: "BuzzSumo",
         subTitle: "Website marketing",
         cta: "View more",
         tileImg: data.buzzsumoImg.childImageSharp.fluid,
         linkTo: "/buzzsumo",
         imgAlt: "Buzzsumo web page",
         rounded: "2xl",
      },
      {
         inProgress: true,
         label: "Web Design",
         title: "Brandwatch",
         subTitle: "Coming soon",
         cta: "View more",
         tileImg: data.brandwatchImg.childImageSharp.fluid,
         linkTo: null,
         imgAlt: "Brandwatch webpage",
         rounded: "2xl",
      },
   ];

   // const navItemsNumber = Object.keys(data).length;
   // const onOneLine = pageLocation === "/three" ? navItemsNumber : navItemsNumber - 1;

   return (
      <section className={`w-full ${isPageNav ? "bg-dark pt-0" : ""}`}>
         {isPageNav && (
            <h1 className="block text-center text-2xl md:text-4xl text-primary mb-10 md:mb-20">Other projects</h1>
         )}

         <div
            className={`w-100 mx-auto md:m-0
            grid ${isPageNav ? "grid-cols-1 md:grid-cols-2 gap-6 md:gap-10" : "grid-cols-1 md:gap-20 gap-6"}`}
         >
            {tilesData.map((tile, i) => (
               // pageLocation !== tile.linkTo && (
               <TransitionInview>
                  <ImgTile
                     key={i}
                     inProgress={tile.inProgress}
                     label={!isPageNav && tile.label}
                     title={!isPageNav && tile.title}
                     subTitle={!isPageNav && tile.subTitle}
                     cta={tile.cta}
                     tileImg={tile.tileImg}
                     linkTo={tile.linkTo}
                     imgAlt={tile.imgAlt}
                     marginTop={tile.marginTop}
                     marginBottom={tile.marginBottom}
                     rounded={tile.rounded}
                     isPageNav={isPageNav}
                  />
               </TransitionInview>
            ))}
         </div>
      </section>
   );
}

export default ImgNavTiles;
