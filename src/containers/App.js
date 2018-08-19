import React, { Component } from 'react';

import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import ControlBar from './topcontrolbar'
import Gallery from './gallery'
import BottomControlBar from './bottomcontrolbar'


class App extends Component {
    render() {
        return (
            <Container fluid>
                <ControlBar id="top-bar" />
                <Gallery />
                <BottomControlBar />
            </Container>
        );
    }
}

export default App;
