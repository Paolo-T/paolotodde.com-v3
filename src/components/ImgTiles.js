import React from "react";
import { Link } from "gatsby";
import TransitionInview from "./TransitionInview";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function ImgTiles({ gridCol, gap }) {
    const data = useStaticQuery(graphql`
        query TileImages {
            classicaImg: file(
                relativePath: { eq: "classica/classica__tile.webp" }
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
            petImg: file(relativePath: { eq: "petTime/petTime__tile.webp" }) {
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
            <div className={`grid grid-cols-${gridCol} gap-${gap}`}>
                <TransitionInview>
                    <Link to="/classica" className="w-full h-full">
                        <div className="group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 rounded-lg text-center">
                            <div
                                className="text-yellow-500 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition-all duration-700"
                                style={{ top: "45%", left: "40%" }}
                            >
                                <h1 className="mb-1">Classica</h1>
                                <p>Music app</p>
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
                        <div className="group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 rounded-lg text-center">
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
                                className=""
                                loading="eager"
                            />
                        </div>
                    </Link>
                </TransitionInview>

                <TransitionInview>
                    <Link to="/shuush">
                        <div className="group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 rounded-lg text-center">
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