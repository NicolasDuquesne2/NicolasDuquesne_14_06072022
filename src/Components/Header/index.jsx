//@ts-check
import React from "react"
import CustomLink from "../CustomLink"
import './header.css'

/**
 * 
 * @module Header
 */


/**
 * Renders the header component
 * @param {Object} params contains a link and a title for the header
 * @returns {React.ReactComponentElement}
 */
function Header ({params}) {

    return(
        <div className="header-container">
            <h1>{params.title}</h1>
            <CustomLink link={params.link} />
        </div>
    )
}


export default Header