require('dotenv').config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `The Rock Community`,
    description: `A place of hope & faithfulness.`,
    author: `Rael Bernardino`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Roboto Condensed',
            variants: ['300', '400', '700']
          },
          {
            family: 'Roboto',
            variants: ['300', '400', '700']
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: x1fitn5l4y04,
        accessToken: f3_jGHhAoKmd8MS8GruP1UJFNmnnQZrhf4vmEpOdzYA
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
