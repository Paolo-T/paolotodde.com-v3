import React from "react";
import { Link } from "gatsby";
import TransitionInview from "./TransitionInview";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function ImgTiles({ width, gridCol, gap }) {
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
            <div
                className={`w-${width} grid grid-cols-${gridCol} gap-${gap} mx-auto`}
            >
                <Link to="/petTime" className="mt-4 md:mt-20 w-full h-full">
                    <div className="group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 text-center mb-4 md:mb-12">
                        <div
                            className="text-yellow-500 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500 "
                            style={{
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -40%)",
                            }}
                        >
                            <h1 className="mb-1 text-3xl md:text-6xl lg:text-9xl">
                                Pet Time
                            </h1>
                            <p className="text-xs md:text-md md:text-3xl">
                                Pet management app
                            </p>
                        </div>
                        <div className="bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"></div>
                        <Img
                            fluid={data.petImg.childImageSharp.fluid}
                            alt="Pet Time app ui design"
                            className="rounded-md"
                            loading="eager"
                        />
                    </div>
                </Link>
                <TransitionInview>
                    <Link to="/shuush">
                        <div className="group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 text-center my-4 md:my-12">
                            <div
                                className="text-yellow-500 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -40%)",
                                }}
                            >
                                <h1 className="mb-1 text-3xl md:text-6xl lg:text-9xl">
                                    Shuush!
                                </h1>
                                <p className="text-xs md:text-md md:text-3xl">
                                    Messaging app
                                </p>
                            </div>
                            <div className="bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"></div>
                            <Img
                                fluid={data.shuushImg.childImageSharp.fluid}
                                alt="shuush app ui design"
                                className="rounded-md"
                                loading="eager"
                            />
                        </div>
                    </Link>
                </TransitionInview>

                <TransitionInview>
                    <Link to="/classica" className="w-full h-full">
                        <div className="group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 text-center mb-2 mt-4 md:mt-12">
                            <div
                                className="text-yellow-500 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition-all duration-700"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -40%)",
                                }}
                            >
                                <h1 className="mb-1 text-3xl md:text-6xl lg:text-9xl">
                                    Classica
                                </h1>
                                <p className="text-xs md:text-md md:text-3xl">
                                    Music app
                                </p>
                            </div>
                            <div className="bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"></div>
                            <Img
                                fluid={data.classicaImg.childImageSharp.fluid}
                                className="rounded-md"
                                alt="classica app ui design"
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
