import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";

function petTime() {
    const data = useStaticQuery(graphql`
        query petTimeImages {
            petTimeImages: allFile(
                filter: {
                    relativeDirectory: { eq: "petTime" }
                    name: { ne: "petTime__tile" }
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
                    {data.petTimeImages.nodes.map((image) => (
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

export default petTime;