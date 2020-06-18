import React from "react";
import { Link } from "gatsby";
import TransitionInview from "../TransitionInview";

function ImgTile({ img, link }) {
    return (
        <>
            <TransitionInview>
                <div
                    id="hoverEffect"
                    className="w-full my-4 md:my-20 cursor-pointer relative transition duration-500 transform hover:scale-95"
                >
                    <Link to={link}>
                        <img src={img} className="rounded" />
                    </Link>
                </div>
            </TransitionInview>
        </>
    );
}

export default ImgTile;
