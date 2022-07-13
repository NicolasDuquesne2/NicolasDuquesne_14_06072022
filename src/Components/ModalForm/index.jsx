//@ts-check
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './modal.css'

/**
 * 
 * @module ModalForm
 */


/**
 * Renders a modal displaying a message for the adding peaple form 
 * @returns {React.ReactComponentElement}
 */
function ModalForm() {

    return(
        <div className="modal-background">
            <div className="modal-container">
                <p>Employee Created</p>
                <button className="modal-leave"><FontAwesomeIcon icon= {faXmark} /></button>
            </div>
        </div>
    )

}

export default ModalForm