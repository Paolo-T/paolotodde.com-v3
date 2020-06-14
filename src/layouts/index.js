import PropTypes from "prop-types";
import React from "react";
import Navigation from "../components/base/Navigation";
import Footer from "../components/base/Footer";

function Layout({ children }) {
    return (
        <>
            <Navigation />

            <main className="min-h-screen bg-black">{children}</main>

            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
