//@ts-check
import React from "react"

/**
 * 
 * @module Error
 */


/**
 * Error renders the  error message according the error code
 * @returns {React.ReactComponentElement}
 */
function Error({type}) {

    let errorText = ""

    switch(type) {
        case "404":
            errorText = "Page not found"
            break
        case "401":
            errorText = "Restricted area. Connect to your account, please"
            break
        case "500":
            errorText = "The server has failed. Try later"
            break
        default:
    }

    return (
        <main className="main bg-dark flex">
            <section className="error-content">
                <h1>Error {type} :</h1>
                <br />
                <h1>{errorText}</h1>
            </section>
        </main>
    )
}

export default Error