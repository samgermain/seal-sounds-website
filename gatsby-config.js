module.exports = {
    siteMetadata: {
        title: `Seal Sounds`,
        description: `Seal Soumds`,
        author: `Sam Germain`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `sounds`,
              path: `${__dirname}/src/assets/sounds`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Seal Sounds`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/seal-icon-transparent.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                // printRejected: true, // Print removed selectors and processed file names
                // purgeOnly: ['src/styles', 'src/components','node_modules/'],
                ignore: ['node_modules/@fortawesome'],
                whitelist: [],
                whitelistPatterns: []
            }
        },
    ],
}