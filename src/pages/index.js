import React from "react";
import { Link } from "gatsby";
import SEO from "../components/Seo";
// import Hero from "../comp ts/Hero";
import { useSpring } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import shuush_banner_1 from "../images/shuush/shuush_banner_1.png";
import dc_banner_1 from "../images/three-dc/dc_banner_1.png";
import classica_banner_1 from "../images/classica/classica_banner_1.png";

function Home() {
    //Fade animation
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
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
                <div className="container md:px-0 mx-auto py-32">
                    <TransitionInview>
                        <div className="w-full my-24 cursor-pointer">
                            <Link to="/shuush">
                                <img
                                    src={shuush_banner_1}
                                    className="rounded"
                                />
                            </Link>
                        </div>
                    </TransitionInview>
                    <TransitionInview>
                        <div className="w-full mt-24 cursor-pointer">
                            <Link to="/classica ">
                                <img
                                    src={classica_banner_1}
                                    className="rounded"
                                />
                            </Link>
                        </div>
                    </TransitionInview>
                    <TransitionInview>
                        <div className="w-full my-24 cursor-pointer">
                            <Link to="/three">
                                <img src={dc_banner_1} className="rounded" />
                            </Link>
                        </div>
                    </TransitionInview>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default Home;
