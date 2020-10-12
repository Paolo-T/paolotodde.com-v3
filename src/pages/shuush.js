import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import InPageNav from "../components/InPageNav";

function Shuush() {
    const data = useStaticQuery(graphql`
        query {
            shuushImg_0: file(relativePath: { eq: "shuush/shuush_0.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }

            shuushImg_1: file(relativePath: { eq: "shuush/shuush_1.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            shuushImg_2: file(relativePath: { eq: "shuush/shuush_2.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            shuushImg_3: file(relativePath: { eq: "shuush/shuush_3.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            shuushImg_4: file(relativePath: { eq: "shuush/shuush_4.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            shuushImg_5: file(relativePath: { eq: "shuush/shuush_5.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            shuushImg_6: file(relativePath: { eq: "shuush/shuush_6.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            shuushImg_7: file(relativePath: { eq: "shuush/shuush_7.png" }) {
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
                    <div className="bg-blackPure">
                        <InPageNav width="12/12" />
                    </div>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Shuush;
