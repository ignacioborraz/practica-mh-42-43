import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './Alert/reducer'

export const store = configureStore({
    reducer: {
        alert: alertReducer //alert tiene por ahora 3 estados: visible, success y text
    }
})