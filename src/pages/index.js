import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import ImgTile from "../components/ImgTile";

function Home() {
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

   return (
      <>
         <SEO
            keywords={[
               `UI Designer`,
               `Web Designer`,
               `Product Designer`,
               `Front-end Developer`,
               `Portfolio`,
               `Brighton`,
               `Uk`,
            ]}
            title="Home"
         />
         <TransitionPageIn>
            <div className="w-screen bg-ImageHomeBg sm:bg-ImageHomeBg__sm md:bg-ImageHomeBg__md lg:bg-ImageHomeBg__lg xl:bg-ImageHomeBg__xl cover bg-no-repeat">
               <div className="w-10/12 md:w-10/12 mx-auto pt-40 md:pt-30">
                  <TransitionInview>
                     <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-0 sm:ml-10 md:ml-24 lg:pl-20 md:mt-10 lg:mt-4 md:mb-0 lg:pt-32 lg:mb-24">
                        Hello, I’m{" "}
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/paolo-todde/">
                           <span className="hover:text-primary hover:underline transition duration-500 cursor-pointer">
                              {" "}
                              Paolo.
                           </span>
                        </a>
                        <br />
                        <span className="inline text-primary">Designer</span> <span className="inline">and</span>
                        <br />
                        <span className="inline">front-end</span> <span className="inline text-primary">coder</span>.
                     </h1>
                  </TransitionInview>

                  {tilesData.map((tile, i) => (
                     <TransitionInview key={i}>
                        <div className="mb-5 mt-4 md:my-20">
                           <ImgTile
                              key={i}
                              title={tile.title}
                              subTitle={tile.subTitle}
                              cta={tile.cta}
                              tileImg={tile.tileImg}
                              linkTo={tile.linkTo}
                              imgAlt={tile.imgAlt}
                              marginTop={tile.marginTop}
                              marginBottom={tile.marginBottom}
                              rounded={tile.rounded}
                           />
                        </div>
                     </TransitionInview>
                  ))}

                  <section className="text-center mt-16 md:mt-20 md:mb-10">
                     <a target="_parent" rel="noopener noreferrer" href="mailto:iampaolotodde@gmail.com">
                        <button
                           type="button"
                           className="inline-block bg-primary hover:bg-yellow-600 hover:text-white focus:outline-none transition duration-500 ease-in-out font-header text-2xl md:text-4xl py-3 px-12 rounded"
                        >
                           Contact
                        </button>
                     </a>
                  </section>
               </div>
            </div>
         </TransitionPageIn>
      </>
   );
}

export default Home;
