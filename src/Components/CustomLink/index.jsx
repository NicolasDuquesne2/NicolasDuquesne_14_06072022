import React from "react"

function CustomLink({link}) {
    return(
        <React.Fragment>
            <a className="cust-link" href={link.href}>{link.text}</a>
        </React.Fragment>
    )
}

export default CustomLink