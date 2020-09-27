import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import TransitionInview from "../components/TransitionInview";

function TileImg(title, subtitle, top, bottom, img, alt) {
    return (
        <TransitionInview>
            <Link to="/classica" className="w-full h-full text-center">
                <div className="group w-full my-4 md:my-20 mt-20 cursor-pointer relative transition duration-500 transform hover:scale-98 rounded-lg">
                    <div
                        className="text-red-600 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-700"
                        style={{ top: "45%", left: "40%" }}
                    >
                        <h1 className="mb-2">{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <div className="bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75"></div>
                    <Img fluid={img} alt={alt} loading="eager" />
                </div>
            </Link>
        </TransitionInview>
    );
}

export default TileImg;
