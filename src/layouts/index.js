import PropTypes from "prop-types";
import React from "react";
import Navigation from "../components/base/Navigation";
import Footer from "../components/base/Footer";
import SEO from "../components/Seo";
// import { SpacexLaunchesProvider } from "../context/SpacexLaunchesContext";
import SimpleReactLightbox from "simple-react-lightbox";

function Layout({ children }) {
    return (
        <>
            <SEO
                keywords={[
                    `UI Designer`,
                    `Web Designer`,
                    `Product Designer`,
                    `Front-end Developer`,
                ]}
                title="Home"
            />
            <SimpleReactLightbox>
                <Navigation />

                <main>{children}</main>

                <Footer />
            </SimpleReactLightbox>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
