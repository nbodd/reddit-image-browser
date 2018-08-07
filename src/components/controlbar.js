import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Input, Button, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class ControlBar extends React.Component {

    constructor(props) {
        super(props)
        this.handleFetch.bind(this)
        this.handleRefresh.bind(this)

        this.state = {
            input : ""
        }
    }

    handleFetch = () => {
        console.log('fetch click')
        this.props.onFetch(this.state.input)
    }

    handleRefresh = () => {
        console.log("refresh click")
        this.props.onRefresh(this.state.input)
    }

    render() {
        let {onFetch, onRefresh} = this.props

        return <Container>
            <Grid stackable fluid columns={3}>
                <Grid.Column width={8}>
                    <Input fluid placeholder='r/aww' onChange={e => this.setState({ input : e.target.value })} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button fluid primary onClick={this.handleFetch}>Fetch</Button>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button fluid secondary onClick={this.handleRefresh}>Refresh</Button>
                </Grid.Column>
            </Grid>
        </Container>
    }
}

ControlBar.propTypes = {
    onFetch : PropTypes.func.isRequired,
    onRefresh : PropTypes.func.isRequired
}

export default ControlBar
