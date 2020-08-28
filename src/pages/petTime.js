import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";

function petTime() {
    const data = useStaticQuery(graphql`
        query petTime {
            petTime_1: file(relativePath: { eq: "petTime/petTime_1.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            petTime_2: file(relativePath: { eq: "petTime/petTime_2.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            petTime_3: file(relativePath: { eq: "petTime/petTime_3.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            petTime_4: file(relativePath: { eq: "petTime/petTime_4.webp" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            petTime_5: file(relativePath: { eq: "petTime/petTime_5.webp" }) {
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
                title="Shuush"
            />
            <TransitionPageIn>
                <div className="w-full max-w-full mx-auto bg-blackPure">
                    <Img
                        fluid={data.petTime_1.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />

                    <div className="w-9/12 max-w-screen-xl mx-auto text-white md:flex mt-16 mb-0">
                        <div className="flex-2 mt-24">
                            <h4 className="font-bold uppercase">
                                Skills applied
                            </h4>
                            <h4 className="pt-4">
                                Strategy
                                <br /> Concept
                                <br /> Product
                                <br /> Design
                                <br /> UI Design
                            </h4>
                        </div>
                        <div className="flex-3 mt-16 md:mt-0 md:pl-48 md:pr-24">
                            <h2 className="mb-8 md:mb-10">The brief</h2>
                            <p>
                                You’re asked to design some materials for a
                                mobile app to be run on smartphones only. Here
                                some information on the app itself: The app is
                                for listening to and learning about classical
                                music.
                                <br />
                                The app monetizes through subscriptions. Some of
                                the content and features are free for all users,
                                while some are reserved to subscribers.
                                <br />
                                <br />
                                The target customers are the newbie with
                                curiosity for the topic, but that so far has
                                lacked a convenient opportunity to educate
                                themselves on it; and the long-standing
                                aficionado that’s looking for a high-quality,
                                comprehensive library of classical music and
                                related content to enjoy on the go.
                                <br />
                                <br />
                                There are four sections: <br />
                                <br />• &nbsp; DISCOVER. Here users are
                                recommended content,​
                                <br />• &nbsp; SEARCH​. Here they can search for
                                content,
                                <br />
                                ​• &nbsp; LEARN. Users can follow an educational
                                track and test their knowledge,
                                <br />• &nbsp; ​PROFILE​. This includes their
                                history of content consumption, their favorites,
                                their achievements, and some settings.
                                <br />
                                <br />
                                The main navigation between sections may happen
                                through a tab bar UI.
                            </p>
                        </div>
                    </div>
                    <Img
                        fluid={data.petTime_2.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                    <Img
                        fluid={data.petTime_3.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                    <Img
                        fluid={data.petTime_4.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                    <Img
                        fluid={data.petTime_5.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default petTime;
