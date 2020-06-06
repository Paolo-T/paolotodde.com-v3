import React from "react";
import { Link } from "gatsby";

function Footer() {
    return (
        <footer className="mx-auto py-20 px-16 text-center">
            <Link
                rel="noopener noreferrer"
                className="block text-xl md:text-2xl underline"
                to="/about"
            >
                About
            </Link>
        </footer>
    );
}

export default Footer;
