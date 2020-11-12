import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";
import InPageNav from "../components/InPageNav";

function petTime({ location }) {
    const data = useStaticQuery(graphql`
        query {
            petTime_1: file(relativePath: { eq: "petTime/petTime_1.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            petTime_2: file(relativePath: { eq: "petTime/petTime_2.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            petTime_3: file(relativePath: { eq: "petTime/petTime_3.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            petTime_4: file(relativePath: { eq: "petTime/petTime_4.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            petTime_5: file(relativePath: { eq: "petTime/petTime_5.png" }) {
                id
                childImageSharp {
                    fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            petTime_6: file(relativePath: { eq: "petTime/petTime_6.png" }) {
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
                title="Portfolio page PetTime App"
            />

            <div className="w-12/12 mx-auto bg-blackPure">
                <TransitionPageIn>
                    <Img
                        fluid={data.petTime_1.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />
                    <div className="w-full bg-white pt-10 pb-20 md:py-32">
                        <section className="w-11/12 md:w-8/12 mx-auto text-black md:flex ">
                            <div className="md:w-4/12 mt-0 hidden md:block md:mt-20">
                                <h4 className="font-extrabold uppercase tracking-widest">
                                    Description
                                </h4>
                                <h4 className="pt-4">App design</h4>
                            </div>

                            <div className="md:w-7/12 mt-10 md:mt-0 pr-0 md:pr-24">
                                <h2 className="mb-4 md:mb-8">Description</h2>
                                <p>
                                    <span className="font-extrabold">
                                        Pet Time
                                    </span>{" "}
                                    is a fun and friendly managing app for
                                    animal lovers. Whether you are experts or
                                    enthusiastic newbies, you'll find plenty of
                                    learning resources to help taking care of
                                    your pet friends.
                                    {/* <span className="font-extrabold">Pet Time</span>{" "}
                                provides a dedicated section for interesting
                                articles, news, podcasts, learning resources. A
                                section to help finding pet friendly locations
                                and facilities. The UI will be user friendly and
                                easy to navigate. All resources will be easy to
                                access and quick to find. */}
                                </p>
                            </div>
                        </section>

                        <section className="w-11/12 md:w-8/12 mx-auto text-black md:flex mt-16 mb-0">
                            <div className="hidden md:block md:w-4/12 mt-0 md:mt-20">
                                <h4 className="font-extrabold uppercase tracking-widest">
                                    Skills applied
                                </h4>
                                <h4 className="pt-4">
                                    Strategy
                                    <br /> Concept
                                    <br /> UI Design
                                    <br /> Product Design
                                </h4>
                            </div>
                            <div className="w-11/12 md:w-8/12 mt-16 md:mt-0 pr-0 md:pr-24">
                                <h2 className="mb-4 md:mb-8">The brief</h2>
                                <p>
                                    The app is for those passionate about
                                    pets,and who want to learn more about
                                    domestic animals.
                                    <br />
                                    The target customers are the curious newbie
                                    who has, so far, lacked a convenient
                                    opportunity to educate themselves on the
                                    topic, and the long-standing aficionado
                                    who’s looking for a high-quality,
                                    comprehensive app to teach them how to take
                                    care of their beloved pets, plus related
                                    content to enjoy on the go.
                                    <br />
                                    <br />
                                    The app monetizes through subscriptions.
                                    Some content and features are free for all
                                    users, while others are reserved for
                                    subscribers.
                                    <br />
                                    <br />
                                    There are four sections: <br />
                                    <br />• &nbsp; DISCOVER. The User are
                                    recommended content.
                                    <br />• &nbsp; MAPS. The User can find pet
                                    shops, veterinary clinics, and so on.
                                    <br />
                                    ​• &nbsp; LEARN. The User can follow an
                                    educational track and test their knowledge
                                    on pets
                                    <br />• &nbsp; ​PROFILE​. This includes the
                                    User's history of content consumption, their
                                    favourites, their achievements, and some
                                    settings.
                                    <br />
                                    <br />
                                    The main navigation between sections may
                                    happen through a tab bar UI, or another
                                    system of your choosing.
                                </p>
                            </div>
                        </section>
                        <section className="w-11/12 md:w-8/12 mx-auto text-black md:flex mt-16 mb-0">
                            <div className="hidden md:block md:w-4/12 mt-0 md:mt-20">
                                <h4 className="font-extrabold uppercase tracking-widest">
                                    Problem
                                </h4>
                            </div>
                            <div className="w-11/12 md:w-8/12 mt-16 md:mt-0 pr-0 md:pr-24">
                                <h2 className="mb-4 md:mb-8">The problem</h2>
                                <p>
                                    Pet owners need a resource to help looking
                                    after their pet friends and making sure they
                                    are happy and pampered. They need a hub to
                                    gather educational material such as
                                    articles, blog posts, podcasts as well as
                                    information on the best vets in the area,
                                    the best pet friendly shops, pet friendly
                                    shops and cafes.
                                    <br />
                                    The curious newbie and aficionados looking
                                    for a high-quality, comprehensive app to
                                    teach them how to take care of their beloved
                                    pets. The app is for those passionate about
                                    pets, and who want to learn more about
                                    domestic animals.
                                </p>
                            </div>
                        </section>
                        <section className="w-11/12 md:w-8/12 mx-auto text-black md:flex mt-16 mb-0">
                            <div className="hidden md:block md:w-4/12 mt-0 md:mt-20">
                                <h4 className="font-extrabold uppercase tracking-widest">
                                    Solution
                                </h4>
                            </div>
                            <div className="w-11/12 md:w-8/12 mt-16 md:mt-0 pr-0 md:pr-24">
                                <h2 className="mb-4 md:mb-8">The solution</h2>
                                <p>
                                    An app that provides a dedicated section for
                                    interesting articles, news, podcasts,
                                    learning resources. A section to help
                                    finding pet friendly locations and
                                    facilities. The UI will be user friendly and
                                    easy to navigate. All resources will be easy
                                    to access and quick to find.
                                </p>
                            </div>
                        </section>
                        <section className="w-11/12 md:w-8/12 mx-auto text-black md:flex mt-16 mb-0">
                            <div className="hidden md:block md:w-4/12 mt-0 md:mt-20">
                                <h4 className="font-extrabold uppercase tracking-widest">
                                    Flow
                                </h4>
                            </div>
                            <div className="w-11/12 md:w-8/12 mt-16 md:mt-0 pr-0 md:pr-24">
                                <h2 className="mb-4 md:mb-8">User Flow</h2>
                                <p>
                                    After the initial Log in / Sign Up, the user
                                    is presented with the Home screen where they
                                    can browse the most important topics
                                    regarding the care of their beloved pets.
                                    After choosing their subject of interest,
                                    they are presented with all the available
                                    resources and content focused on that
                                    particular topic. Some of the content is
                                    free and some is "Premium" that requires a
                                    paid subscription to access. If the user is
                                    not yet subscribed, is directed to a paywall
                                    where they can subscribe before accessing
                                    the Premium content.
                                </p>
                            </div>
                        </section>
                    </div>
                    <section className="w-12/12 mx-auto bg-blackPure mt-20 px-0 md:px-50 py-24">
                        <Img
                            fluid={data.petTime_6.childImageSharp.fluid}
                            className=""
                            loading="eager"
                            alt="App screen"
                        />
                    </section>

                    <Img
                        fluid={data.petTime_2.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />
                    <Img
                        fluid={data.petTime_3.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />
                    <Img
                        fluid={data.petTime_4.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />
                    <Img
                        fluid={data.petTime_5.childImageSharp.fluid}
                        className=""
                        loading="eager"
                        alt="App screen"
                    />
                    <div className="bg-blackPure">
                        <InPageNav />
                    </div>
                </TransitionPageIn>
            </div>
        </>
    );
}

export default petTime;
