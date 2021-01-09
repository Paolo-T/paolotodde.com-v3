import React from "react";
import TransitionPageIn from "./TransitionPageIn";
import ScrollToTop from "../components/ScrollToTop";

const footerItems = [
   {
      item: "LinkedIn",
      href: "https://www.linkedin.com/in/paolo-todde/",
   },
   {
      item: "Instagram",
      href: "https://www.instagram.com/roomzeroone/",
   },
   {
      item: "Github",
      href: "https://github.com/Paolo-T",
   },
   {
      item: "Email",
      href: "mailto:iampaolotodde@gmail.com",
   },
];

function Footer() {
   return (
      <TransitionPageIn>
         <footer className="w-full max-w-screen-xxl mx-auto pb-10 md:pb-20 pt-8 md:pt-10">
            <ul className="w-6/12 md:w-8/12 max-w-screen-xl mx-auto flex flex-col md:flex-row text-center justify-between xlg:ml-32 md:pt-10 ">
               {footerItems.map((item, i) => (
                  <a key={i} rel="noopener noreferrer" target="_blank" href={item.href}>
                     <li className="xl:inline-block text-1xl lg:text-4xl hover:text-primary  hover:border-b-2 hover:border-primary transition duration-300 ease-in-out mb-3 md:mb-0">
                        {item.item}
                     </li>
                  </a>
               ))}
               <li>
                  <ScrollToTop showBelow="250" />
               </li>
            </ul>
         </footer>
      </TransitionPageIn>
   );
}

export default Footer;
