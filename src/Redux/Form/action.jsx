import {FORM} from "./type"

const form = (formDatas) => {
    return {
        type: FORM,
        payload: formDatas
    }
}


export const setForm = (formDatas) => {
    return dispatch => {
        dispatch(form(formDatas))
    }
}