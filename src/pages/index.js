import React from "react";
import { Link } from "gatsby";
import SEO from "../components/Seo";
import { useSpring } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";
// import TransitionInview from "../components/TransitionInview";
import shuush_banner_1 from "../images/shuush/shuush_banner_1.png";
import three_15 from "../images/three/three_15.png";
import classica_banner_1 from "../images/classica/classica_banner_1.png";
import three_banner_3 from "../images/three/three_banner_3.png";
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
            <TransitionPageIn>
                <div
                    id="tileContainer"
                    className="w-11/12 md:container md:px-0 mx-auto pt-32"
                >
                    <ImgTile
                        title="Classica"
                        subTitle="UI DESIGN"
                        img={classica_banner_1}
                        link="/classica"
                    />
                    <ImgTile
                        title="shuush!"
                        subTitle="PRODUCT DESIGN"
                        img={shuush_banner_1}
                        link="/shuush"
                    />

                    <ImgTile
                        title="3DC"
                        subTitle="BRANDING"
                        img={three_banner_3}
                        link="/three"
                    />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Home;
