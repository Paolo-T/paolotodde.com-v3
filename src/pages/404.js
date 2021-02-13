import React from "react";
import SEO from "../components/Seo";
import { Link } from "gatsby";

function NotFoundPage() {
   return (
      <>
         <SEO
            keywords={[
               `UI Design`,
               `Product Design`,
               `Product Designer`,
               `Product Designer`,
               `Messaging App`,
               `App`,
               `UI Designer`,
               `Web Designer`,
               `Front-end Developer`,
               `Portfolio`,
               `Brighton`,
               `Uk`,
            ]}
            title="404: Not found"
         />
         <section className="w-11/12 md:w-10/12 lg:w-7/12 xl:w-8/12 max-w-screen-lg mx-auto pt-32 md:pt-24">
            <div className="ml-7 sm:ml-10 md:ml-10 lg:ml-20 xl:ml-20 2xl:ml-20 md:mt-32 lg:mt-10 md:mb-0 lg:mb-52 lg:pt-32">
               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl leading-none mb-20">
                  Looks like the page you are looking for is not here...
               </h1>

               <Link
                  className="inline-block bg-primary hover:bg-yellow-400 text-dark hover:text-offWhite
                     focus:outline-none transition duration-500 ease-in-out font-header text-2xl md:text-2xl mt-32 py-3
                     px-10 rounded"
                  to="/"
               >
                  Let's go home...
               </Link>
            </div>
         </section>
      </>
   );
}

export default NotFoundPage;
