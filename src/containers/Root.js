import React, { Component } from 'react'

import App from './App'
import RedditViewerProvider from '../providers/RedditViewerProvider'

export default class Root extends Component {
  render() {
    return (
        <RedditViewerProvider>
          <App />
        </RedditViewerProvider>
    )
  }
}
