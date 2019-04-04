import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux'

import thunk from 'redux-thunk'

import axiosMiddleware from '@redux/middleware/axiosMiddleware'

import rootReducers from './reducer'

export default function configStore(initialState) {
  const middleware = [
    thunk,
    axiosMiddleware(),
  ]

  const store = createStore(rootReducers, initialState, compose(
    applyMiddleware(...middleware),
  ))

  return store
}
