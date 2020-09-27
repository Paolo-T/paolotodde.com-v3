import React from "react";
import SEO from "../components/Seo";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { useSpring } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";

function About() {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    const data = useStaticQuery(graphql`
        query aboutImages {
            threeImg: file(relativePath: { eq: "three/three_1.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            digitalArtImg: file(
                relativePath: { eq: "about/digitalArtThumb.webp" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
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
                title="About"
            />

            <div className="w-full bg-offWhite pt-20 md:pt-48 pb-20 md:pb-48">
                <TransitionPageIn>
                    <TransitionInview>
                        <section className="w-10/12 md:w-9/12 mx-auto lg:flex flex-initial ">
                            <h2 className="md:w-12/12 text-5xl md:text-5xl text-black flex-1 lg:pl-20 pt-16">
                                Hello
                            </h2>
                            <div className="lg:w-8/12 block text-black flex-2 pt-4 lg:pt-20">
                                <p className="md:pr-20 mt-2">
                                    I'm Paolo Todde. Designer and Front-end
                                    coder based in Brighton.
                                    <br />
                                    <br />I have a passion for visual
                                    communication, creating and developing well
                                    crafted designs, user focused utilitarian
                                    interfaces. Contributing to the great web
                                    environment making the best experience
                                    mixing creativity and technology.
                                </p>
                                <p className="md:pr-20 mt-8">
                                    Staying curious and up to date with the
                                    latest technology movements. Constantly
                                    seeking new skills, discovering better ways
                                    of implementing techniques, sifting out the
                                    unnecessary.
                                </p>
                                <p className="md:pr-20 mt-8">
                                    Currently focusing on Design, Javascript,
                                    React and web animations.
                                </p>
                                <p className="md:pr-20 mt-8">
                                    Member of the Jury Panel at{" "}
                                    <a
                                        className="text-red-600"
                                        rel="noopener noreferrer"
                                        href="https://www.cssdesignawards.com/"
                                        target="_blank"
                                    >
                                        CSS Design Awards
                                    </a>
                                </p>
                            </div>
                        </section>
                    </TransitionInview>
                    <TransitionInview>
                        <section className="w-10/12 md:w-9/12 mx-auto lg:flex flex-initial mt-20 lg:mt-32">
                            <h3 className="md:w-12/12 text-xl md:text-base font-bold uppercase text-black flex-1 md:pt-12 lg:pl-20 mb-10 md:mb-10">
                                Side Projects
                            </h3>
                            <div className="md:w-8/12 block text-black">
                                <div className="w-full">
                                    <h2 className="text-4xl mb-4">
                                        Digital Art
                                    </h2>
                                    <a
                                        href="https://www.instagram.com/paolo_tde/"
                                        target="_blank"
                                    >
                                        <Img
                                            fluid={
                                                data.digitalArtImg
                                                    .childImageSharp.fluid
                                            }
                                            alt="Digital Art"
                                            className="cursor-pointer transition duration-500 transform hover:scale-98 rounded-lg"
                                            loading="eager"
                                        />
                                    </a>
                                </div>
                                <div className="w-full mt-10 md:mt-20">
                                    <h2 className="text-4xl mb-4">
                                        3DC (Brand)
                                    </h2>
                                    <Link to="/three" target="_blank">
                                        <Img
                                            fluid={
                                                data.threeImg.childImageSharp
                                                    .fluid
                                            }
                                            alt="3dc designs"
                                            className="cursor-pointer transition duration-500 transform hover:scale-98 rounded-lg"
                                            loading="eager"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </TransitionInview>
                </TransitionPageIn>
            </div>
        </>
    );
}

export default About;
