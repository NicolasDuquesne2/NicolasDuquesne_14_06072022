//@ts-check
import React from "react"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { setModal } from '../../Redux/Modal/action'
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

    const dispatch = useDispatch()

    const onCrossClick = (() => {
        //dispatch(setModal(false))
    })

    return(
        <div className="modal-background">
            <div className="modal-container">
                <p>Employee Created</p>
                <button className="modal-leave" onClick={onCrossClick}><FontAwesomeIcon icon= {faXmark} /></button>
            </div>
        </div>
    )

}

export default ModalForm