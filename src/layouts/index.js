import PropTypes from "prop-types";
import React from "react";
import Navigation from "../components/base/Navigation";
import Footer from "../components/base/Footer";
import { SpacexLaunchesProvider } from "../context/SpacexLaunchesContext";
import SimpleReactLightbox from "simple-react-lightbox";

function Layout({ children }) {
    return (
        <>
            <SpacexLaunchesProvider>
                <SimpleReactLightbox>
                    <Navigation />

                    <main className="bg-black">{children}</main>

                    <Footer />
                </SimpleReactLightbox>
            </SpacexLaunchesProvider>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
