import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FadeInWhenVisible from "../components/scrollanimation"
import {translate} from "../functions/translate"


export default function Highlight({lang}) {
    return (
        <StaticQuery
            query={graphql`
                query {
                    highlight1: file(relativePath: { eq: "highlight1.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 640, quality: 80) {
                              ...GatsbyImageSharpFluid
                          }
                        }
                      }
                      highlight2: file(relativePath: { eq: "highlight2.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 640, quality: 80) {
                              ...GatsbyImageSharpFluid
                          }
                        }
                    }
                }
            `}
            render={ ({highlight1, highlight2}) => (
                <section className="highlights">
                    <FadeInWhenVisible>
                        <div className="highlight-item clearfix">
                            <AniLink cover bg="#000000" direction="up" to="/articolo-1">
                                <Image
                                    fluid={highlight1.childImageSharp.fluid}
                                    style={{ float: "left", width: "50%" }}
                                />
                                <div className="highlight-text"
                                    style={{ float: "right", width: "50%" }}
                                >
                                    {translate(lang, 'prodotti', 'Prodotti locali di qualità')}
                                </div>
                            </AniLink>
                        </div>
                    </FadeInWhenVisible>

                    <FadeInWhenVisible>
                        <div className="highlight-item clearfix">
                            <AniLink cover bg="#000000" direction="up" to="/articolo-2">
                                <Image
                                    fluid={highlight2.childImageSharp.fluid}
                                    style={{ float: "right", width: "50%" }}
                                />
                                <div className="highlight-text"
                                    style={{ float: "left", width: "50%", paddingLeft: "20%" }}
                                >
                                    {translate(lang, 'prodotti', 'Prodotti locali di qualità')}
                                </div>
                            </AniLink>
                        </div>
                    </FadeInWhenVisible>
                </section>
            )}
        />
    )
}
