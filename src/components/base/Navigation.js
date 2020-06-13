import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "gatsby";

function Navigation() {
    return (
        <header className="w-full fixed bg-transparent z-10">
            <div className="w-9/12 mx-auto flex justify-between pt-12 md:pt-24 ">
                <Link className="text-primary" to="/">
                    <img className="w-8 md:w-8" src={logo} alt="nasa-logo" />
                </Link>

                <nav className=" flex justify-between">
                    <Link
                        className="inline-block text-xl md:text-2xl text-red-600 leading-normal hover:text-black"
                        to="/about"
                    >
                        about
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navigation;
