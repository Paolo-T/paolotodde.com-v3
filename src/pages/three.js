import React from "react";
import SEO from "../components/Seo";
// import { useSpring } from "react-spring";
// import TransitionInview from "../components/TransitionInview";
import TransitionPageIn from "../components/TransitionPageIn";
// import three_banner_2 from "../images/three/three_banner_2.jpg";
import three_banner_3 from "../images/three/three_banner_3.png";
import three_1 from "../images/three/three_1.jpg";
import three_2 from "../images/three/three_2.jpg";
import three_3 from "../images/three/three_3.jpg";
import three_14 from "../images/three/three_14.jpg";

import three_15 from "../images/three/three_15.png";
import three_16 from "../images/three/three_16.png";
import three_17 from "../images/three/three_17.png";
import three_18 from "../images/three/three_18.png";

function Three() {
    return (
        <>
            <SEO
                keywords={[
                    `UI Designer`,
                    `Web Designer`,
                    `Product Designer`,
                    `Front-end Developer`,
                ]}
                title="Three"
            />
            <TransitionPageIn>
                <div className="w-full max-w-full mx-auto mb-24">
                    <img src={three_banner_3} className="w-full" />
                    <img src={three_1} className="w-full" />
                    <img src={three_15} className="w-full" />
                    <img src={three_16} className="w-full" />
                    <img src={three_17} className="w-full" />
                    <img src={three_18} className="w-full" />
                    {/* <img src={three_banner_2} className="w-full" /> */}
                    {/* <div class="grid sm:grid-cols-2">
                        <img src={three_4} />
                        <img src={three_5} />
                        <img src={three_6} />
                        <img src={three_7} />
                        <img src={three_8} />
                        <img src={three_9} />
                        <img src={three_10} />
                        <img src={three_11} />
                        <img src={three_12} />
                        <img src={three_13} />
                    </div> */}
                    <img src={three_2} className="w-full" />
                    <img src={three_14} className="w-full" />
                    <img src={three_3} className="w-full" />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Three;
