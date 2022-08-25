//@ts-no-check
import React from "react"
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux/es/exports"
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
 * @param {Object} params contains text
 * @returns {React.ReactComponentElement}
 */

function ModalForm({params}) {
    const text = params.text
    const displayModal = useSelector(state => state.modal.value)
    const dispatch = useDispatch()

    const onCrossClick = (() => {
        dispatch(change())
    })

    return(
        <Modal
            isOpen={displayModal}
            onRequestClose={onCrossClick}
            className="modal-container"
            overlayClassName="modal-background"
            contentLabel="Example Modal"
            parentSelector={() => document.querySelector('#main')}
        >
            <p>{text}</p>
            <button className="modal-leave" onClick={onCrossClick}><FontAwesomeIcon icon= {faXmark} /></button>
        </Modal>
    )

}

export default ModalForm

/**
 * <div className="modal-container">
                
            </div>
 */