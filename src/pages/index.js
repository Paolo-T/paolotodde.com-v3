import React from "react";
import { Link } from "gatsby";
import SEO from "../components/Seo";
// import Hero from "../comp ts/Hero";
import { useSpring } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import shuush_banner_1 from "../images/shuush/shuush_banner_1.png";
import dc_banner_1 from "../images/three/three_banner_1.png";
import classica_banner_1 from "../images/classica/classica_banner_1.png";

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
                <div className="container md:px-0 mx-auto pt-32">
                    <TransitionInview>
                        <div className="w-full my-24 cursor-pointer relative transition duration-500 transform hover:scale-95">
                            <Link to="/shuush">
                                <h2
                                    className="absolute z-50 inset-0 content-center"
                                    style={centerAbsolute}
                                >
                                    Shuush!
                                </h2>
                                <span
                                    className="absolute z-50"
                                    style={{ top: "58%", left: "42.75%" }}
                                >
                                    PRODUCT DESIGN
                                </span>
                                <span className="absolute z-0 inset-0 transition duration-500 ease-in-out bg-black bg-opacity-0 hover:bg-opacity-75"></span>
                                <img
                                    src={shuush_banner_1}
                                    className="rounded"
                                />
                            </Link>
                        </div>
                    </TransitionInview>

                    <TransitionInview>
                        <div className="w-full my-24 cursor-pointer relative transition duration-500 transform hover:scale-95">
                            <Link to="/classica">
                                <h2
                                    className="absolute z-50 inset-0 content-center"
                                    style={centerAbsolute}
                                >
                                    Classica
                                </h2>
                                <span
                                    className="absolute z-50"
                                    style={{ top: "58%", left: "42.75%" }}
                                >
                                    UI DESIGN
                                </span>
                                <span className="absolute z-0 inset-0 transition duration-500 ease-in-out bg-black bg-opacity-0 hover:bg-opacity-75"></span>
                                <img
                                    src={classica_banner_1}
                                    className="rounded"
                                />
                            </Link>
                        </div>
                    </TransitionInview>

                    <TransitionInview>
                        <div className="w-full mt-24 cursor-pointer relative transition duration-500 transform hover:scale-95">
                            <Link to="/three">
                                {/* <h2
                                    className="absolute w-auto z-50 inset-0 content-center  text-opacity-0 w-32 h-24"
                                    style={{ top: "50%", left: "45%" }}
                                >
                                    3DC
                                </h2>
                                <span
                                    className="absolute block z-50"
                                    style={{ top: "57%", left: "46%" }}
                                >
                                    BRANDING
                                </span> */}
                                <span className="absolute z-0 inset-0 transition duration-500 ease-in-out bg-black bg-opacity-0 hover:bg-opacity-75"></span>
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
