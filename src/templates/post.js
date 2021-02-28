import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
// import {translate} from "../functions/translate"
import Layout from "./layout"

const Post = ({ data: {postsJson}, data: {postImage} }) => {
  
  return (
    <Layout>
      <h1>{postsJson.title}</h1>
      <Image
        fluid={postImage.childImageSharp.fluid}
        style={{ float: "left", marginRight: "1rem", width: "50%" }}
      />
    </Layout>
  )
}

export const queryPost = graphql`
  query($postId: String, $postImg: String) {
    postsJson(id: { eq: $postId }) {
      title
      description
      image
      lang
    }

    postImage: file(relativePath: { eq: $postImg }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Post