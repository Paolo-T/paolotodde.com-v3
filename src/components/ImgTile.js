import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

function ImgTile({ LinkTo, Title, SubTitle, TileImg, ImgAlt }) {
    return (
        <>
            <Link to={LinkTo}>
                <div className="group w-full cursor-pointer relative transition duration-500 transform hover:scale-98 text-center my-4 md:my-12 rounded-md overflow-hidden">
                    <div
                        className="text-yellow-500 absolute top-1 z-50 opacity-0 group-hover:opacity-100 transition duration-500"
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -40%)",
                        }}
                    >
                        <h1 className="mb-1 text-3xl md:text-6xl lg:text-9xl">
                            {Title}
                        </h1>
                        <p className="text-xs md:text-md md:text-3xl">
                            {SubTitle}
                        </p>
                    </div>
                    <div className="bg-blackPure absolute inset-0 z-40 opacity-0 group-hover:opacity-75 transition-all duration-1000"></div>
                    <Img fluid={TileImg} alt={ImgAlt} loading="eager" />
                </div>
                {console.log(TileImg)}
            </Link>
        </>
    );
}

export default ImgTile;
