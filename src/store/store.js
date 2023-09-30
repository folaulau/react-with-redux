import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './cart.js'
import balanceReducer from './balance.js'

export default configureStore({
    reducer: {
        counter: counterReducer,
        balancer: balanceReducer,
    },
})