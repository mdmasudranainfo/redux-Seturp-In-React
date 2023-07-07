import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './features/Counter/CounterSlice'
import logger from './middleware'

const store = configureStore({
  reducer: {
    // connect store
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export default store
