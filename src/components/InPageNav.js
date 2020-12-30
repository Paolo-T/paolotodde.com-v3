import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ImgTile from "./ImgTile";

function InPageNav() {
   const pageLocation = typeof window !== "undefined" ? window.location.pathname : "";

   const data = useStaticQuery(graphql`
      query Images {
         classicaImg: file(relativePath: { eq: "classica/classica_tile_2.png" }) {
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
         shuushImg: file(relativePath: { eq: "shuush/shuush_tile_2.png" }) {
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
         title: "",
         subTitle: "",
         tileImg: data.petImg.childImageSharp.fluid,
         linkTo: "/petTime",
         imgAlt: "Pet Time app ui design",
         rounded: "",
      },
      {
         title: "",
         subTitle: "",
         tileImg: data.shuushImg.childImageSharp.fluid,
         linkTo: "/shuush",
         imgAlt: "Shuush! app ui design",
         rounded: "",
      },
      {
         title: "",
         subTitle: "",
         tileImg: data.classicaImg.childImageSharp.fluid,
         linkTo: "/classica",
         imgAlt: "classica app ui design",
         rounded: "",
      },
      {
         title: "",
         subTitle: "",
         tileImg: data.spaceDigestImg.childImageSharp.fluid,
         linkTo: "/spaceDigest",
         imgAlt: "Website page",
         rounded: "",
      },
      {
         title: "",
         subTitle: "",
         tileImg: data.buzzsumoImg.childImageSharp.fluid,
         linkTo: "/buzzsumo",
         imgAlt: "Buzzsumo web page",
         rounded: "",
      },
   ];

   // const navItemsNumber = Object.keys(data).length;
   // console.log(navItemsNumber);
   // console.log(pageLocation);

   return (
      <section className="w-full mb-10 pt-12 md:pt-20">
         <h2 className="block text-center mb-12 text-2xl md:text-4xl text-primary">Check other projects</h2>
         <div className="grid grid-cols-1 md:grid-cols-5 gap-0 mx-auto -mb-10 md:m-0">
            {/* <div
            className={`grid grid-cols-1 md:grid-cols-${
               pageLocation === "/three" ? navItemsNumber : navItemsNumber - 1
            } gap-0 mx-auto -mb-10 md:m-0`}
         > */}
            {tilesData.map(
               (tile, i) =>
                  pageLocation !== tile.linkTo && (
                     <ImgTile
                        key={i}
                        title={tile.title}
                        subTitle={tile.subTitle}
                        tileImg={tile.tileImg}
                        linkTo={tile.linkTo}
                        imgAlt={tile.imgAlt}
                        marginTop={tile.marginTop}
                        marginBottom={tile.marginBottom}
                        rounded={tile.rounded}
                     />
                  )
            )}
         </div>
      </section>
   );
}

export default InPageNav;
