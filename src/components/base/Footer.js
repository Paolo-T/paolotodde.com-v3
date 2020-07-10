import React from "react";
import { Link } from "gatsby";
import TransitionPageIn from "../TransitionPageIn";
import TransitionInview from "../TransitionInview";

function Footer() {
    return (
        <TransitionPageIn>
            <TransitionInview>
                <footer className="w-full max-w-screen-xxl mx-auto pb-10 md:pb-24 pt-10 md:pt-20 bg-black">
                    <ul className="w-10/12 mx-auto sm:flex font-bold text-center text-red-600 justify-between md:ml-32">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/paolo-todde/"
                        >
                            <li className="md:inline-block text-2xl md:text-4xl hover:text-red-700 ease-in-out">
                                LinkedIn
                            </li>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.instagram.com/three_design_company/"
                        >
                            <li className="md:inline-block text-2xl md:text-4xl hover:text-red-700 ease-in-out">
                                Instagram
                            </li>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.behance.net/paolotodde"
                        >
                            <li className="md:inline-block text-2xl md:text-4xl hover:text-red-700 ease-in-out">
                                Behance
                            </li>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="mailto:webmaster@example.com"
                        >
                            <li className="md:inline-block text-2xl md:text-4xl hover:text-red-700 ease-in-out">
                                iampaolotodde[at]gmail.com
                            </li>
                        </a>
                    </ul>
                </footer>
            </TransitionInview>
        </TransitionPageIn>
    );
}

export default Footer;
