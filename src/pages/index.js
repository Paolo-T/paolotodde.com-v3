import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Hero from "../components/Hero";
import Media from "../components/Media";
import FiftyFifty from "../components/base/FiftyFifty";
import nasa_logo from "../images/nasa_logo.svg";
import img_tile_1 from "../images/img_tile_1.svg";
import img_tile_2 from "../images/img_tile_2.svg";
import { useSpring, animated } from "react-spring";

function IndexPage() {
  //Fade animation
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

        <animated.div className="container mx-auto pt-12">
            <Hero />

            <FiftyFifty
                image={img_tile_1}
                title="Asteroids"
                text=" NeoWs (Near Earth Object Web Service) is a web service for
                    near earth Asteroid information. With NeoWs we can display
                    Asteroids based on their closest approach date to Earth."
                btn_text="Asteroids nearby"
                link="/asteroids"
            />

            <FiftyFifty
                image={img_tile_2}
                title="Photo collection"
                text="NASA.gov brings you the latest images, videos and news from America's space agency. Get the latest updates on NASA missions, and learn about the quest to reveal the unknown and benefit all humankind."
                btn_text="Photos"
                link="/photo-collection"
                reverse={true}
            />


            <Media />


            <FiftyFifty
                reverse={true}
                image={nasa_logo}
                title="Mars Rover"
                text="Spirit and Opportunity landed on Mars January 3 and January 24, 2004 PST (Jan. 4 and Jan. 25 UTC).
                Both rovers lived well beyond their planned 90-day missions. Spirit and Opportunity found evidence for past wet conditions that possibly could have supported microbial life."
                btn_text="Rover pictures from Mars"
                link="/nasa"
                padding_img="pl-8 pr-4"
                background={true}
            />

            <FiftyFifty
                image="https://images2.imgbox.com/89/bc/JcbcvuBI_o.png"
                title="SpaceX"
                text="SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to liv on other planets.."
                btn_text="More about SpaceX"
                link="/space-x"
                padding_img="py-10 px-10"
                background={true}
            />
        </animated.div>

    </Layout>
  );
}

export default IndexPage;
