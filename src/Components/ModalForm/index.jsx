//@ts-no-check
import React from "react"
import { useDispatch } from "react-redux/es/exports"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { change } from '../../Redux/Modal/modalSlice'
import './modal.css'

/**
 * 
 * @module ModalForm
 */


/**
 * Renders a modal displaying a message for the adding peaple form 
 * @returns {React.ReactComponentElement}
 */
function ModalForm({params}) {
    const text = params.text

    const dispatch = useDispatch()

    const onCrossClick = (() => {
        dispatch(change())
    })

    return(
        <div className="modal-background">
            <div className="modal-container">
                <p>{text}</p>
                <button className="modal-leave" onClick={onCrossClick}><FontAwesomeIcon icon= {faXmark} /></button>
            </div>
        </div>
    )

}

export default ModalForm