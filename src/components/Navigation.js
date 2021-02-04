import React from "react";
import logo from "../images/logo.svg";
import { Link } from "gatsby";

function Navigation() {
   const pageLocation = typeof window !== "undefined" ? window.location.pathname : "";
   const aboutPage = pageLocation === "/about";

   return (
      <header className="w-full fixed bg-transparent z-10">
         <nav className="w-10/12 md:w-7/12 max-w-screen-lg mx-auto flex justify-between pt-12 md:pt-24">
            <Link to="/">
               <img className="w-8 md:w-8" src={logo} alt="nasa-logo" />
            </Link>

            <Link to={aboutPage ? "/" : "/about"}>
               <div className="group flex">
                  <p className="text-xl md:text-2xl text-primary transition duration-300 hover:border-b-2 hover:border-primary hover:ml-2 pt-3 mt-0.5 md:pt-2 align-baseline">
                     {aboutPage ? "Home" : "About"}
                  </p>
               </div>
            </Link>
         </nav>
      </header>
   );
}

export default Navigation;
