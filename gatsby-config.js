const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
   siteMetadata: {
      siteUrl: `https://www.paolotodde.com`,
      title: `paolotodde.com`,
      description: `Paolo Todde | UI Designer | Web Designer | Product Designer | Front-end Developer`,
      author: `Paolo Todde | Designer | Developer.`,
   },
   plugins: [
      `gatsby-plugin-layout`,
      `gatsby-plugin-eslint`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-postcss`,
      `gatsby-plugin-sitemap`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-plugin-google-analytics`,
         options: {
            trackingId: "UA-80068675-1",
         },
      },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `paolotodde.com`,
            short_name: `paolotodde.com`,
            start_url: `/`,
            background_color: fullConfig.theme.colors.white,
            theme_color: fullConfig.theme.colors.white,
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
               ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : []),
            ],
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`,
         },
      },
      {
         resolve: "gatsby-plugin-web-font-loader",
         options: {
            custom: {
               families: ["YoungSerif"],
               urls: ["/fonts/fonts.css"],
            },
            google: {
               families: ["Avenir"],
            },
         },
      },
      {
         resolve: `gatsby-plugin-hotjar`,
         options: {
            includeInDevelopment: false, // optional parameter to include script in development
            id: 2084246,
            sv: 6,
         },
      },
   ],
};
