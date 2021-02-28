import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import {translate} from "../functions/translate"
import Layout from "../templates/layout"
import Navigation from "../components/navigation"
import { motion } from "framer-motion"
import Navlang from "../components/navlang"
import Highlight from "../components/highlight"
import Footer from "../components/footer"


const PageTemplate = ({ data: {pagesJson}, data: {pageImage} }) => {  

  return (
    <Layout>
      <main className="main-page">
        <div className="cover-slide">
          <Navlang />
          <Navigation lang={pagesJson.lang} />

          <div className="cover-titolo">
            <motion.div
              initial={{ y: "-200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              {translate(pagesJson.lang, 'ristorante', 'Ristorante')}
            </motion.div>
          </div>
          <Image fluid={pageImage.childImageSharp.fluid} objectFit="cover" style={{height:"100vh", opacity: "0.7"}} />
        </div>
      </main>
      
      <Highlight lang={pagesJson.lang} />

      <Footer>{translate(pagesJson.lang, 'sonofooter', 'Sono un footer')}</Footer>
    </Layout>
  )
}

export const queryPage = graphql`
  query($pageId: String, $pageImg: String) {
    pagesJson(id: { eq: $pageId }) {
      title
      description
      image
      lang
    }

    pageImage: file(relativePath: { eq: $pageImg }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default PageTemplate

