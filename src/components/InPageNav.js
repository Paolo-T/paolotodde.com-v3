import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TransitionInview from "../components/TransitionInview";
import ScrollToTop from "./ScrollToTop";
import ImgTile from "./ImgTile";

function InPageNav() {
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
            spaceDigestImg: file(
                relativePath: { eq: "spaceDigest/spaceDigest__tile.png" }
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

    // {
    //     console.log(data);
    // }

    return (
        <div className="w-full mb-10 pt-12 md:pt-20">
            <TransitionInview>
                <section className="md:w-8/12 mx-auto flex flex-col-reverse md:flex-row md:justify-between text-center md:text-left justify-center mb-8">
                    <h2 className="text-2xl md:text-4xl text-primary">
                        Check other projects
                    </h2>
                    <ScrollToTop showBelow="250" />
                </section>
            </TransitionInview>
            <div className="grid grid-cols-4 gap-0 mx-auto">
                <ImgTile
                    Title=""
                    SubTitle=""
                    TileImg={data.petImg.childImageSharp.fluid}
                    LinkTo="/petTime"
                    ImgAlt="Pet Time app ui design"
                    MarginTop="0"
                    MarginBottom="0"
                />

                <ImgTile
                    Title=""
                    SubTitle=""
                    TileImg={data.shuushImg.childImageSharp.fluid}
                    LinkTo="/shuush"
                    ImgAlt="Shuush! app ui design"
                    MarginTop="0"
                    MarginBottom="0"
                />

                <ImgTile
                    Title=""
                    SubTitle=""
                    TileImg={data.classicaImg.childImageSharp.fluid}
                    LinkTo="/classica"
                    ImgAlt="Classica app ui design"
                    MarginTop="0"
                    MarginBottom="0"
                />

                <ImgTile
                    Title=""
                    SubTitle=""
                    TileImg={data.spaceDigestImg.childImageSharp.fluid}
                    Href="https://www.spacedigest.live/"
                    ImgAlt="Space Digest website"
                    MarginTop="0"
                    MarginBottom="0"
                />
            </div>
        </div>
    );
}

export default InPageNav;
