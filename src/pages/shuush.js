import React from "react";
import SEO from "../components/Seo";
import TransitionPageIn from "../components/TransitionPageIn";
import shuush_banner_1 from "../images/shuush/shuush_banner_1.webp";
import shuush_9 from "../images/shuush/shuush_9.webp";
import shuush_10 from "../images/shuush/shuush_10.webp";
import shuush_11 from "../images/shuush/shuush_11.webp";
import shuush_12 from "../images/shuush/shuush_12.webp";

function Shuush() {
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
                title="Shuush"
            />
            <TransitionPageIn>
                <div className="w-full max-w-full mx-auto bg-offWhite">
                    <img src={shuush_banner_1} className="w-full" />
                    <img src={shuush_9} className="w-full -mt-1" />
                    <img src={shuush_10} className="w-full -mt-1" />
                    <img src={shuush_11} className="w-full -mt-1" />
                    <img src={shuush_12} className="w-full -mt-1" />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Shuush;