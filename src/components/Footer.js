import React from "react";
import TransitionPageIn from "./TransitionPageIn";
import ScrollToTop from "../components/ScrollToTop";

function Footer() {
    return (
        <TransitionPageIn>
            <footer className="w-full max-w-screen-xxl mx-auto pb-10 md:pb-20 pt-8 md:pt-10">
                <ul className="w-10/12 md:w-8/12 max-w-screen-xl mx-auto flex flex-col md:flex-row font-bold text-center text-grey justify-between xlg:ml-32 md:pt-10 ">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/paolo-todde/"
                    >
                        <li className="xlg:inline-block sm:text-2xl lg:text-4xl font-bold hover:text-primary transition duration-500 hover:underline ease-in-out mb-3">
                            LinkedIn
                        </li>
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/paolo_tde/"
                    >
                        <li className="xlg:inline-block sm:text-2xl lg:text-4xl hover:text-primary transition duration-500 hover:underline ease-in-out mb-3">
                            Instagram
                        </li>
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/Paolo-T"
                    >
                        <li className="xlg:inline-block sm:text-2xl lg:text-4xl  hover:text-primary transition duration-500 hover:underline ease-in-out mb-3">
                            Github
                        </li>
                    </a>
                    <a
                        target="_parent"
                        rel="noopener noreferrer"
                        href="mailto:iampaolotodde@gmail.com"
                    >
                        <li className="xlg:inline-block sm:text-2xl lg:text-4xl  hover:text-primary transition duration-500 hover:underline ease-in-out mb-3">
                            Email
                        </li>
                    </a>
                    <li>
                        <ScrollToTop showBelow="250" />
                    </li>
                </ul>
            </footer>
        </TransitionPageIn>
    );
}

export default Footer;
