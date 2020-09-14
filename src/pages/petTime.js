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
            petTime_6: file(relativePath: { eq: "petTime/petTime_6.webp" }) {
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
                title="PetTime App"
            />
            <TransitionPageIn>
                <div className="w-full max-w-full mx-auto bg-blackPure">
                    <Img
                        fluid={data.petTime_1.childImageSharp.fluid}
                        className=""
                        loading="eager"
                    />

                    <section className="w-9/12 mx-auto text-white md:flex mt-16 mb-0">
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
                            <h2 className="mb-8 md:mb-6 text-yellow-500">
                                The brief
                            </h2>
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
                                <br />• &nbsp; MAPS. The User can find pet
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
                    </section>
                    <section className="w-9/12 mx-auto text-white md:flex mt-16 mb-0">
                        <div className="md:w-4/12 mt-24">
                            <h4 className="font-bold uppercase">Problem</h4>
                        </div>
                        <div className="md:w-8/12 mt-16 md:mt-0 md:pr-24">
                            <h2 className="mb-8 md:mb-6 text-yellow-500">
                                The problem
                            </h2>
                            <p>
                                Pet owners need a resource to help looking after
                                their pet friends and making sure they are happy
                                and pampered. They need a hub to gather
                                educational material such as articles, blog
                                posts, podcasts as well as information on the
                                best vets in the area, the best pet friendly
                                shops, pet friendly shops and cafes.
                                <br />
                                The curious newbie and aficionados looking for a
                                high-quality, comprehensive app to teach them
                                how to take care of their beloved pets. The app
                                is for those passionate about pets, and who want
                                to learn more about domestic animals.
                            </p>
                        </div>
                    </section>
                    <section className="w-9/12 mx-auto text-white md:flex mt-16 mb-0">
                        <div className="md:w-4/12 mt-24">
                            <h4 className="font-bold uppercase">Solution</h4>
                        </div>
                        <div className="md:w-8/12 mt-16 md:mt-0 md:pr-24">
                            <h2 className="mb-8 md:mb-6 text-yellow-500">
                                The solution
                            </h2>
                            <p>
                                An app that provides a dedicated section for
                                interesting articles, news, podcasts, learning
                                resources. A section to help finding pet
                                friendly locations and facilities. The UI will
                                be user friendly and easy to navigate. All
                                resources will be easy to access and quick to
                                find.
                            </p>
                        </div>
                    </section>
                    <section className="w-9/12 mx-auto text-white md:flex mt-16 mb-0">
                        <div className="md:w-4/12 mt-24">
                            <h4 className="font-bold uppercase">Flow</h4>
                        </div>
                        <div className="md:w-8/12 mt-16 md:mt-0 md:pr-24">
                            <h2 className="mb-8 md:mb-6 text-yellow-500">
                                User Flow
                            </h2>
                            <p>
                                After the initial Log in / Sign Up, the user is
                                presented with the Home screen where they can
                                browse the most important topics regarding the
                                care of their beloved pets. After choosing their
                                subject of interest, they are presented with all
                                the available resources and content focused on
                                that particular topic. Some of the content is
                                free and some is "Premium" that requires a paid
                                subscription to access. If the user is not yet
                                subscribed, is directed to a paywall where they
                                can subscribe before accessing the Premium
                                content.
                            </p>
                        </div>
                    </section>
                    <section className="w-9/12 mx-auto my-20">
                        <Img
                            fluid={data.petTime_6.childImageSharp.fluid}
                            className=""
                            loading="eager"
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
                </div>
            </TransitionPageIn>
        </>
    );
}

export default petTime;
