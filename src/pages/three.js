import React from "react";
import SEO from "../components/Seo";
// import { useSpring } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import three_banner_2 from "../images/three/three_banner_2.jpg";
import three_1 from "../images/three/three_1.jpg";
import three_2 from "../images/three/three_2.jpg";
import three_3 from "../images/three/three_3.jpg";
import three_4 from "../images/three/three_4.jpg";
import three_5 from "../images/three/three_5.jpg";
import three_6 from "../images/three/three_6.jpg";
import three_7 from "../images/three/three_7.jpg";
import three_8 from "../images/three/three_8.jpg";
import three_9 from "../images/three/three_9.jpg";
import three_10 from "../images/three/three_10.jpg";
import three_11 from "../images/three/three_11.jpg";
import three_12 from "../images/three/three_12.jpg";
import three_13 from "../images/three/three_13.jpg";
import three_14 from "../images/three/three_14.jpg";

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
                    <img src={three_1} className="rounded w-full" />
                    <img src={three_banner_2} className="rounded w-full" />
                    <img src={three_3} className="rounded w-full" />

                    <div class="flex">
                        <img src={three_4} className="sm:w-1/2" />
                        <img src={three_5} className="sm:w-1/2" />
                    </div>
                    <div class="flex">
                        <img src={three_6} className="sm:w-1/2" />
                        <img src={three_7} className="sm:w-1/2" />
                    </div>
                    <div class="flex">
                        <img src={three_8} className="sm:w-1/2" />
                        <img src={three_9} className="sm:w-1/2" />
                    </div>
                    <div class="flex">
                        <img src={three_10} className="sm:w-1/2" />
                        <img src={three_11} className="sm:w-1/2" />
                    </div>
                    <div class="flex">
                        <img src={three_12} className="sm:w-1/2" />
                        <img src={three_13} className="sm:w-1/2" />
                    </div>
                    <img src={three_2} className="rounded w-full" />
                    <img src={three_14} className="w-full" />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default shuush;
