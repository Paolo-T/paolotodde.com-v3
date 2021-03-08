import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

function ImgTile({
   inProgress,
   linkTo,
   label,
   title,
   subTitle,
   tileImg,
   imgAlt,
   marginTop,
   marginBottom,
   rounded,
   isPageNav,
}) {
   return (
      <>
         <Link to={linkTo}>
            <div
               className={`group w-full relative transition duration-500 transform text-center
               ${inProgress ? null : "hover:scale-95 cursor-pointer"}
               md:mt-${marginTop} md:mb-${marginBottom}
               rounded-${rounded ? rounded : 0} overflow-hidden`}
            >
               <div
                  className="w-full text-primary absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{
                     top: "50%",
                     left: "50%",
                     transform: "translate(-50%, -50%)",
                  }}
               >
                  {!isPageNav ? (
                     <>
                        <p className="text-sm md:text-xl md:mt-2 uppercase tracking-wider">{label}</p>
                        <h1 className="mb-0 md:mb-1 text-5xl md:text-6xl lg:text-8xl">{title}</h1>
                        <p className="text-base md:text-3xl md:mt-2">{subTitle}</p>
                     </>
                  ) : null}
               </div>

               <div className="bg-dark absolute inset-0 z-40 opacity-0 group-hover:opacity-90 transition-all duration-500"></div>

               <Img fluid={tileImg} alt={imgAlt} loading="eager" />
            </div>
            {console.log("Progress", inProgress)}
         </Link>
      </>
   );
}

export default ImgTile;
