import React from "react";
import { animated, useSpring } from "react-spring";

function TransitionPageIn({ children }) {
    const spring = { mass: 1, tension: 200, friction: 30 };

    const fadeIn = useSpring({
        config: spring,
        from: {
            opacity: 0,
            transform: `translate3d(0,5rem,0)`,
        },
        to: {
            opacity: 1,
            transform: `translate3d(0rem,0,0)`,
        },
    });

    return <animated.div style={fadeIn}>{children}</animated.div>;
}

export default TransitionPageIn;
