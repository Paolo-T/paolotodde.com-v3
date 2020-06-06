import React from "react";
import SEO from "../components/Seo";
// import { useSpring } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import classica_banner_1 from "../images/classica/classica_banner_1.png";
import classica_1 from "../images/classica/classica_1.png";
import classica_2 from "../images/classica/classica_2.png";
import classica_3 from "../images/classica/classica_3.png";
import classica_4 from "../images/classica/classica_4.png";
import classica_5 from "../images/classica/classica_5.png";
import classica_6 from "../images/classica/classica_6.png";
import classica_7 from "../images/classica/classica_7.png";
import classica_8 from "../images/classica/classica_8.png";
import classica_10 from "../images/classica/classica_10.png";
import classica_11 from "../images/classica/classica_11.png";

function Classica() {
    return (
        <>
            <SEO
                keywords={[
                    `UI Designer`,
                    `Web Designer`,
                    `Product Designer`,
                    `Front-end Developer`,
                ]}
                title="Classica"
            />
            <TransitionPageIn>
                <div className="w-full max-w-full mx-auto mb-24">
                    <img src={classica_banner_1} className="w-full" />
                    <img src={classica_5} className="w-full pt-6" />
                    <div class="grid sm:grid-cols-2 gap-6 py-6">
                        <img src={classica_1} />
                        <img src={classica_2} />
                        <img src={classica_3} />
                        <img src={classica_4} />
                    </div>
                    <img src={classica_11} className="w-full" />
                    <div class="grid sm:grid-cols-2 gap-6 py-6">
                        <img src={classica_5} />
                        <img src={classica_6} className="h-full" />
                        <img src={classica_7} />
                        <img src={classica_8} />
                    </div>
                    <img src={classica_10} className="w-full" />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Classica;
