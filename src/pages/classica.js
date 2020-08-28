import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";

function Classica() {
    const data = useStaticQuery(graphql`
        query classicaImages {
            classicaImages: allFile(
                filter: {
                    relativeDirectory: { eq: "classica" }
                    name: { ne: "classica__tile" }
                }
                sort: { order: ASC, fields: name }
            ) {
                nodes {
                    id
                    childImageSharp {
                        fluid(maxWidth: 2880) {
                            ...GatsbyImageSharpFluid
                        }
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
                <div className="w-full max-w-full mx-auto ">
                    {data.classicaImages.nodes.map((image) => (
                        <Img
                            key={image.id}
                            fluid={image.childImageSharp.fluid}
                            className="-mt-1"
                            loading="eager"
                        />
                    ))}

                    <div class="w-9/12 max-w-screen-xl mx-auto md:flex my-32">
                        <div class="flex-2 mt-24">
                            <h4 class="font-bold uppercase">Skills applied</h4>
                            <h4 class="pt-4">
                                Strategy Concept Product Design UI Design
                                Prototyping.
                            </h4>
                        </div>
                        <div class="flex-3 pl-48 pr-24">
                            <h2 class="mb-10">The brief</h2>
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
                                content),
                                <br />
                                ​• &nbsp; LEARN. This is where users can follow
                                an educational track and test their knowledge,
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
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Classica;
