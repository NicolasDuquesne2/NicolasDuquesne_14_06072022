import { configureStore } from '@reduxjs/toolkit'
import formReducer from './Form/formSlice'
import modalReducer from './Modal/modalSlice'

const store = configureStore({
    reducer: {
        form: formReducer,
        modal: modalReducer
    }
})

export default store