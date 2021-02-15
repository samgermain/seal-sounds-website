module.exports = {
  siteMetadata: {
    title: `Seal Sounds`,
    description: `Seal Sounds is a must have mobile app featuring sounds from Weddell, Grey, and Harp seals`,
    author: `Sam Germain`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-preact`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/seal-icon-transparent.png`, // This path is relative to the root of the site.
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
    }
  ],
}
