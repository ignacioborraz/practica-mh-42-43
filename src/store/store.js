import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './Alert/reducer'
import textReducer from './Text/reducer'

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        text: textReducer
    }
})