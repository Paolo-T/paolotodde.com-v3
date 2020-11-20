import React from "react";
import SEO from "../components/Seo";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
// import InPageNav from "../components/InPageNav";

function About() {
    const data = useStaticQuery(graphql`
        query aboutImages {
            threeImg: file(relativePath: { eq: "three/three_1.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            digitalArtImg: file(
                relativePath: { eq: "about/digitalArtThumb.png" }
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
                title="About"
            />

            <div className="w-full bg-white pt-20 md:pt-48">
                <TransitionPageIn>
                    <TransitionInview>
                        <section className="w-10/12 md:w-6/12 mx-auto pt-20 md:pt-10">
                            <h2 className="md:w-12/12 text-4xl md:text-5xl font-bold  ">
                                Hi!
                            </h2>
                            <div className="lg:w-9/12 block  flex-2 pt-4 lg:pt-10">
                                <p className="mt-2">
                                    My name is Paolo Todde, and I am a designer
                                    specializing in web and mobile experiences.
                                    Currently designing remotely for{" "}
                                    <a
                                        className="cursor-pointer text-primary underline"
                                        rel="noopener noreferrer"
                                        href="https://www.brandwatch.com/"
                                        target="_blank"
                                    >
                                        Brandwatch
                                    </a>{" "}
                                    in Brighton (UK).
                                    <br />
                                    <br />I have a passion for visual
                                    communication, creating and developing well
                                    crafted designs, user focused utilitarian
                                    interfaces. Contributing to the great web
                                    environment making the best experience
                                    mixing creativity and technology, sifting
                                    out the unnecessary.
                                </p>
                                <p className="mt-8">
                                    Staying curious and seeking new skills,
                                    discovering better ways of implementing
                                    techniques.
                                </p>
                                <p className="mt-8">
                                    Learning focus: UI/UX Design, Javascript,
                                    React.
                                </p>

                                <p className="mt-8">
                                    Member of the Jury Panel at&nbsp;{" "}
                                    <a
                                        className="cursor-pointer text-primary underline "
                                        rel="noopener noreferrer"
                                        href="https://www.cssdesignawards.com/"
                                        target="_blank"
                                    >
                                        CSS Design Awards
                                    </a>
                                </p>
                            </div>
                            <button
                                rel="noopener noreferrer"
                                onClick="location.href='mailto:iampaolotodde@gmail.com'"
                                type="button"
                                className="inline-block bg-primary hover:bg-yellow-600 hover:text-white focus:outline-none  focus:border-red-600 transition duration-500 ease-in-out font-header text-xl md:text-3xl mt-20 py-3 px-10 rounded"
                            >
                                Contact
                            </button>
                        </section>
                    </TransitionInview>

                    <TransitionInview>
                        <section className="w-full bg-orange-100 mt-20 md:mt-40 pt-6 pb-10 md:pb-32">
                            <div className="w-10/12 md:w-6/12 mx-auto">
                                <h2 className="text-5xl md:text-4xl flex-1 mb-16 mt-10">
                                    Side projects
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="w-full">
                                        <h2 className="text-2xl mb-4">
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
                                                className="transition duration-500 transform hover:scale-98 rounded-lg cursor-pointer underline"
                                                loading="eager"
                                            />
                                        </a>
                                    </div>
                                    <div className="w-full">
                                        <h2 className="text-2xl mb-4">
                                            3DC (Brand)
                                        </h2>
                                        <Link to="/three" target="_blank">
                                            <Img
                                                fluid={
                                                    data.threeImg
                                                        .childImageSharp.fluid
                                                }
                                                alt="3dc designs"
                                                className="transition duration-500 transform hover:scale-98 rounded-lg cursor-pointer underline"
                                                loading="eager"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </TransitionInview>
                </TransitionPageIn>
            </div>
            {/* <div className=" bg-white">
                <InPageNav />
            </div> */}
        </>
    );
}

export default About;
