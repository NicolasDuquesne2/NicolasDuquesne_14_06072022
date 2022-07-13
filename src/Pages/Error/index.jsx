//@ts-check
import React from "react"
import Error from "../../Components/Error"

/**
 * 
 * @module ErrorPage
 */


/**
 * Renders the error page
 * @returns {React.ReactComponentElement}
 */
function ErrorPage({type}) {

    return (
        <React.Fragment>
            <Error type={type} />
        </React.Fragment>
    )
}

export default ErrorPage