import React, { Component } from 'react';

import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import ControlBar from './controlbar'
import Gallery from './gallery'
import BottomControlBar from '../components/bottomcontrolbar'

import fetchSubredditImages from '../actions'

class App extends Component {
    render() {
        return (
            <Container fluid>
                <ControlBar />
                <Gallery />
                <BottomControlBar />
            </Container>
        );
    }
}

export default App;
