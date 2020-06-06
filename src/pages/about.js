import React from "react";
import SEO from "../components/seo";
import { useSpring, animated } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";

function AboutPage() {
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <>
            <SEO
                keywords={[
                    `Nasa`,
                    `Spacex`,
                    `Space`,
                    `star`,
                    `gatsby`,
                    `tailwind`,
                    `react`,
                    `tailwindcss`,
                ]}
                title="About"
            />
            <TransitionPageIn>
                <div className="container md:w-3/4 mx-auto pt-24 md:pt-30">
                    <h2 className="w-2/4 text-5xl md:text-6xl mb-3 pt-10">
                        About
                    </h2>
                    <p className="md:w-2/4 block">
                        Space Digest is an informational website created as a
                        personal project for fans of Nasa, SpaceX and space in
                        general. Here you will find data, media, past and future
                        space missions.
                    </p>
                    <p className="md:w-2/4 block mt-6">
                        Special thanks to the teams at NASA and SpaceX for
                        providing and maintaining all the data this website is
                        built upon.
                    </p>
                    <p className="md:w-2/4 block mt-6">
                        The plan for the future includes further development for
                        a better experience.
                    </p>

                    <p className="md:w-2/4 block mt-6">
                        Thanks for visiting
                        <span
                            className="ml-3"
                            role="img"
                            aria-label="horns up emoji"
                        >
                            🤘🏻
                        </span>{" "}
                    </p>
                    <p className="md:w-2/4 block mt-6">P.</p>
                    {/* <a
                        className="inline-block text-xl md:text-2xl underline mt-10"
                        rel="noopener noreferrer"
                        href="mailto:webmaster@example.com"
                    >
                        hi@spacedigest.live
                    </a> */}
                </div>
            </TransitionPageIn>
        </>
    );
}

export default AboutPage;
