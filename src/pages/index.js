import React from "react";
import SEO from "../components/Seo";
import ImgTiles from "../components/ImgTiles";
import TransitionPageIn from "../components/TransitionPageIn";

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
                <div className="w-10/12 md:container md:px-0 mx-auto pt-24 md:pt-40">
                    <ImgTiles />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Home;
