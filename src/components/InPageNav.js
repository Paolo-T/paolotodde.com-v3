import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import TransitionInview from "../components/TransitionInview";

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

    // console.log(data);

    return (
        <div
            className={`lg:w-${width} mx-auto mb-10 pt-12 md:pt-20 text-center`}
        >
            <TransitionInview>
                <h2 className="text-2xl md:text-5xl text-yellow-500 flex-1 mb-5 md:mb-16">
                    All projects
                </h2>
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
