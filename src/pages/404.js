import React from "react";
import SEO from "../components/Seo";
import { Link } from "gatsby";

function NotFoundPage() {
    return (
        <>
            <SEO
                keywords={[
                    `UI Design`,
                    `Product Design`,
                    `Product Designer`,
                    `Product Designer`,
                    `Messaging App`,
                    `App`,
                    `UI Designer`,
                    `Web Designer`,
                    `Front-end Developer`,
                    `Portfolio`,
                    `Brighton`,
                    `Uk`,
                ]}
                title="404: Not found"
            />
            <div className="container w-10/12 md:w-10/12 lg:w-8/12 md:pl-20 pt-56">
                <h1 className="text-4xl md:text-5xl lg:text-7xl text-left">
                    Sorry, the page you are looking for is not here.
                </h1>

                <Link
                    className="block text-black text-base md:text-2xl underline  mb-56"
                    to="/"
                >
                    Back
                </Link>
            </div>
        </>
    );
}

export default NotFoundPage;
