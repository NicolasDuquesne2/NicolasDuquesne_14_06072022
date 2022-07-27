import { createSlice } from '@reduxjs/toolkit'

export const fieldSlice = createSlice( {
    name: 'field',
    initialState: {
        value: "",
    },
    reducers: {

        setField: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setField } = fieldSlice.actions
export default fieldSlice.reducer