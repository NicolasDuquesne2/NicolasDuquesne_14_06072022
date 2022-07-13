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
 * @returns {React.ReactComponentElement}
 */
function Header (params) {
    const pars = params.params
    return(
        <div className="header-container">
            <h1>{pars.title}</h1>
            <CustomLink link={pars.link} />
        </div>
    )
}


export default Header