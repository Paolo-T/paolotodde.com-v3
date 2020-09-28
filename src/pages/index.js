import React from "react";
import SEO from "../components/Seo";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { useSpring } from "react-spring";
import Img from "gatsby-image";
import TileImg from "../components/TileImg";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";

function Home() {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    const data = useStaticQuery(graphql`
        query homeImages {
            classicaImg: file(
                relativePath: { eq: "classica/classica__tile-bak.webp" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shuushImg: file(relativePath: { eq: "shuush/shuush__tile.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            petImg: file(
                relativePath: { eq: "petTime/petTime__tile-bak.webp" }
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
                <div className="w-10/12 md:container md:px-0 mx-auto pt-24 md:pt-40">
                    <TransitionInview>
                        <div className="w-12/12 md:pl-5 lg:pl-32 md:mb-2 md:pt-32">
                            <h1 className="text-4xl md:text-6xl lg:text-8xl md:mb-10 lg:mb-24">
                                Hello, I'm Paolo.
                                <br />
                                <span className="inline text-yellow-500">
                                    UI designer
                                </span>{" "}
                                &&nbsp;
                                <br />
                                <span className="inline">front-end</span>{" "}
                                <span className="inline text-yellow-500">
                                    coder
                                </span>
                                .
                            </h1>
                        </div>
                    </TransitionInview>

                    <TransitionInview>
                        <Link to="/classica" className="w-full h-full">
                            <div className="group w-full my-4 md:my-20 mt-20 cursor-pointer relative transition duration-500 transform hover:scale-98 rounded-lg text-center">
                                <div
                                    className="text-yellow-500 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition-all duration-700"
                                    style={{ top: "45%", left: "40%" }}
                                >
                                    <h1 className="mb-1">Classica</h1>
                                    <p>Music app</p>
                                </div>
                                <div className="bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"></div>
                                <Img
                                    fluid={
                                        data.classicaImg.childImageSharp.fluid
                                    }
                                    alt="classica app ui design"
                                    loading="eager"
                                />
                            </div>
                        </Link>
                    </TransitionInview>

                    <TransitionInview>
                        <Link to="/petTime" className="mt-20 w-full h-full">
                            <div className="group w-full my-4 md:my-20 mt-20 cursor-pointer relative transition duration-500 transform hover:scale-98 rounded-lg text-center">
                                <div
                                    className="text-yellow-500 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500"
                                    style={{ top: "43%", left: "39%" }}
                                >
                                    <h1 className="mb-1">Pet Time</h1>
                                    <p>Pet management</p>
                                </div>
                                <div className="bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"></div>
                                <Img
                                    fluid={data.petImg.childImageSharp.fluid}
                                    alt="Pet Time app ui design"
                                    className="w-full my-4 md:my-20 cursor-pointer relative transition duration-500 transform hover:scale-98 rounded-lg"
                                    loading="eager"
                                />
                            </div>
                        </Link>
                    </TransitionInview>

                    <TransitionInview>
                        <Link to="/shuush">
                            <div className="group w-full my-4 md:my-20 mt-20 cursor-pointer relative transition duration-500 transform hover:scale-98 rounded-lg text-center">
                                <div
                                    className="text-yellow-500 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500"
                                    style={{ top: "45%", left: "40%" }}
                                >
                                    <h1 className="mb-1">Shuush!</h1>
                                    <p>Messaging app</p>
                                </div>
                                <div className="bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"></div>
                                <Img
                                    fluid={data.shuushImg.childImageSharp.fluid}
                                    alt="shuush app ui design"
                                    className="w-full my-4 md:my-20 cursor-pointer relative transition duration-500 transform hover:scale-98 rounded-lg"
                                    loading="eager"
                                />
                            </div>
                        </Link>
                    </TransitionInview>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Home;
