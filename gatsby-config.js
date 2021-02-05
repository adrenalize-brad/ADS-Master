require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Adrenalize Digital Solutions',
    description:
      "At Adrenalize Digital we go beyond to build better tomorrows - today. ",
    keywords: 'Adrenalize, Digital, Solutions, Business, Web, Design, Development, Marketing',
  },
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
        downloadLocalImages: true,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
  ],
}