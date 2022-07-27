import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice( {
    name: 'order',
    initialState: {
        value: "asc",
    },
    reducers: {

        setOrder: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setOrder } = orderSlice.actions
export default orderSlice.reducer