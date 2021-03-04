import React from "react";
import SEO from "../components/Seo";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import ImgNavTiles from "../components/ImgNavTiles";
// import Carousel from "../components/carousel/Carousel";

function Home() {
   return (
      <>
         <SEO
            keywords={[
               `UI Designer`,
               `Web Designer`,
               `Product Designer`,
               `Front-end Developer`,
               `Portfolio`,
               `Brighton`,
               `Uk`,
            ]}
            title="Home"
         />
         <TransitionPageIn>
            <div className="w-full relative">
               {/* <Carousel /> */}
               <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-9/12 max-w-screen-lg mx-auto pt-32 md:pt-24 z-100">
                  <TransitionInview>
                     <h1
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-8xl ml-7 sm:ml-16 md:ml-20 lg:ml-20 xl:ml-32 2xl:ml-24
                        md:mt-32 lg:mt-10
                        md:mb-0 lg:mb-10
                        lg:pt-32"
                        style={{ lineHeight: "0.97" }}
                     >
                        Hi, I’m{" "}
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/paolo-todde/">
                           <span className="hover:text-primary transition duration-500 cursor-pointer"> Paolo.</span>
                        </a>
                        <br />
                        <span className="inline text-primary">UI Designer</span> <span className="inline">&</span>
                        <br />
                        <span className="inline">front-end</span> <span className="inline text-primary">coder</span>.
                     </h1>
                  </TransitionInview>

                  <div className="mb-5 mt-4 md:my-20">
                     <ImgNavTiles />
                  </div>
               </div>
            </div>
         </TransitionPageIn>
      </>
   );
}

export default Home;
