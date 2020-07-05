import PropTypes from "prop-types";
import React from "react";
import Navigation from "../components/base/Navigation";
import Footer from "../components/base/Footer";

function Layout({ children }) {
    return (
        <div className="h-screen">
            <Navigation />

            <main className="max-w-screen-xxl mx-auto">{children}</main>

            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
