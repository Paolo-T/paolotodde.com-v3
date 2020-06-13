import React from "react";
import { Link } from "gatsby";
import TransitionInview from "../TransitionInview";
import plus from "../../images/plus.svg";

function ImgTile({ title, subTitle, img, link }) {
    const centerAbsolute = {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };
    return (
        <>
            <TransitionInview>
                <div className="w-full my-4 md:my-20 cursor-pointer relative transition duration-500 transform hover:scale-95">
                    <Link to={link}>
                        {/* <img
                            src={plus}
                            className="absolute w-10"
                            style={{
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        /> */}
                        {/* <div className="absolute flex"> */}
                        {/* <h2
                                className="inline z-50 text-red-600 mb-32"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                {title}
                            </h2>
                            <span
                                className=" z-50 text-red-600"
                                style={{
                                    top: "55%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                {subTitle}
                            </span> */}
                        {/* </div> */}

                        {/* <span className="absolute z-0 inset-0 transition duration-500 ease-in-out bg-black bg-opacity-0 hover:bg-opacity-75"></span> */}

                        <img src={img} className="rounded" />
                    </Link>
                </div>
            </TransitionInview>
        </>
    );
}

export default ImgTile;
