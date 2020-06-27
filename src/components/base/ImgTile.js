import React from "react";
import { Link } from "gatsby";
import TransitionInview from "../TransitionInview";

function ImgTile({ img, link, padding }) {
    return (
        <>
            <TransitionInview>
                <div
                    className={`w-full cursor-pointer relative transition duration-500 transform hover:scale-95 ${padding}`}
                >
                    <Link to={link}>
                        <img
                            src={img}
                            alt="Portfolio tile"
                            className="rounded"
                        />
                    </Link>
                </div>
            </TransitionInview>
        </>
    );
}

export default ImgTile;
