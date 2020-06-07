import React from "react";
import { Link } from "gatsby";

function Footer() {
    return (
        <footer className="w-full bg-black pb-24">
            <div className="w-10/12 md:w-9/12 mx-auto flex justify-between">
                <div className="flex-1">
                    <Link
                        rel="noopener noreferrer"
                        className="block md:text-2xl"
                        to="/about"
                    >
                        <h2 className="text-4xl text-red-600">
                            info@paolotodde.com
                        </h2>
                    </Link>
                </div>
                <div className="flex-1 flex justify-between">
                    <h3 className="inline-block">LinkedIn</h3>
                    <h3 className="inline-block">Instagram</h3>
                    <h3 className="inline-block">Behance</h3>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
