import React from "react";
import SEO from "../components/Seo";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { useSpring } from "react-spring";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";

function Home() {
    // Animation
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    const data = useStaticQuery(graphql`
        query homeImages {
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
            threeImg: file(relativePath: { eq: "three/three_1.webp" }) {
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
                <div className="w-10/12 md:container md:px-0 mx-auto pt-24 md:pt-2">
                    <TransitionInview>
                        <Link to="/classica" className="mt-20">
                            <Img
                                fluid={data.classicaImg.childImageSharp.fluid}
                                alt="classica app ui design"
                                className="w-full my-4 md:my-20 cursor-pointer relative transition duration-500 transform hover:scale-98"
                                loading="eager"
                            />
                        </Link>
                    </TransitionInview>

                    <TransitionInview>
                        <Link to="/petTime">
                            <Img
                                fluid={data.petImg.childImageSharp.fluid}
                                alt="pet time app ui design"
                                className="w-full my-4 md:my-20 cursor-pointer relative transition duration-500 transform hover:scale-98"
                                loading="eager"
                            />
                        </Link>
                    </TransitionInview>

                    <TransitionInview>
                        <Link to="/shuush">
                            <Img
                                fluid={data.shuushImg.childImageSharp.fluid}
                                alt="shuush app ui design"
                                className="w-full my-4 md:my-20 cursor-pointer relative transition duration-500 transform hover:scale-98"
                                loading="eager"
                            />
                        </Link>
                    </TransitionInview>

                    <TransitionInview>
                        <Link to="/three">
                            <Img
                                fluid={data.threeImg.childImageSharp.fluid}
                                alt="3dc designs"
                                className="w-full my-4 md:my-20 cursor-pointer relative transition duration-500 transform hover:scale-98"
                                loading="eager"
                            />
                        </Link>
                    </TransitionInview>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Home;
