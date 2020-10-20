import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import TransitionInview from "../components/TransitionInview";
import ScrollToTop from "./ScrollToTop";

function InPageNav({ width }) {
    const data = useStaticQuery(graphql`
        query Images {
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
            petImg: file(relativePath: { eq: "petTime/petTime__tile.png" }) {
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
        }
    `);

    return (
        <div className="w-full mb-10 pt-12 md:pt-20">
            <TransitionInview>
                <section className="md:w-8/12 mx-auto flex flex-col-reverse md:flex-row md:justify-between mb-6 text-center md:text-left justify-center">
                    <h2 className="text-2xl md:text-4xl text-primary">
                        Check other projects
                    </h2>
                    <ScrollToTop showBelow="250" />
                </section>
            </TransitionInview>
            <div className="grid grid-cols-3 gap-0 mx-auto">
                <TransitionInview>
                    <Link to="/classica">
                        <Img
                            fluid={data.classicaImg.childImageSharp.fluid}
                            alt="classica app ui design"
                            className="w-full cursor-pointer transition duration-500 transform hover:scale-98"
                        />
                    </Link>
                </TransitionInview>

                <TransitionInview>
                    <Link to="/shuush">
                        <Img
                            fluid={data.shuushImg.childImageSharp.fluid}
                            alt="shuush app ui design"
                            className="w-full cursor-pointer transition duration-500 transform hover:scale-98"
                        />
                    </Link>
                </TransitionInview>

                <TransitionInview>
                    <Link to="/petTime">
                        <Img
                            fluid={data.petImg.childImageSharp.fluid}
                            alt="pet time app ui design"
                            className="w-full cursor-pointer transition duration-500 transform hover:scale-98"
                        />
                    </Link>
                </TransitionInview>
            </div>
        </div>
    );
}

export default InPageNav;
