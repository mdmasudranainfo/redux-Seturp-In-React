import { Middleware } from '@reduxjs/toolkit'

const logger: Middleware = state => next => action => {
  console.log('current state', state.getState())
  console.log('Action ', action)
  next(action)
  console.log('Update state', state.getState())
}

export default logger
