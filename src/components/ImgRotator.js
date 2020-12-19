import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import TransitionInview from "../components/TransitionInview";

function ImgRotator() {
   const imageData = useStaticQuery(graphql`
      query {
         allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, relativeDirectory: { eq: "rotator" } }) {
            edges {
               node {
                  id
                  childImageSharp {
                     fluid(maxWidth: 2880) {
                        ...GatsbyImageSharpFluid_withWebp
                     }
                  }
               }
            }
         }
      }
   `);

   // useEffect(() => console.log("Images: ", images), [images]);
   // useEffect(() => console.log("displayImage: ", displayImage), [displayImage]);

   const allImages = imageData.allFile.edges;
   const [currentImage, setCurrentImage] = useState({});
   let [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentImage(allImages[currentIndex].node.childImageSharp.fluid);
         currentIndex == allImages.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex++);
      }, 200);
      return () => clearInterval(interval);
   }, [currentIndex]);
   useEffect(() => console.log("curren image: ", currentImage), [currentImage]);

   return (
      <TransitionInview>
         <div className="mt-20 mb-5 md:mb-0 rounded-lg overflow-hidden">
            <Img fluid={currentImage} alt="" loading="eager" />
         </div>
      </TransitionInview>
   );
}

export default ImgRotator;
