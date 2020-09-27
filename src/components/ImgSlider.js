import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import BackgroundSlider from "gatsby-image-background-slider";

const ImgSlider = ({ children }) => (
    <>
        <main>{children}</main>
        <BackgroundSlider
            query={useStaticQuery(graphql`
                query {
                    backgrounds: allFile(
                        filter: { sourceInstanceName: { eq: "backgrounds" } }
                    ) {
                        nodes {
                            relativePath
                            childImageSharp {
                                fluid(maxWidth: 4000, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            `)}
        />
    </>
);

console.log(ImgSlider);

export default ImgSlider;
