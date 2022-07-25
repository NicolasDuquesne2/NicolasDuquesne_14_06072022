import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice( {
    name: 'form',
    initialState: {
        value: [],
    },
    reducers: {
        add: (state, action) => {
            console.log(action.payload)
            state.value.push(action.payload)
        }
    }
})

export const { add } = formSlice.actions
export default formSlice.reducer