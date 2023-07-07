import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface counterSate {
  count: number
}

const initialState: counterSate = {
  count: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count = state.count + 1
    },
    drcrement: state => {
      state.count = state.count - 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload
    },
  },
})

export const { increment, drcrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
