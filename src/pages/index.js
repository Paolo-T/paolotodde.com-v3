import React from "react";
import SEO from "../components/Seo";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import Tiles from "../components/Tiles";

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
            <div className="w-screen bg-ImageHomeBg sm:bg-ImageHomeBg__sm md:bg-ImageHomeBg__md lg:bg-ImageHomeBg__lg xl:bg-ImageHomeBg__xl cover bg-no-repeat">
               <div className="w-10/12 md:w-10/12 mx-auto pt-40 md:pt-30">
                  <TransitionInview>
                     <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl ml-0 sm:ml-10 md:ml-24 lg:pl-20 md:mt-10 lg:mt-4 md:mb-0 lg:pt-32 lg:mb-24">
                        Hello, I’m{" "}
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/paolo-todde/">
                           <span className="hover:text-primary hover:underline transition duration-500 cursor-pointer">
                              {" "}
                              Paolo.
                           </span>
                        </a>
                        <br />
                        <span className="inline text-primary">Designer</span> <span className="inline">and</span>
                        <br />
                        <span className="inline">front-end</span> <span className="inline text-primary">coder</span>.
                     </h1>
                  </TransitionInview>

                  <div className="mb-5 mt-4 md:my-20">
                     <Tiles isPageNav={false} />
                  </div>

                  <section className="text-center mt-20 md:mb-10">
                     <a target="_parent" rel="noopener noreferrer" href="mailto:iampaolotodde@gmail.com">
                        <button
                           type="button"
                           className="inline-block bg-primary hover:bg-yellow-600 hover:text-white focus:outline-none transition duration-500 ease-in-out font-header text-2xl md:text-4xl py-3 px-12 rounded"
                        >
                           Contact
                        </button>
                     </a>
                  </section>
               </div>
            </div>
         </TransitionPageIn>
      </>
   );
}

export default Home;
