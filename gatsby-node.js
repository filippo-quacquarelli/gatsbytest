

// const path = require(`path`)
const language_config = require('./data/languages/language_config.js')
// const translations_cache = {}

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}


// Create blog pages dynamically

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const contents = await graphql(`
    {
      allPostsJson {
        edges {
          node {
            slug
            id
            lang
            image
          }
        }
      }

      allPagesJson {
        edges {
          node {
            slug
            id
            lang
            image
          }
        }
      }
    }
  `)

  contents.data.allPostsJson.edges.forEach(edge => {
    var post = edge.node
    var { path, is_default } = language_config[post.lang]
    var localized_path = is_default ? post.slug : `${path}${post.slug}`

    
    createPage({
      // path: `/${post.slug}/`,
      path: localized_path,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: localized_path,
        postId: post.id,
        postLang: post.lang,
        postImg: post.image
      },
    })
  }) 

  contents.data.allPagesJson.edges.forEach(edge => {
    var post = edge.node
    var { path, is_default } = language_config[post.lang]
    var localized_path = is_default ? post.slug : `${path}${post.slug}`

    
    createPage({
      // path: `/${post.slug}/`,
      path: localized_path,
      component: require.resolve("./src/templates/page.js"),
      context: {
        slug: localized_path,
        pageId: post.id,
        pageLang: post.lang,
        pageImg: post.image
      },
    })
  }) 
}

