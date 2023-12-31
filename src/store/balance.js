import { createSlice } from '@reduxjs/toolkit'

export const balanceSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increase: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
      console.log("increase balance value")
    },
    decrease: (state) => {
      state.value -= 1
      console.log("decrease balance value")
    },
  },
})

// Action creators are generated for each case reducer function
export const { increase, decrease } = balanceSlice.actions

export default balanceSlice.reducer