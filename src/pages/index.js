import React from "react";
import SEO from "../components/Seo";
import { useSpring } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";
import shuush_banner_1 from "../images/shuush/shuush_banner_1.webp";
import classica_banner_1 from "../images/classica/classica_banner_1.webp";
import three_banner_3 from "../images/three/three_banner_3.webp";
import ImgTile from "../components/base/ImgTile";

function Home() {
    //Fade animation
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
    const centerAbsolute = {
        top: "50%",
        left: "40%",
    };

    return (
        <>
            <SEO
                keywords={[
                    `UI Designer`,
                    `Web Designer`,
                    `Product Designer`,
                    `Front-end Developer`,
                    `Portfolio`,
                    `Brighton`,
                    `Uk`,
                ]}
                title="Home"
            />
            <TransitionPageIn>
                <div
                    id="tileContainer"
                    className="w-11/12 md:container md:px-0 mx-auto pt-24 md:pt-32"
                >
                    <ImgTile
                        title="Classica"
                        subTitle="UI DESIGN"
                        img={classica_banner_1}
                        link="/classica"
                        padding="my-4 md:my-24"
                    />
                    <ImgTile
                        title="shuush!"
                        subTitle="PRODUCT DESIGN"
                        img={shuush_banner_1}
                        link="/shuush"
                        padding="my-4 md:my-24"
                    />

                    <ImgTile
                        title="3DC"
                        subTitle="BRANDING"
                        img={three_banner_3}
                        link="/three"
                        padding="mt-4 md:mt-24"
                    />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Home;
