import React from "react";
import { Link } from "gatsby";
import TransitionPageIn from "../TransitionPageIn";
import TransitionInview from "../TransitionInview";

function Footer() {
    return (
        <TransitionPageIn>
            <TransitionInview>
                <footer className="w-full max-w-screen-xxl mx-auto pb-10 md:pb-24 pt-10 md:pt-20 bg-black">
                    <div className="w-11/12 md:w-9/12 md:w-9/12 mx-auto lg:flex justify-between">
                        <div className="flex-1">
                            <Link
                                rel="noopener noreferrer"
                                className="block md:text-2xl"
                                to="/about"
                            >
                                <h2 className="text-xl sm:text-2xl md:text-4xl text-red-600 text-center lg:text-left lg:mb-0">
                                    iampaolotodde@gmail.com
                                </h2>
                            </Link>
                        </div>
                        <ul className="flex-1 flex justify-between content-end md:ml-32">
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/paolo-todde/"
                            >
                                <li className="inline-block text-lg md:text-2xl">
                                    LinkedIn
                                </li>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.instagram.com/three_design_company/"
                            >
                                <li className="inline-block text-lg md:text-2xl">
                                    Instagram
                                </li>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.behance.net/paolotodde"
                            >
                                <li className="inline-block text-lg md:text-2xl">
                                    Behance
                                </li>
                            </a>
                        </ul>
                    </div>
                </footer>
            </TransitionInview>
        </TransitionPageIn>
    );
}

export default Footer;
