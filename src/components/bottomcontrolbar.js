import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../css/index.css'

const bar = ({}) => (
    <Container textAlign='center' className='bottom-control-bar-container'><Button primary>Fetch More Images</Button></Container>
)

export default bar
