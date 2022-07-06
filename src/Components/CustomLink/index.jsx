import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faHouse } from '@fortawesome/free-solid-svg-icons'
import './customlink.css'

function CustomLink({link}) {
    let icon = ""

    switch (link.text) {
        case "Home":
            icon = <FontAwesomeIcon icon= {faHouse} />
            break
        case "View current employees":
            icon = <FontAwesomeIcon icon= {faPeopleGroup} />
            break
        default:
    }

    return(
        <div className="link-container">
            {icon}
            <a className="cust-link" href={link.href}>{link.text}</a>
        </div>
    )
}

export default CustomLink