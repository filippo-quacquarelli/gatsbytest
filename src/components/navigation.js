import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Navigation({lang}) {
    return (
        <StaticQuery
            query={graphql`
                query {
                    allPagesJson {
                        edges {
                            node {
                                title
                                slug
                                lang
                            }
                        }
                    }
                }
            `}
            render={ ({allPagesJson}) => (
                <nav className="main-navigation">
                    <ul>
                    {allPagesJson.edges.filter(l => l.node.lang===lang).map((value, index) => {
                        return <li className="link-list" key={index}><AniLink cover bg="#000000" direction="up" to={(lang==='it' ? value.node.slug : '/'+lang+value.node.slug)}>{value.node.title}</AniLink></li>
                    })} 
                    </ul>
                </nav>
            )}
        />
    )
}
