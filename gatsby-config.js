const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.paolotodde.com`,
        title: `paolotodde.com`,
        description: `UI Designer | Web Designer | Product Designer | Front-end Developer`,
        author: `Paolo Todde | Designer | Developer`,
    },
    plugins: [
        `gatsby-plugin-layout`,
        `gatsby-plugin-eslint`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-sitemap`,
        // {
        //     resolve: `gatsby-plugin-google-analytics`,
        //     options: {
        //         trackingId: "",
        //     },
        // },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `paolotodde.com`,
                short_name: `starter`,
                start_url: `/`,
                background_color: fullConfig.theme.colors.white,
                theme_color: fullConfig.theme.colors.teal["300"],
                display: `minimal-ui`,
                icon: `src/images/logo.svg`,
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require(`tailwindcss`)(tailwindConfig),
                    require(`autoprefixer`),
                    ...(process.env.NODE_ENV === `production`
                        ? [require(`cssnano`)]
                        : []),
                ],
            },
        },
        `gatsby-plugin-offline`,
    ],
};
