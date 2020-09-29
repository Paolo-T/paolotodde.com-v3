import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";

function Shuush() {
    const data = useStaticQuery(graphql`
        query shuushImages {
            shuushImg_0: file(relativePath: { eq: "shuush/shuush_0.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            shuushImg_1: file(relativePath: { eq: "shuush/shuush_1.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shuushImg_2: file(relativePath: { eq: "shuush/shuush_2.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shuushImg_3: file(relativePath: { eq: "shuush/shuush_3.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shuushImg_4: file(relativePath: { eq: "shuush/shuush_4.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shuushImg_5: file(relativePath: { eq: "shuush/shuush_5.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shuushImg_6: file(relativePath: { eq: "shuush/shuush_6.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shuushImg_7: file(relativePath: { eq: "shuush/shuush_7.webp" }) {
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
                title="Shuush App"
            />
            <TransitionPageIn>
                <div
                    className="w-full max-w-full mx-auto"
                    style={{ backgroundColor: "#f6f6f6" }}
                >
                    <Img
                        fluid={data.shuushImg_0.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                    <section className="w-8/12 max-w-screen-xl mx-auto text-blue-900 md:flex mt-10 mb-32">
                        <div className="md:w-4/12 mt-24">
                            <h4 className="font-bold uppercase">Description</h4>
                            <h4 className="pt-4">App design</h4>
                        </div>

                        <div className="md:w-7/12 mt-16 md:mt-0 md:pr-24">
                            <h2 className="mb-8 md:mb-6">Description</h2>
                            <p>
                                <span className="font-extrabold">Shuush!</span>{" "}
                                is a fun messaging app. Its fresh and friendly
                                design will help you keeping in contact with
                                your loved ones. The simple and intuitive user
                                interface will facilitate communications and
                                sharing.
                            </p>
                        </div>
                    </section>

                    <Img
                        fluid={data.shuushImg_1.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />

                    {/* <div className="w-9/12 max-w-screen-xl mx-auto text-black md:flex mt-32 mb-0">
                        <div className="md:w-4/12 mt-24">
                            <h4 className="font-bold uppercase">
                                Skills applied
                            </h4>
                            <h4 className="pt-4">
                                Strategy
                                <br /> Concept
                                <br /> UI Design
                                <br /> Product Design
                            </h4>
                        </div>
                        <div className="md:w-8/12 mt-16 md:mt-0 md:pr-24">
                            <h2 className="mb-8 md:mb-10">The concept</h2>
                            <p>
                                Shuuush is a fun and efficient messaging app.
                                Its clean and intuitive interface allows for a
                                fluid user experience.
                            </p>
                        </div>
                    </div> */}
                    <Img
                        fluid={data.shuushImg_2.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />
                    <Img
                        fluid={data.shuushImg_3.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />
                    <Img
                        fluid={data.shuushImg_4.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />
                    <Img
                        fluid={data.shuushImg_5.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />
                    <Img
                        fluid={data.shuushImg_6.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />
                    <Img
                        fluid={data.shuushImg_7.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Shuush;
