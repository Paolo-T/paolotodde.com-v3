import React from "react";
import SEO from "../components/Seo";
import { useSpring, animated } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";

function About() {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <>
            <SEO
                keywords={[
                    `UI Design`,
                    `Product Design`,
                    `Product Designer`,
                    `Messaging App`,
                    `App`,
                    `UI Designer`,
                    `Web Designer`,
                    `Product Designer`,
                    `Front-end Developer`,
                    `Portfolio`,
                    `Brighton`,
                    `Uk`,
                ]}
                title="About"
            />

            <div className="w-full bg-offWhite pt-20 md:pt-48 pb-20 md:pb-48">
                <TransitionPageIn>
                    <div className="w-10/12 md:w-9/12 mx-auto md:flex flex-initial ">
                        <h2 className="md:w-12/12 text-5xl md:text-5xl text-black flex-1 md:pl-20 pt-16">
                            Hello__
                        </h2>
                        <div className="md:w-8/12 block text-black flex-2 pt-20">
                            <p className="md:pr-20">
                                Paolo here. Designer + Coder based in Brighton
                                (UK).<br></br>I have a passion for visual
                                communication, creating and developing well
                                crafted designs, user focused utilitarian
                                interfaces. Contributing to the great web
                                environment making the best experience mixing
                                creativity and technology.
                            </p>
                            <p className="md:pr-20 mt-8">
                                Staying curious and up to date with the latest
                                technology movements. Constantly seeking new
                                skills, discovering better ways of implementing
                                techniques, sifting out the unnecessary.
                            </p>
                            <p className="md:pr-20 mt-8">
                                Currently focusing on Design, Vanilla
                                Javascript, React and web animations.
                            </p>
                            <p className="md:pr-20 mt-8">
                                Member of the Jury Panel at{" "}
                                <a
                                    className="text-red-600"
                                    rel="noopener noreferrer"
                                    href="https://www.cssdesignawards.com/"
                                    target="_blank"
                                >
                                    CSS Design Awards
                                </a>
                            </p>
                        </div>
                    </div>
                </TransitionPageIn>
            </div>
        </>
    );
}

export default About;
