import { configureStore } from '@reduxjs/toolkit'
import formReducer from './Form/formSlice'
import modalReducer from './Modal/modalSlice'
import orderSlice from './Table/orderSlice'
import fieldSlice from './Table/fieldSlice'

const store = configureStore({
    reducer: {
        form: formReducer,
        modal: modalReducer,
        order: orderSlice,
        field: fieldSlice
    }
})

export default store