import React, { useState, useEffect } from "react";

const ScrollToTop = (showBelow) => {
    const [show, setShow] = useState(showBelow ? false : true);

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true);
        } else {
            if (show) setShow(false);
        }
    };

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll);
            return () => window.removeEventListener(`scroll`, handleScroll);
        }
    }, []);

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` });
    };

    return (
        <button
            className="bg-white hover:bg-primary hover:text-white border-2 border-grey ease-in-out transform hover:-translate-y-1 transition duration-200 focus:outline-none  rounded-full py-3 px-3 inline-block mx-auto md:mx-0"
            onClick={handleClick}
        >
            <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                stroke="#858585"
                strokeWidth="5%"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
                    fill="#858585"
                    fillRule="evenodd"
                    clipRule="evenodd"
                ></path>
            </svg>
        </button>
    );
};

export default ScrollToTop;
