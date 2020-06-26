import React from "react";
import SEO from "../components/Seo";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import shuush_banner_1 from "../images/shuush/shuush_banner_1.png";
import shuush_9 from "../images/shuush/shuush_9.png";
import shuush_10 from "../images/shuush/shuush_10.png";
import shuush_11 from "../images/shuush/shuush_11.png";
import shuush_12 from "../images/shuush/shuush_12.png";

function Shuush() {
    return (
        <>
            <SEO
                keywords={[
                    `UI Designer`,
                    `Web Designer`,
                    `Product Designer`,
                    `Front-end Developer`,
                ]}
                title="Shuush"
            />
            <TransitionPageIn>
                <div className="w-full max-w-full mx-auto bg-offWhite">
                    <img src={shuush_banner_1} className="w-full" />
                    <img src={shuush_9} className="w-full" />
                    <img src={shuush_10} className="w-full" />
                    <img src={shuush_11} className="w-full" />
                    <img src={shuush_12} className="w-full" />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Shuush;
