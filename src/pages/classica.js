import React from "react";
import SEO from "../components/Seo";
import TransitionPageIn from "../components/TransitionPageIn";
import classica_1 from "../images/classica/classica_1.webp";
import classica_2 from "../images/classica/classica_2.webp";
import classica_3 from "../images/classica/classica_3.webp";
import classica_4 from "../images/classica/classica_4.webp";
import classica_5 from "../images/classica/classica_5.webp";
import classica_6 from "../images/classica/classica_6.webp";
import classica_7 from "../images/classica/classica_7.webp";
import classica_8 from "../images/classica/classica_8.webp";
import classica_9 from "../images/classica/classica_9.webp";
import classica_10 from "../images/classica/classica_10.webp";

function Classica() {
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
                title="Classica"
            />
            <TransitionPageIn>
                <div className="w-full max-w-full mx-auto mb-10">
                    <img src={classica_1} className="w-full" />
                    <img src={classica_2} className="w-full pt-8" />
                    <img src={classica_3} className="w-full pt-8" />
                    <img src={classica_4} className="w-full pt-8" />
                    <img src={classica_5} className="w-full pt-8" />
                    <div className="grid sm:grid-cols-2 gap-6 py-8">
                        <img src={classica_6} />
                        <img src={classica_7} />
                        <img src={classica_8} />
                        <img src={classica_9} />
                    </div>
                    <img src={classica_10} className="w-full" />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Classica;
