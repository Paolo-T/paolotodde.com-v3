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
                    <div className="w-10/12 md:container mx-auto pt-40 md:pt-30">
                        <TransitionInview>
                            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-0 sm:ml-10 md:ml-24 lg:pl-8 md:mt-10 lg:mt-4 md:mb-0 lg:pt-32 lg:mb-24">
                                Hello, I’m Paolo.
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
                            SubTitle="Pet management app"
                            TileImg={data.petImg.childImageSharp.fluid}
                            LinkTo="/petTime"
                            ImgAlt="Pet Time app ui design"
                            MarginTop="20"
                            MarginBottom="20"
                            Rounded="md"
                        />

                        <TransitionInview>
                            <ImgTile
                                Title=" Shuush!"
                                SubTitle="Messaging app"
                                TileImg={data.shuushImg.childImageSharp.fluid}
                                LinkTo="/shuush"
                                ImgAlt="Shuush! app ui design"
                                MarginTop="20"
                                MarginBottom="20"
                                Rounded="md"
                            />
                        </TransitionInview>

                        <TransitionInview>
                            <ImgTile
                                Title="Classica"
                                SubTitle="Music app"
                                TileImg={data.classicaImg.childImageSharp.fluid}
                                LinkTo="/classica"
                                ImgAlt="Classica app ui design"
                                MarginTop="20"
                                MarginBottom="20"
                                Rounded="md"
                            />
                        </TransitionInview>
                        <TransitionInview>
                            <ImgTile
                                Title="Space Digest"
                                SubTitle="Visit website"
                                TileImg={
                                    data.spaceDigestImg.childImageSharp.fluid
                                }
                                Href="https://www.spacedigest.live/"
                                ImgAlt="Space Digest website"
                                MarginTop="20"
                                MarginBottom="20"
                                Rounded="md"
                            />
                        </TransitionInview>

                        <section className="mt-5 md:mt-20 bg-gray-100 py-10">
                            <h2 className="text-2xl md:text-5xl mt-2 text-center">
                                <a
                                    target="_top"
                                    className="cursor-pointer text-primary underline "
                                    rel="noopener noreferrer"
                                    href="mailto:iampaolotodde@gmail.com"
                                >
                                    Contact
                                </a>
                            </h2>
                        </section>
                    </div>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Home;
