import React from "react";
import logo from "../images/logo.svg";
import { Link } from "gatsby";

function Navigation() {
   const pageLocation = typeof window !== "undefined" ? window.location.pathname : "";
   const aboutPage = pageLocation === "/about";

   return (
      <header className="w-full fixed bg-transparent z-10">
         <nav className="w-10/12 md:w-8/12 max-w-screen-xl mx-auto flex justify-between pt-12 md:pt-24">
            <Link to="/">
               <img className="w-8 md:w-8" src={logo} alt="nasa-logo" />
            </Link>

            <Link to={aboutPage ? "/" : "/about"}>
               <div className="group flex">
                  <p className="text-xl md:text-2xl text-primary transition duration-500 hover:underline pt-3 md:pt-2 align-baseline">
                     {aboutPage ? "Home" : "About"}
                  </p>
               </div>
            </Link>
         </nav>
      </header>
   );
}

export default Navigation;
