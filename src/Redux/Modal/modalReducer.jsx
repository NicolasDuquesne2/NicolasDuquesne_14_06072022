import { MODAL } from "./type"

const initialState = {
    data: false
}

const ModalReducer = (state= initialState, action) => {
    switch (action.type) {
        case MODAL:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default ModalReducer