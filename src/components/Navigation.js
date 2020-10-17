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
                    <div className="group flex">
                        <p className="text-xl md:text-2xl text-grey hover:text-primary font-bold ">
                            About
                        </p>
                        <svg
                            className="inline pt-2 group-hover:text-primary"
                            width="50"
                            height="50"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                fill="grey"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </Link>
            </nav>
        </header>
    );
}

export default Navigation;
