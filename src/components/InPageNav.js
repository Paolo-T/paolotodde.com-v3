import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import TransitionInview from "../components/TransitionInview";
import ScrollToTop from "./ScrollToTop";
import ImgTile from "./ImgTile";

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
                <ImgTile
                    Title=""
                    SubTitle=""
                    TileImg={data.petImg.childImageSharp.fluid}
                    LinkTo="/petTime"
                    ImgAlt="Pet Time app ui design"
                />

                <ImgTile
                    Title=""
                    SubTitle=""
                    TileImg={data.shuushImg.childImageSharp.fluid}
                    LinkTo="/shuush"
                    ImgAlt="Shuush! app ui design"
                />

                <ImgTile
                    Title=""
                    SubTitle=""
                    TileImg={data.classicaImg.childImageSharp.fluid}
                    LinkTo="/classica"
                    ImgAlt="Classica app ui design"
                />
            </div>
        </div>
    );
}

export default InPageNav;
