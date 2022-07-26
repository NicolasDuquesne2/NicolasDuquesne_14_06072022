import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice( {
    name: 'form',
    initialState: {
        value: [],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },

        update: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { add, update } = formSlice.actions
export default formSlice.reducer