import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Navlang() {
    return (
        <nav className="main-navlang">
            <ul>
                <li className="link-list">
                    <AniLink cover bg="#000000" direction="up" to="/">IT</AniLink>
                </li>
                <li className="link-list">
                    <AniLink cover bg="#000000" direction="up" to="/en">EN</AniLink>
                </li>
            </ul>
        </nav>
    )
}