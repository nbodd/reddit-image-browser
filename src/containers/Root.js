import React, { Component } from 'react'
import { Provider } from 'react-redux'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

import App from './App'

const loggerMiddleware = createLogger()

let initialState = {
    activesub : "aww",
    subredditdata : {
        aww : {
           posts : []
       }
    }
}

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

export default class Root extends Component {
  render() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
  }
}
