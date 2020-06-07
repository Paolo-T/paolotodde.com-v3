import React from "react";
import { Link } from "gatsby";

function Footer() {
    return (
        <footer className="w-full pb-24 pt-20">
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
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/paolo-todde/"
                    >
                        <h3 className="inline-block text-2xl">LinkedIn</h3>
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/three_design_company/"
                    >
                        <h3 className="inline-block text-2xl">Instagram</h3>
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.behance.net/paolotodde"
                    >
                        <h3 className="inline-block text-2xl">Behance</h3>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
