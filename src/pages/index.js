import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
// import Hero from "../components/Hero";
import { useSpring, animated } from "react-spring";
import TransitionPageIn from "../components/TransitionPageIn";
import TransitionInview from "../components/TransitionInview";
import portfolio_tile_2 from "../images/portfolio_tile_2.png";

function IndexPage() {
    //Fade animation
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <>
            <SEO
                keywords={[
                    `Nasa`,
                    `Spacex`,
                    `Space`,
                    `star`,
                    `gatsby`,
                    `tailwind`,
                    `react`,
                    `tailwindcss`,
                ]}
                title="home"
            />
            <TransitionPageIn>
                <div className="container md:px-0 mx-auto py-32">
                    <TransitionInview>
                        <div className="w-full my-24">
                            <img src={portfolio_tile_2} />
                        </div>
                        <div className="w-full  my-24">
                            <img src={portfolio_tile_2} />
                        </div>
                        <div className="w-full mt-24">
                            <img src={portfolio_tile_2} />
                        </div>
                    </TransitionInview>
                </div>
            </TransitionPageIn>
        </>
    );
}

export default IndexPage;
