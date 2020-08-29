import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";

function Shuush() {
    const data = useStaticQuery(graphql`
        query shuushImages {
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
                        fluid={data.shuushImg_1.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />

                    <div className="w-9/12 max-w-screen-xl mx-auto text-black md:flex mt-32 mb-0">
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
                                The app is for those passionate about pets, and
                                who want to learn more about domestic animals.
                                <br />
                                The target customers are the curious newbie who
                                has, so far, lacked a convenient opportunity to
                                educate themselves on the topic, and the
                                long-standing aficionado who’s looking for a
                                high-quality, comprehensive app to teach them
                                how to take care of their beloved pets, plus
                                related content to enjoy on the go.
                                <br />
                                <br />
                                The app monetizes through subscriptions. Some
                                content and features are free for all users,
                                while others are reserved for subscribers.
                                <br />
                                <br />
                                There are four sections: <br />
                                <br />• &nbsp; DISCOVER. The User are
                                recommended content.
                                <br />• &nbsp; MAPS. The User can find pet’s
                                shops, veterinary clinics, and so on.
                                <br />
                                ​• &nbsp; LEARN. The User can follow an
                                educational track and test their knowledge on
                                pets
                                <br />• &nbsp; ​PROFILE​. This includes the
                                User's history of content consumption, their
                                favourites, their achievements, and some
                                settings.
                                <br />
                                <br />
                                The main navigation between sections may happen
                                through a tab bar UI, or another system of your
                                choosing.
                            </p>
                        </div>
                    </div>
                    <Img
                        fluid={data.shuushImg_2.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                    <Img
                        fluid={data.shuushImg_3.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                    <Img
                        fluid={data.shuushImg_4.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                    <Img
                        fluid={data.shuushImg_5.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                    <Img
                        fluid={data.shuushImg_6.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                    <Img
                        fluid={data.shuushImg_7.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Shuush;
