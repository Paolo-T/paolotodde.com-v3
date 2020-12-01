import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import ImgTile from "../components/ImgTile";

function Home() {
    const data = useStaticQuery(graphql`
        query {
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
            shuushImg: file(relativePath: { eq: "shuush/shuush_tile_2.png" }) {
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
                <div className="w-screen bg-ImageHomeBg sm:bg-ImageHomeBg__sm md:bg-ImageHomeBg__md lg:bg-ImageHomeBg__lg xl:bg-ImageHomeBg__xl cover bg-no-repeat">
                    <div className="w-10/12 md:w-10/12 mx-auto pt-40 md:pt-30">
                        <TransitionInview>
                            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-0 sm:ml-10 md:ml-24 lg:pl-20 md:mt-10 lg:mt-4 md:mb-0 lg:pt-32 lg:mb-24">
                                Hello, I’m{" "}
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/paolo-todde/"
                                >
                                    <span className="hover:text-primary hover:underline transition duration-500 cursor-pointer">
                                        {" "}
                                        Paolo.
                                    </span>
                                </a>
                                <br />
                                <span className="inline text-primary">
                                    Designer
                                </span>{" "}
                                <span className="inline">and</span>
                                <br />
                                <span className="inline">front-end</span>{" "}
                                <span className="inline text-primary">
                                    coder
                                </span>
                                .
                            </h1>
                        </TransitionInview>

                        <ImgTile
                            Title="Pet Time"
                            SubTitle="UI/UX Design"
                            TileImg={data.petImg.childImageSharp.fluid}
                            LinkTo="/petTime"
                            ImgAlt="Pet Time app ui design"
                            MarginTop="20"
                            MarginBottom="20"
                            Rounded="lg"
                        />

                        <TransitionInview>
                            <ImgTile
                                Title=" Shuush!"
                                SubTitle="UI/UX Design"
                                TileImg={data.shuushImg.childImageSharp.fluid}
                                LinkTo="/shuush"
                                ImgAlt="Shuush! app ui design"
                                MarginTop="20"
                                MarginBottom="20"
                                Rounded="lg"
                            />
                        </TransitionInview>

                        <TransitionInview>
                            <ImgTile
                                Title="classica"
                                SubTitle="UI/UX Design"
                                TileImg={data.classicaImg.childImageSharp.fluid}
                                LinkTo="/classica"
                                ImgAlt="classica app ui design"
                                MarginTop="20"
                                MarginBottom="20"
                                Rounded="lg"
                            />
                        </TransitionInview>

                        <TransitionInview>
                            <ImgTile
                                Title="BuzzSumo.com"
                                SubTitle="Web design"
                                TileImg={data.buzzsumoImg.childImageSharp.fluid}
                                LinkTo="/buzzsumo"
                                ImgAlt="Buzzsumo"
                                MarginTop="20"
                                MarginBottom="20"
                                Rounded="lg"
                            />
                        </TransitionInview>

                        <TransitionInview>
                            <ImgTile
                                Title="Space Digest"
                                SubTitle="Web Design"
                                TileImg={
                                    data.spaceDigestImg.childImageSharp.fluid
                                }
                                Href="https://www.spacedigest.live/"
                                ImgAlt="Website icon"
                                MarginTop="20"
                                MarginBottom="20"
                                Rounded="lg"
                            />
                        </TransitionInview>

                        <section className="text-center mt-16 md:mt-32">
                            {/* <h2 className="text-2xl md:text-5xl mt-2 text-center">
                                <a
                                    target="_top"
                                    className="cursor-pointer text-primary underline "
                                    rel="noopener noreferrer"
                                    href="mailto:iampaolotodde@gmail.com"
                                >
                                    Contact
                                </a>
                            </h2> */}
                            <a
                                target="_parent"
                                rel="noopener noreferrer"
                                href="mailto:iampaolotodde@gmail.com"
                            >
                                <button
                                    type="button"
                                    className="inline-block bg-primary hover:bg-yellow-600 hover:text-white focus:outline-none  focus:border-red-600 transition duration-500 ease-in-out font-header text-2xl md:text-5xl py-3 px-12 rounded"
                                >
                                    Contact
                                </button>
                            </a>
                        </section>
                    </div>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Home;
