import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import "./styles.css";
import carousel_1 from "../../images/carousel/carousel_1.png";
import carousel_2 from "../../images/carousel/carousel_2.png";
import carousel_3 from "../../images/carousel/carousel_3.png";
import carousel_4 from "../../images/carousel/carousel_4.png";

const slides = [
   { id: 0, url: carousel_1 },
   { id: 1, url: carousel_2 },
   { id: 2, url: carousel_3 },
   { id: 3, url: carousel_4 },
];

const Carousel = () => {
   const [index, set] = useState(0);
   const transitions = useTransition(slides[index], (item) => item.id, {
      from: { opacity: 0 },
      enter: { opacity: 0.1 },
      leave: { opacity: 0 },
      config: config.molasses,
   });
   useEffect(() => void setInterval(() => set((state) => (state + 1) % 4), 2000), []);
   return transitions.map(({ item, props, key }) => (
      <animated.div key={key} className="bg" style={{ ...props, backgroundImage: `url(${item.url})` }} />
   ));
};

export default Carousel;
