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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto`,
              variants: ["100", "300", "400", "500", "700", "900"]
            },
            {
              family: `Roboto Condensed`,
              variants: ["100", "300", "400", "500", "700", "900"]
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
