import React from "react";
import logo from "../images/logo.svg";
// import aboutIcon from "../images/aboutIcon.svg";
import { Link } from "gatsby";

function Navigation() {
    return (
        <header className="w-full fixed bg-transparent z-10">
            <nav className="w-10/12 md:w-8/12 max-w-screen-xl mx-auto flex justify-between pt-12 md:pt-24">
                <Link to="/">
                    <img className="w-8 md:w-8" src={logo} alt="nasa-logo" />
                </Link>

                <Link to="/about">
                    <p className="text-2xl md:text-3xl font-bold">About</p>
                    {/* <img
                        className="w-8 md:w-8"
                        src={aboutIcon}
                        alt="nasa-logo"
                    /> */}
                </Link>
            </nav>
        </header>
    );
}

export default Navigation;
