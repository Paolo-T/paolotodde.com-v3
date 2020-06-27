import React from "react";
import SEO from "../components/Seo";
import TransitionPageIn from "../components/TransitionPageIn";
import three_banner_3 from "../images/three/three_banner_3.webp";
import three_1 from "../images/three/three_1.webp";
import three_14 from "../images/three/three_14.webp";
import three_15 from "../images/three/three_15.webp";
import three_16 from "../images/three/three_16.webp";
import three_17 from "../images/three/three_17.webp";
import three_18 from "../images/three/three_18.webp";
import three_19 from "../images/three/three_19.webp";
import three_21 from "../images/three/three_21.webp";

function Three() {
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
                title="Three"
            />
            <TransitionPageIn>
                <div className="w-full max-w-full mx-auto ">
                    <img src={three_banner_3} className="w-full -mt-1" />
                    {/* <img src={three_21} className="w-full -mt-1" /> */}
                    <img src={three_15} className="w-full -mt-1" />
                    <img src={three_16} className="w-full -mt-1" />
                    <img src={three_17} className="w-full -mt-1" />
                    <img src={three_18} className="w-full -mt-1" />
                    <img src={three_19} className="w-full -mt-1" />
                    <img src={three_1} className="w-full -mt-1" />
                    <img src={three_14} className="w-full -mt-1" />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Three;
