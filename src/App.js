import React, { Component } from 'react';

import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import './App.css';
import ControlBar from './components/controlbar'

class App extends Component {
  render() {
    return (
        <Container>
            <ControlBar />
        </Container>
    );
  }
}

export default App;
