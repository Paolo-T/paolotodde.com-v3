import PropTypes from "prop-types";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Layout({ children, location }) {
    return (
        <div className="h-screen">
            <Navigation location={location} />

            <main className="mx-auto">{children}</main>

            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
