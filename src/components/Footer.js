import React from "react";
import TransitionPageIn from "./TransitionPageIn";
import TransitionInview from "./TransitionInview";

function Footer() {
    return (
        <TransitionPageIn>
            <TransitionInview>
                <footer className="w-full max-w-screen-xxl mx-auto pb-10 md:pb-24 pt-10 md:pt-10 lg:pt-20 ">
                    <ul className="w-10/12 md:w-8/12 max-w-screen-xl mx-auto flex flex-col md:flex-row font-bold text-center text-grey justify-between xlg:ml-32 pt-10 ">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/paolo-todde/"
                        >
                            <li className="xlg:inline-block sm:text-2xl lg:text-4xl font-bold hover:text-primary hover:underline ease-in-out mb-3">
                                LinkedIn
                            </li>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.instagram.com/three_design_company/"
                        >
                            <li className="xlg:inline-block sm:text-2xl lg:text-4xl hover:text-primary hover:underline ease-in-out mb-3">
                                Instagram
                            </li>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/Paolo-T"
                        >
                            <li className="xlg:inline-block sm:text-2xl lg:text-4xl  hover:text-primary hover:underline ease-in-out mb-3">
                                Github
                            </li>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="mailto:webmaster@example.com"
                        >
                            <li className="xlg:inline-block sm:text-2xl lg:text-4xl  hover:text-primary hover:underline ease-in-out mb-3">
                                iampaolotodde@gmail.com
                            </li>
                        </a>
                        {/* <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.behance.net/paolotodde"
                        >
                            <li className="xlg:inline-block sm:text-2xl md:text-2xl lg:text-4xl hover:text-primary hover:underline ease-in-out">
                                Behance
                            </li>
                        </a> */}
                    </ul>
                </footer>
            </TransitionInview>
        </TransitionPageIn>
    );
}

export default Footer;
