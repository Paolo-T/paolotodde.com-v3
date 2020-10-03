import React from "react";
import { Link } from "gatsby";
import TransitionInview from "./TransitionInview";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function ImgTiles({ gridCol, gap }) {
    const data = useStaticQuery(graphql`
        query {
            classicaImg: file(
                relativePath: { eq: "classica/classica__tile.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            shuushImg: file(relativePath: { eq: "shuush/shuush__tile.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            petImg: file(relativePath: { eq: "petTime/petTime__tile.png" }) {
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
            <div className={`grid grid-cols-${gridCol} gap-${gap}`}>
                <TransitionInview>
                    <Link to="/classica" className="w-full h-full">
                        <div className="group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 rounded-lg text-center mb-2 md:mb-10">
                            <div
                                className="text-yellow-500 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition-all duration-700"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, 0)",
                                }}
                            >
                                <h1 className="mt-0 mb-0 md:mb-1 text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
                                    Classica
                                </h1>
                                <p className="text-md md:text-xl">Music app</p>
                            </div>
                            <div className="bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"></div>
                            <Img
                                fluid={data.classicaImg.childImageSharp.fluid}
                                className=""
                                alt="classica app ui design"
                                loading="eager"
                            />
                        </div>
                    </Link>
                </TransitionInview>

                <TransitionInview>
                    <Link to="/petTime" className="mt-20 w-full h-full">
                        <div className="group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 rounded-lg text-center my-2 md:my-10">
                            <div
                                className="text-yellow-500 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500 "
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, 0)",
                                }}
                            >
                                <h1 className="mb-1 text-5xl md:text-9xl">
                                    Pet Time
                                </h1>
                                <p>Pet management</p>
                            </div>
                            <div className="bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"></div>
                            <Img
                                fluid={data.petImg.childImageSharp.fluid}
                                alt="Pet Time app ui design"
                                className=""
                                loading="eager"
                            />
                        </div>
                    </Link>
                </TransitionInview>

                <TransitionInview>
                    <Link to="/shuush">
                        <div className="group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 rounded-lg text-center mt-2 md:my-10">
                            <div
                                className="text-yellow-500 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, 0)",
                                }}
                            >
                                <h1 className="mb-1 text-5xl md:text-9xl">
                                    Shuush!
                                </h1>
                                <p>Messaging app</p>
                            </div>
                            <div className="bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"></div>
                            <Img
                                fluid={data.shuushImg.childImageSharp.fluid}
                                alt="shuush app ui design"
                                className=""
                                loading="eager"
                            />
                        </div>
                    </Link>
                </TransitionInview>
            </div>
        </>
    );
}

export default ImgTiles;
