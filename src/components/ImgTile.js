import React from "react";
import { Link } from "gatsby";
import { useSpring, animated, config } from "react-spring";
import Img from "gatsby-image";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 80, (x - window.innerWidth / 2) / 80, 0.96];
const trans = (x, y, s) => `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function ImgTile({ linkTo, href, title, subTitle, cta, tileImg, imgAlt, marginTop, marginBottom, rounded, isPageNav }) {
   const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 150, friction: 30 } }));

   return (
      <>
         {linkTo ? (
            <Link to={linkTo}>
               <animated.div
                  onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  style={{ transform: props.xys.interpolate(trans) }}
                  className={`group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 text-center overflow-hidden  md:mt-${marginTop} md:mb-${marginBottom} rounded-${
                     rounded ? rounded : 0
                  } `}
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
                           <h1 className="mb-0 md:mb-1 text-4xl md:text-6xl lg:text-9xl">{title}</h1>
                           <p className="text-xs md:text-2xl md:mt-2">{subTitle}</p>
                        </>
                     ) : null}
                     {/* <p
                        className="absolute z-100 text-xs md:text-2xl text-primary leading-6 border-2 border-primary px-4 py-2 rounded md:rounded "
                        style={{
                           top: "130%",
                           left: "50%",
                           transform: "translate(-50%, -50%)",
                        }}
                     >
                        {cta}
                     </p> */}
                  </div>

                  <div className="bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"></div>

                  <Img fluid={tileImg} alt={imgAlt} loading="eager" />
               </animated.div>
            </Link>
         ) : (
            <a href={href} target="_blank">
               <animated.div
                  onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  style={{ transform: props.xys.interpolate(trans) }}
                  className={`group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 text-center overflow-hidden  md:mt-${marginTop} md:mb-${marginBottom} rounded-${
                     rounded ? rounded : 0
                  } `}
               >
                  <div
                     className="w-full text-primary absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500"
                     style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                     }}
                  >
                     {!isPageNav && (
                        <>
                           <h1 className="mb-0 md:mb-1 text-4xl md:text-6xl lg:text-9xl">{title}</h1>
                           <p className="text-xs md:text-2xl md:mt-2">{subTitle}</p>
                        </>
                     )}
                  </div>
                  <div className="bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"></div>
                  <Img fluid={tileImg} alt={imgAlt} loading="eager" />
               </animated.div>
            </a>
         )}
      </>
   );
}

export default ImgTile;
