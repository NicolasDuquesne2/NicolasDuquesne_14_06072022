import React from "react"
import Error from "../../Components/Error"


function ErrorPage({type}) {

    return (
        <React.Fragment>
            <Error type={type} />
        </React.Fragment>
    )
}

export default ErrorPage