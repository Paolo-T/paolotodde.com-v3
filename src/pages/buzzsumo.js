import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import InPageNav from "../components/InPageNav";

function Classica() {
    const data = useStaticQuery(graphql`
        query {
            buzzsumoImg_1: file(
                relativePath: { eq: "buzzsumo/buzzsumo__tile.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_2: file(
                relativePath: { eq: "classica/classica_2.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_3: file(
                relativePath: { eq: "classica/classica_3.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_4: file(
                relativePath: { eq: "classica/classica_4.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_5: file(
                relativePath: { eq: "classica/classica_5.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_6: file(
                relativePath: { eq: "classica/classica_6.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_7: file(
                relativePath: { eq: "classica/classica_7.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_8: file(
                relativePath: { eq: "classica/classica_8.png" }
            ) {
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
                title="Classica App"
            />
            <div className="w-12/12 mx-auto bg-blackPure">
                <TransitionPageIn>
                    <Img
                        fluid={data.buzzsumoImg_1.childImageSharp.fluid}
                        className="bg-blackPure"
                        loading="eager"
                    />
                    <div className="w-full bg-white pt-10 pb-20 md:py-32">
                        <section className="w-11/12 md:w-8/12 mx-auto text-black md:flex mt-10 md:mt-32 mb-0">
                            <div className="hidden md:block md:w-4/12 mt-24">
                                <h4 className="font-bold uppercase tracking-widest">
                                    Skills applied
                                </h4>
                                <h4 className="pt-4">
                                    Branding
                                    <br /> Concept
                                    <br /> Photo manipulation
                                </h4>
                            </div>

                            <div className="w-12/12 md:w-7/12 mt-16 md:mt-0 md:pr-24">
                                <h2 className="mb-4 md:mb-8">Description</h2>
                                <p>
                                    <span className="font-extrabold">
                                        Classica
                                    </span>{" "}
                                    is a fun and friendly app for the classical
                                    music lovers. Whether they are seasoned
                                    aficionados or enthusiastic newbies, they'll
                                    find plenty of learning material to support
                                    their listening experience.
                                </p>
                            </div>
                        </section>
                    </div>

                    <Img
                        fluid={data.classicaImg_2.childImageSharp.fluid}
                        className="-m-2"
                        loading="eager"
                        alt="App screen"
                    />

                    <Img
                        fluid={data.classicaImg_3.childImageSharp.fluid}
                        className="-m-2"
                        loading="eager"
                        alt="App screen"
                    />

                    <Img
                        fluid={data.classicaImg_4.childImageSharp.fluid}
                        className="-m-2"
                        loading="eager"
                        alt="App screen"
                    />

                    <Img
                        fluid={data.classicaImg_5.childImageSharp.fluid}
                        className="-m-2"
                        loading="eager"
                        alt="App screen"
                    />

                    <Img
                        fluid={data.classicaImg_7.childImageSharp.fluid}
                        className="-m-2"
                        loading="eager"
                        alt="App screen"
                    />
                    <div className=" bg-blackPure">
                        <InPageNav />
                    </div>
                </TransitionPageIn>
            </div>
        </>
    );
}

export default Classica;
