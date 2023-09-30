import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './cart.js'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})