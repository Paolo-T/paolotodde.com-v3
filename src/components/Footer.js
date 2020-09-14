import React from "react";
import { Link } from "gatsby";
import TransitionPageIn from "./TransitionPageIn";
import TransitionInview from "./TransitionInview";

function Footer() {
    return (
        <TransitionPageIn>
            <TransitionInview>
                <footer className="w-full max-w-screen-xxl mx-auto pb-10 md:pb-24 pt-10 md:pt-10 lg:pt-20 bg-black">
                    <ul className="w-10/12 mx-auto lg:flex font-bold text-center text-red-600 justify-between xlg:ml-32">
                        <a
                            rel="noopener noreferrer"
                            href="mailto:webmaster@example.com"
                        >
                            <li className="xlg:inline-block sm:text-2xl md:text-2xl lg:text-4xl hover:text-red-800 ease-in-out mb-3 md:mb-0">
                                iampaolotodde[at]gmail.com
                            </li>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/paolo-todde/"
                        >
                            <li className="xlg:inline-block sm:text-2xl md:text-2xl lg:text-4xl hover:text-red-800 ease-in-out mb-3 md:mb-0">
                                LinkedIn
                            </li>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.instagram.com/three_design_company/"
                        >
                            <li className="xlg:inline-block sm:text-2xl md:text-2xl lg:text-4xl hover:text-red-800 ease-in-out mb-3 md:mb-0">
                                Instagram
                            </li>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.behance.net/paolotodde"
                        >
                            <li className="xlg:inline-block sm:text-2xl md:text-2xl lg:text-4xl hover:text-red-800 ease-in-out">
                                Behance
                            </li>
                        </a>
                    </ul>
                </footer>
            </TransitionInview>
        </TransitionPageIn>
    );
}

export default Footer;
