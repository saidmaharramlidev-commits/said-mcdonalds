import { Lang } from '@/data/data'
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    lang: string,
    isNavbarOpen: boolean
}

const initialState: CounterState = {
    lang: 'az',
    isNavbarOpen: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setLang: (state, action: PayloadAction<Lang>) => {
            state.lang = action.payload

        },
        setNavbar: (state) => {
            state.isNavbarOpen = !state.isNavbarOpen

        }

    },
})

export const { setLang, setNavbar } = counterSlice.actions

export default counterSlice.reducer