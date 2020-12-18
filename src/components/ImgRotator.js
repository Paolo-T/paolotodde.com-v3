import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

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

   const allImages = imageData.allFile.edges;
   const [images] = useState(allImages);
   const [displayImage, setdisplayImage] = useState(imageData.allFile.edges[0].node.childImageSharp.fluid);

   // useEffect(() => console.log("Images: ", images), [images]);
   // useEffect(() => console.log("displayImage: ", displayImage), [displayImage]);

   useEffect(() => {
      const interval = setInterval(() => {
         let counter = 0;
         // for (var i = 0; i < images.length; i++) {
         //    counter === images.length ? (counter = 0) : counter++;
         //    // console.log("Images: ", images[i]);
         //    console.log("Counter: ", counter);
         // }
      }, 1000);
      return () => clearInterval(interval);
   }, [displayImage]);

   return <Img fluid={displayImage} alt="" loading="eager" />;
}

export default ImgRotator;

//    const [image] = useState(["https://picsum.photos/200/300/?image=523", "https://picsum.photos/200/300/?image=524"]);
//    const [selectedImage, setSelectedImage] = useState("https://picsum.photos/200/300/?image=523");

//    // useEffect(() => console.log("Image: ", image), [image]);
//    // useEffect(() => console.log("selectedImage: ", selectedImage), [selectedImage]);

//    useEffect(() => {
//       const interval = setInterval(() => {
//          selectedImage === image[0] ? setSelectedImage(image[1]) : setSelectedImage(image[0]);
//       }, 1000);
//       // console.log("image: ", selectedImage);
//       // console.log("image: ", image[0]);
//       return () => clearInterval(interval);
//    }, [selectedImage]);

//    return <img src={selectedImage} alt={"images"} />;
// }

// export default ImgRotator;
