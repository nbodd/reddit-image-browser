import React, { Component } from 'react';

import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import './App.css';
import ControlBar from './components/controlbar'
import Gallery from './components/gallery'

import fetchSubredditImages from './actions'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images : []
        }

        this.updateImages = this.updateImages.bind(this)
        fetchSubredditImages("earthporn", this.updateImages)
    }

    updateImages(images) {
        this.setState({images})
    }

    render() {
        return (
            <Container>
                <ControlBar />
                <Gallery {...this.state} />
            </Container>
        );
  }
}

export default App;
