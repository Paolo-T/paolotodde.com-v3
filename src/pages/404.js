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
            <section className="container h-screen w-10/12 md:w-10/12 lg:w-8/12 md:pl-20">
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-left mt-56">
                        Looks like the page you are looking for is not here...
                    </h1>

                    <Link
                        className="inline-block bg-primary
                        hover:bg-yellow-600 hover:text-white focus:outline-none
                        focus:border-red-600 transition duration-500 ease-in-out
                        font-header text-xl md:text-3xl  py-3 px-10
                        rounded"
                        to="/"
                    >
                        Let's go Home
                    </Link>
                </div>
            </section>
        </>
    );
}

export default NotFoundPage;
