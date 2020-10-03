import React from "react";
import SEO from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionPageIn from "../components/TransitionPageIn";

function Three() {
    const data = useStaticQuery(graphql`
        query threeImages {
            threeImages: allFile(
                filter: { relativeDirectory: { eq: "three" } }
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
                title="Three"
            />
            <TransitionPageIn>
                <div className="w-full max-w-full mx-auto ">
                    {data.threeImages.nodes.map((image) => (
                        <Img
                            key={image.id}
                            fluid={image.childImageSharp.fluid}
                            loading="eager"
                        />
                    ))}
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Three;
