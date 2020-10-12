import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import InPageNav from "../components/InPageNav";

function Classica() {
    const data = useStaticQuery(graphql`
        query {
            classicaImg_1: file(
                relativePath: { eq: "classica/classica_1.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_2: file(
                relativePath: { eq: "classica/classica_2.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_3: file(
                relativePath: { eq: "classica/classica_3.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_4: file(
                relativePath: { eq: "classica/classica_4.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_5: file(
                relativePath: { eq: "classica/classica_5.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_6: file(
                relativePath: { eq: "classica/classica_6.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_7: file(
                relativePath: { eq: "classica/classica_7.png" }
            ) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            classicaImg_8: file(
                relativePath: { eq: "classica/classica_8.png" }
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
                title="Classica App"
            />
            <TransitionPageIn>
                <div className="w-full max-w-full mx-auto bg-blackPure pt-32">
                    <Img
                        fluid={data.classicaImg_1.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                    <section className="w-full max-w-screen-xl bg-white">
                        <div className="w-8/12  mx-auto md:flex pt-32 mb-0">
                            <div className="md:w-4/12 mt-24">
                                <h4 className="font-bold uppercase">
                                    Description
                                </h4>
                                <h4 className="pt-4">App design</h4>
                            </div>

                            <div className="md:w-7/12 mt-16 md:mt-0 md:pr-24">
                                <h2 className="mb-8 md:mb-6">Description</h2>
                                <p>
                                    <span className="font-extrabold">
                                        Classica
                                    </span>{" "}
                                    is a fun and friendly app for the classical
                                    music lovers. Whether they are seasoned
                                    aficionados or enthusiastic newbies, they'll
                                    find plenty of learning material to support
                                    their listening experience.
                                </p>
                            </div>
                        </div>

                        <div className="w-8/12 max-w-screen-xl mx-auto md:flex mt-16 mb-0">
                            <div className="md:w-4/12 mt-24">
                                <h4 className="font-bold uppercase">
                                    Skills applied
                                </h4>
                                <h4 className="pt-4">
                                    Strategy
                                    <br /> Concept
                                    <br /> Product Design
                                    <br /> UI Design
                                </h4>
                            </div>

                            <div className="md:w-7/12 mt-16 md:mt-0 md:pr-24">
                                <h2 className="mb-8 md:mb-6">The brief</h2>
                                <p>
                                    You’re asked to design some materials for a
                                    mobile app to be run on smartphones only.
                                    Here some information on the app itself: The
                                    app is for listening to and learning about
                                    classical music.
                                    <br />
                                    The app monetizes through subscriptions.
                                    Some of the content and features are free
                                    for all users, while some are reserved to
                                    subscribers.
                                    <br />
                                    <br />
                                    The target customers are the newbie with
                                    curiosity for the topic, but that so far has
                                    lacked a convenient opportunity to educate
                                    themselves on it; and the long-standing
                                    aficionado that’s looking for a
                                    high-quality, comprehensive library of
                                    classical music and related content to enjoy
                                    on the go.
                                    <br />
                                    <br />
                                    There are four divs: <br />
                                    <br />• &nbsp; DISCOVER. Here users are
                                    recommended content,​
                                    <br />• &nbsp; SEARCH​. Here they can search
                                    for content,
                                    <br />
                                    ​• &nbsp; LEARN. Users can follow an
                                    educational track and test their knowledge,
                                    <br />• &nbsp; ​PROFILE​. This includes
                                    their history of content consumption, their
                                    favorites, their achievements, and some
                                    settings.
                                    <br />
                                    <br />
                                    The main navigation between sections may
                                    happen through a tab bar UI.
                                </p>
                            </div>
                        </div>

                        <div className="w-8/12 mx-auto md:flex mt-16 mb-0">
                            <div className="md:w-4/12 mt-24">
                                <h4 className="font-bold uppercase">Problem</h4>
                            </div>
                            <div className="md:w-8/12 mt-16 md:mt-0 md:pr-24">
                                <h2 className="mb-8 md:mb-6">The problem</h2>
                                <p>
                                    The need for a comprehensive resource hub to
                                    satisfy the curiosity of the classical music
                                    enthusiasts.
                                    <br />A place for the curious newbie
                                    searching for high-quality learning
                                    resources, discover interesting content to
                                    learn about the classical music world. A hub
                                    for the expert to dig deep into the details
                                    of their passion subject, discover new music
                                    and enjoy the classics.
                                </p>
                            </div>
                        </div>

                        <div className="w-8/12 mx-auto md:flex mt-16 pb-32">
                            <div className="md:w-4/12 mt-24">
                                <h4 className="font-bold uppercase">
                                    Solution
                                </h4>
                            </div>
                            <div className="md:w-8/12 mt-16 md:mt-0 md:pr-24">
                                <h2 className="mb-8 md:mb-6">The solution</h2>
                                <p>
                                    An app that besides the excellent music
                                    player, provides a learning center to access
                                    articles, podcasts, blogs and relevevant
                                    personalities in the field.
                                </p>
                            </div>
                        </div>
                    </section>
                    <Img
                        fluid={data.classicaImg_2.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />

                    <Img
                        fluid={data.classicaImg_3.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />

                    <Img
                        fluid={data.classicaImg_4.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />

                    <Img
                        fluid={data.classicaImg_5.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />

                    <Img
                        fluid={data.classicaImg_7.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />
                    <div className="lg:w-9/12 mx-auto">
                        <InPageNav />
                    </div>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Classica;
