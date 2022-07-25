import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        value: false,
    },

    reducers: {
        change: (state) => {
            switch (state.value) {
                case true:
                    state.value = false
                    break
                case false:
                    state.value = true
                    break
                default:
            }
        }
    }
})

export const { change } = modalSlice.actions
export default modalSlice.reducer