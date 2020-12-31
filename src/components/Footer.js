import React from "react";
import TransitionPageIn from "./TransitionPageIn";
import ScrollToTop from "../components/ScrollToTop";

function Footer() {
   return (
      <TransitionPageIn>
         <footer className="w-full max-w-screen-xxl mx-auto pb-10 md:pb-2s0 pt-8 md:pt-10">
            <ul className="w-10/12 md:w-8/12 max-w-screen-xl mx-auto flex flex-col md:flex-row text-center justify-between xlg:ml-32 md:pt-10 ">
               <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/paolo-todde/">
                  <li className="xl:inline-block text-1xl lg:text-4xl hover:text-primary transition duration-500 hover:underline ease-in-out mb-3 md:mb-0">
                     LinkedIn
                  </li>
               </a>
               <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/paolo_tde/">
                  <li className="xl:inline-block text-1xl lg:text-4xl hover:text-primary transition duration-500 hover:underline ease-in-out mb-3 md:mb-0">
                     Instagram
                  </li>
               </a>
               <a rel="noopener noreferrer" target="_blank" href="https://github.com/Paolo-T">
                  <li className="xlg:inline-block text-1xl lg:text-4xl  hover:text-primary transition duration-500 hover:underline ease-in-out mb-3 md:mb-0">
                     Github
                  </li>
               </a>
               <a target="_parent" rel="noopener noreferrer" href="mailto:iampaolotodde@gmail.com">
                  <li className="xlg:inline-block text-1xl lg:text-4xl  hover:text-primary transition duration-500 hover:underline ease-in-out mb-3 md:mb-0">
                     Email
                  </li>
               </a>
               <li>
                  <ScrollToTop showBelow="250" />
               </li>
            </ul>
         </footer>
      </TransitionPageIn>
   );
}

export default Footer;
