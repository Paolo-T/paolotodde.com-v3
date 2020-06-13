import React from "react";
import SEO from "../components/Seo";
// import { useSpring } from "react-spring";
// import TransitionInview from "../components/TransitionInview";
import TransitionPageIn from "../components/TransitionPageIn";
import three_banner_3 from "../images/three/three_banner_3.png";
import three_1 from "../images/three/three_1.jpg";
import three_14 from "../images/three/three_14.jpg";
import three_15 from "../images/three/three_15.png";
import three_16 from "../images/three/three_16.png";
import three_17 from "../images/three/three_17.png";
import three_18 from "../images/three/three_18.png";
import three_19 from "../images/three/three_19.png";
import three_20 from "../images/three/three_20.png";
import three_21 from "../images/three/three_21.png";

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
                    <img src={three_15} className="w-full" />
                    <img src={three_16} className="w-full" />
                    <img src={three_17} className="w-full" />
                    <img src={three_18} className="w-full" />
                    <img src={three_19} className="w-full" />
                    <img src={three_20} className="w-full" />
                    <img src={three_21} className="w-full" />
                    <img src={three_banner_3} className="w-full" />
                    <img src={three_1} className="w-full" />
                    <img src={three_14} className="w-full" />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Three;
