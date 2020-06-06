import React from "react";
import SEO from "../components/Seo";
// import { useSpring } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import shuush_banner_1 from "../images/shuush/shuush_banner_1.png";
import dc_banner_1 from "../images/three-dc/dc_banner_1.png";

function shuush() {
    return (
        <>
            <SEO
                keywords={[
                    `UI Designer`,
                    `Web Designer`,
                    `Product Designer`,
                    `Front-end Developer`,
                ]}
                title="Home"
            />
            <TransitionPageIn>
                <TransitionInview>
                    <div className="w-full mb-24">
                        <img src={shuush_banner_1} className="rounded" />
                    </div>
                </TransitionInview>
            </TransitionPageIn>
        </>
    );
}

export default shuush;
