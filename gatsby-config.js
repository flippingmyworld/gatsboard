module.exports = {
  siteMetadata: {
    title: `Gatsboard`,
    description: `The Funky Gatsboard is a soundboard made with GatsbyJS.`,
    author: `@flippingmyworld`,
  },
  plugins: [
    'gatsby-plugin-loadable-components-ssr',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Questrial',
              variants: ['400', '700'],
            },
          ],
        },
      },
    },{
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {"/*": [
          "Referrer-Policy: strict-origin-when-cross-origin",
        ],}, 
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Macaw`,
        short_name: `Macaw`,
        display: `standalone`,
        start_url: `/`,
        background_color: `#0F2026`,
        theme_color: `#F23064`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
