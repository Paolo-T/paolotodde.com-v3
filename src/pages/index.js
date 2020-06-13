import React from "react";
import { Link } from "gatsby";
import SEO from "../components/Seo";
// import Hero from "../comp ts/Hero";
import { useSpring } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";
// import TransitionInview from "../components/TransitionInview";
import shuush_banner_1 from "../images/shuush/shuush_banner_1.png";
import three_15 from "../images/three/three_15.png";
import classica_banner_1 from "../images/classica/classica_banner_1.png";
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
                ]}
                title="Home"
            />
            <TransitionPageIn>
                <div className="w-11/12 md:container md:px-0 mx-auto pt-32">
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
                        img={three_15}
                        link="/three"
                    />
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Home;
