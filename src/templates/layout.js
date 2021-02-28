import React from "react"
import "../css/style.css"
import "fontsource-open-sans"
import "fontsource-open-sans/600.css"
import "fontsource-open-sans/800.css"
import "@fontsource/newsreader"


export default function Layout({ children }) {
    return (
        <div className="container-page">
            {children}
        </div>
    )
}