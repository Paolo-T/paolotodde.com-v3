import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

function TransitionInView({ children }) {
    const [visible, setVisible] = useState(false);
    const [inviewRef, inView] = useInView({
        rootMargin: "-100px 0px"
    });

    const spring = { mass: 1, tension: 120, friction: 30 };

    const props = useSpring({
        config: spring,
        opacity: visible ? 1 : 0,
        transform: visible ? `translate3d(0,0rem,0)` : `translate3d(0,10rem,0)`
    });

    useEffect(() => {
        if (!visible && inView) {
            setVisible(true);
        }
    }, [inView]);

    return (
        <animated.div ref={inviewRef} style={props}>
            {children}
        </animated.div>
    );
}

export default TransitionInView;
