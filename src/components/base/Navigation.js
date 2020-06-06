import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "gatsby";

function Navigation() {
    return (
        <header className="w-full fixed bg-gray-100 md:bg-transparent z-10">
            <div className="w-10/12 md:w-9/12 mx-auto flex justify-between py-4 md:pt-24 ">
                <Link className="text-primary" to="/">
                    <img
                        className="w-10 md:w-8 mr-8 md:mr-4"
                        src={logo}
                        alt="nasa-logo"
                    />
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
