import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
                                fluid(maxWidth: 2280) {
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

export default ImgSlider;
