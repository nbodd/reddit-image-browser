import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../css/index.css'

const BottomControlBar = ({onFetch}) => (
    <Container textAlign='center' className='bottom-control-bar-container'>
        <Button primary onClick={(e) => onFetch()}>Fetch More Images</Button>
        <Button secondary onClick={(e) => window.scrollTo(0, 0)}>Back To Top</Button>
    </Container>
)

BottomControlBar.propTypes = {
    onFetch : PropTypes.func.isRequired,
}

export default BottomControlBar
