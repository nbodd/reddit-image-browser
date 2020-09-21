import React from 'react';

import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import ControlBar from '../components/topcontrolbar'
import Gallery from '../components/gallery'
import BottomControlBar from '../components/bottomcontrolbar'


export default function() {
    return <>
        <Container fluid>
            <ControlBar id="top-bar" />
            <Gallery />
            <BottomControlBar />
        </Container>
    </>
}
