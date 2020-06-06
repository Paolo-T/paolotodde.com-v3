import React from "react";
import SEO from "../components/Seo";
// import { useSpring } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import dc_banner_1 from "../images/three-dc/dc_banner_1.png";
import shuush_1__animated from "../images/shuush/shuush_1__animated.gif";
import shuush_2 from "../images/shuush/shuush_2.png";
import shuush_3 from "../images/shuush/shuush_3.png";
import shuush_4 from "../images/shuush/shuush_4.png";
import shuush_5 from "../images/shuush/shuush_5.png";
import shuush_6 from "../images/shuush/shuush_6.png";
import shuush_7 from "../images/shuush/shuush_7.png";
import shuush_8__animated from "../images/shuush/shuush_8__animated.gif";

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
                <div className="w-full max-w-full mx-auto mb-24">
                    <img src={shuush_1__animated} className="rounded w-full" />
                    <img src={shuush_2} className="rounded w-full" />
                    <img src={shuush_3} className="rounded w-full" />
                    {/* <img src={shuush_4} className="rounded w-full" /> */}
                    <img src={shuush_5} className="rounded w-full" />
                    <img src={shuush_6} className="rounded w-full" />
                    <img src={shuush_7} className="rounded w-full" />
                    <img src={shuush_8__animated} className="rounded w-full" />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default shuush;
