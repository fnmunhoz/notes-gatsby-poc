module.exports = {
  siteMetadata: {
    title: `notes.munhoz.dev`,
    description: `Felipe Munhoz's developer notes`,
    author: `Felipe Munhoz`,
    siteUrl: `https://notes.munhoz.dev`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Notes`,
        short_name: `Notes`,
        start_url: `/`,
        background_color: `#2b303b`,
        theme_color: `#2b303b`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}
