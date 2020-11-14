import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import InPageNav from "../components/InPageNav";

function classNameica() {
    const data = useStaticQuery(graphql`
        query {
            heroImg: file(relativePath: { eq: "buzzsumo/buzzsumo_tile.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            buzzsumoImages: allFile(
                filter: {
                    relativeDirectory: { eq: "buzzsumo" }
                    name: { ne: "buzzsumo_blog-grid" }
                }
                sort: { fields: absolutePath }
            ) {
                nodes {
                    id
                    childImageSharp {
                        fluid(maxWidth: 2880) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            gridImg: file(
                relativePath: { eq: "buzzsumo/buzzsumo_blog-grid.png" }
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
    {
        console.log(data);
    }

    return (
        <>
            <SEO
                keywords={[
                    `UI Design`,
                    `Product Design`,
                    `Product Designer`,
                    `Messaging App`,
                    `App`,
                    `UI Designer`,
                    `Web Designer`,
                    `Product Designer`,
                    `Front-end Developer`,
                    `Portfolio`,
                    `Brighton`,
                    `Uk`,
                ]}
                title="Portfolio page Buzzsumo"
            />
            <div className="w-12/12 mx-auto bg-white">
                <TransitionPageIn>
                    <Img
                        fluid={data.heroImg.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                    <div className="w-full pb-20 md:pb-24">
                        <section className="w-11/12 md:w-8/12 mx-auto text-black md:flex mt-10 md:mt-32 mb-0">
                            <div className="hidden md:block md:w-4/12 mt-24">
                                <h4 className="font-bold uppercase tracking-widest">
                                    Skills applied
                                </h4>
                                <h4 className="pt-4">
                                    Branding
                                    <br /> Photo manipulation
                                </h4>
                            </div>

                            <div className="w-12/12 md:w-7/12 mt-16 md:mt-0 md:pr-24">
                                <h2 className="mb-4 md:mb-8">Description</h2>
                                <p>
                                    <span className="font-extrabold">
                                        BuzzSumo
                                    </span>{" "}
                                    Creation of blog image headers to express
                                    BuzzSumo's branding identity. The tone of
                                    voice is playful and informal.
                                </p>
                            </div>
                        </section>

                        <section className="w-11/12 md:w-8/12 mx-auto text-black md:flex mt-10 md:mt-24 mb-0">
                            <div className="hidden md:block md:w-4/12 mt-24">
                                <h4 className="font-bold uppercase tracking-widest">
                                    Blog header images
                                </h4>
                            </div>

                            <div className="w-12/12 md:w-7/12 mt-16 md:mt-0 md:pr-24">
                                <h2 className="mb-4 md:mb-8">Blog Images</h2>
                                <p>
                                    <span className="font-extrabold">
                                        BuzzSumo
                                    </span>{" "}
                                    is a platform that allows you to find
                                    engaging pieces of content and discover new
                                    potential outreach opportunities. The site
                                    allows you to search for content that has
                                    received the most shares, links and
                                    comments.
                                </p>
                            </div>
                        </section>
                    </div>

                    <section className="w-10/12 md:w-8/12 mx-auto mb-32">
                        <div className="grid grid-cols-3 gap-5">
                            {data.buzzsumoImages.nodes.map((image) => (
                                <Img
                                    key={image.id}
                                    fluid={image.childImageSharp.fluid}
                                    className=""
                                    loading="eager"
                                    alt="Buzzsumo images"
                                />
                            ))}
                        </div>
                    </section>

                    <section className="w-11/12 md:w-8/12 mx-auto text-black md:flex mt-10 md:mt-32 mb-0">
                        <div className="hidden md:block md:w-4/12 mt-24">
                            <h4 className="font-bold uppercase tracking-widest">
                                Web page
                            </h4>
                        </div>

                        <div className="mt-16 md:mt-0 md:pr-24 mb-40">
                            <h2 className="mb-4 md:mb-8">Web page</h2>
                            <p>
                                How the image come together in the grid on
                                Buzzsumo's blog page.
                            </p>
                            <Img
                                fluid={data.gridImg.childImageSharp.fluid}
                                className="shadow-lg mt-16"
                                loading="eager"
                                alt="App screen"
                            />
                        </div>
                    </section>

                    <div className="bg-blackPure">
                        <InPageNav />
                    </div>
                </TransitionPageIn>
            </div>
        </>
    );
}

export default classNameica;
