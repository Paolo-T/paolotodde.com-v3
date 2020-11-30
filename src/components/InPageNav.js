import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ImgTile from "./ImgTile";

function InPageNav() {
    const pageLocation =
        typeof window !== "undefined" ? window.location.pathname : "";

    const data = useStaticQuery(graphql`
        query Images {
            classicaImg: file(
                relativePath: { eq: "classica/classica_tile_2.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            petImg: file(relativePath: { eq: "petTime/petTime_tile_2.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            shuushImg: file(relativePath: { eq: "shuush/shuush_tile_2.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            spaceDigestImg: file(
                relativePath: { eq: "spaceDigest/spaceDigest_tile.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            buzzsumoImg: file(
                relativePath: { eq: "buzzsumo/buzzsumo_tile.png" }
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

    const navItemsNumber = Object.keys(data).length;

    return (
        <section className="w-full mb-10 pt-12 md:pt-20">
            <h2 className="block text-center mb-12 text-2xl md:text-4xl text-primary">
                Check other projects
            </h2>

            <div
                className={`grid grid-cols-${
                    pageLocation === "/three"
                        ? navItemsNumber
                        : navItemsNumber - 1
                } gap-0 mx-auto -mb-10 md:m-0`}
            >
                {pageLocation !== "/petTime" ? (
                    <ImgTile
                        Title=""
                        SubTitle=""
                        TileImg={data.petImg.childImageSharp.fluid}
                        LinkTo="/petTime"
                        ImgAlt="Pet Time app ui design"
                        MarginTop="0"
                        MarginBottom="0"
                    />
                ) : null}

                {pageLocation !== "/shuush/" ? (
                    <ImgTile
                        Title=""
                        SubTitle=""
                        TileImg={data.shuushImg.childImageSharp.fluid}
                        LinkTo="/shuush"
                        ImgAlt="Shuush! app ui design"
                        MarginTop="0"
                        MarginBottom="0"
                    />
                ) : null}

                {pageLocation !== "/classica" ? (
                    <ImgTile
                        Title=""
                        SubTitle=""
                        TileImg={data.classicaImg.childImageSharp.fluid}
                        LinkTo="/classica"
                        ImgAlt="classica app ui design"
                        MarginTop="0"
                        MarginBottom="0"
                    />
                ) : null}

                {pageLocation !== "/spaceDigest" ? (
                    <ImgTile
                        Title=""
                        SubTitle=""
                        TileImg={data.spaceDigestImg.childImageSharp.fluid}
                        Href="https://www.spacedigest.live/"
                        ImgAlt="Space Digest website"
                        MarginTop="0"
                        MarginBottom="0"
                    />
                ) : null}

                {pageLocation !== "/buzzsumo" ? (
                    <ImgTile
                        Title=""
                        SubTitle=""
                        TileImg={data.buzzsumoImg.childImageSharp.fluid}
                        LinkTo="/buzzsumo"
                        ImgAlt="BuzzSumo"
                        MarginTop="0"
                        MarginBottom="0"
                    />
                ) : null}
            </div>
        </section>
    );
}

export default InPageNav;
