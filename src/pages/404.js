import React from "react";
import SEO from "../components/Seo";
import { Link } from "gatsby";

function NotFoundPage() {
    return (
        <>
            <SEO title="404: Not found" />
            <div className="container mx-auto mb-32">
                <h1 className="md:w-1/3 md:mt-40 text-5xl md:text-7xl mt-32 py-5 md:ml-32 text-left rounded-md">
                    Sorry, the page you are looking for is not here.
                </h1>

                <Link
                    className="block text-black text-base text-2xl underline md:ml-32"
                    to="/"
                >
                    Back
                </Link>
            </div>
        </>
    );
}

export default NotFoundPage;
