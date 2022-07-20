import {MODAL} from "./type"

const modal = (displayModal) => {
    return {
        type: MODAL,
        payload: displayModal
    }
}


export const setModal = (displayModal) => {
    return dispatch => {
        dispatch(modal(displayModal))
    }
}