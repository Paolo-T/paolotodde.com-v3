import React from "react";
import { Link } from "gatsby";
import TransitionPageIn from "../TransitionPageIn";
import TransitionInview from "../TransitionInview";

function Footer() {
    return (
        <TransitionPageIn>
            <TransitionInview>
                <footer className="w-full max-w-screen-xxl mx-auto pb-10 md:pb-24 pt-10 md:pt-20 bg-black">
                    <ul className="w-10/12 flex-1 flex font-bold text-red-600 justify-between content-end md:ml-32">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/paolo-todde/"
                        >
                            <li className="inline-block text-lg md:text-4xl">
                                LinkedIn
                            </li>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.instagram.com/three_design_company/"
                        >
                            <li className="inline-block text-lg md:text-4xl">
                                Instagram
                            </li>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.behance.net/paolotodde"
                        >
                            <li className="inline-block text-lg md:text-4xl">
                                Behance
                            </li>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="mailto:webmaster@example.com"
                        >
                            <li className="inline-block text-lg md:text-4xl ">
                                iampaolotodde[@]gmail.com
                            </li>
                        </a>
                    </ul>
                </footer>
            </TransitionInview>
        </TransitionPageIn>
    );
}

export default Footer;
