import React from "react";
import SEO from "../components/Seo";
import ImgTiles from "../components/ImgTiles";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";

function Home() {
    return (
        <>
            <SEO
                keywords={[
                    `UI Designer`,
                    `Web Designer`,
                    `Product Designer`,
                    `Front-end Developer`,
                    `Portfolio`,
                    `Brighton`,
                    `Uk`,
                ]}
                title="Home"
            />
            <TransitionPageIn>
                <div className="w-10/12 md:container md:px-0 mx-auto pt-40 md:pt-40">
                    <TransitionInview>
                        <div className="w-12/12 md:pl-5 lg:pl-32 md:mb-2 md:pt-32">
                            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl md:mb-10 lg:mb-24">
                                Hello, I’m Paolo.
                                <br />
                                <span className="inline text-primary">
                                    Designer
                                </span>{" "}
                                <span className="inline">and</span>
                                <br />
                                <span className="inline">front-end</span>{" "}
                                <span className="inline text-primary">
                                    coder
                                </span>
                                .
                            </h1>
                        </div>
                    </TransitionInview>

                    <ImgTiles gridCol="1" />
                    <section class="mt-5 md:mt-20 bg-gray-100 py-10">
                        <h2 className="text-2xl md:text-5xl mt-2 text-center">
                            <a
                                target="_top"
                                className="cursor-pointer text-primary underline "
                                rel="noopener noreferrer"
                                href="mailto:iampaolotodde@gmail.com"
                            >
                                Contact
                            </a>
                        </h2>
                    </section>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Home;
