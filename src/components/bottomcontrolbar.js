import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../css/index.css'

const BottomControlBar = ({onFetch}) => (
    <Container textAlign='center' className='bottom-control-bar-container'>
        <Button primary /* onClick={onFetch()} */>Fetch More Images</Button>
    </Container>
)

BottomControlBar.propTypes = {
    onFetch : PropTypes.func.isRequired,
}

export default BottomControlBar
