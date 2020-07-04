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
                        />
                    ))}
                </div>
            </TransitionPageIn>
        </>
    );
}

{
    /* <div className="grid sm:grid-cols-2 gap-6 py-8">
    <img src={classica_6} />
    <img src={classica_7} />
    <img src={classica_8} />
    <img src={classica_9} />
</div> */
}

export default Classica;
