import { FORM } from "./type"

const initialState = {
    data: []
}

const FormReducer = (state= initialState, action) => {
    switch (action.type) {
        case FORM:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default FormReducer