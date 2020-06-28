import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { useSpring } from "react-spring";
import SEO from "../components/Seo";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import Img from "gatsby-image";

function Home() {
    // Animation
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    const data = useStaticQuery(graphql`
        query Images {
            classicaImg: file(
                relativePath: { eq: "classica/classica_banner_1.webp" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shuushImg: file(
                relativePath: { eq: "shuush/shuush_banner_1.webp" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            threeImg: file(relativePath: { eq: "three/three_banner_1.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    console.log(data);

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
                <div
                    id="tileContainer"
                    className="w-11/12 md:container md:px-0 mx-auto pt-24 md:pt-32"
                >
                    <TransitionInview>
                        <Link to="/classica">
                            <Img
                                fluid={data.classicaImg.childImageSharp.fluid}
                                alt="classica app ui design"
                            />
                        </Link>
                    </TransitionInview>

                    <TransitionInview>
                        <Link to="/shuush">
                            <Img
                                fluid={data.shuushImg.childImageSharp.fluid}
                                alt="classica app ui design"
                            />
                        </Link>
                    </TransitionInview>

                    <TransitionInview>
                        <Link to="/three">
                            <Img
                                fluid={data.threeImg.childImageSharp.fluid}
                                alt="classica app ui design"
                            />
                        </Link>
                    </TransitionInview>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Home;
