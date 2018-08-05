import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Input, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const ControlBar = ({}) => (
    <Grid stackable fluid columns={3}>
        <Grid.Column width={8}>
            <Input fluid placeholder='r/aww' />
        </Grid.Column>
        <Grid.Column width={4}>
            <Button fluid primary>Fetch</Button>
        </Grid.Column>
        <Grid.Column width={4}>
            <Button fluid secondary>Refresh</Button>
        </Grid.Column>
    </Grid>
)



export default ControlBar

