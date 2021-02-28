module.exports = {
  siteMetadata: {
    title: "mygatsbytest",
    host: "http://localhost:8000/" 
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/data/images`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data/translates`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data/pages`,
      },
    },
  ],
};
