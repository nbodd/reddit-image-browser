import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Input, Button, Container, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class ControlBar extends React.Component {

    constructor(props) {
        super(props)
        this.handleFetch.bind(this)
        this.handleRefresh.bind(this)
        this.handleChange.bind(this)

        this.state = {
            subreddit : ""
        }
    }

    handleFetch = () => {
        console.log('fetch click')
        this.props.onFetch(this.state.subreddit)
    }

    handleRefresh = () => {
        console.log("refresh click")
        this.props.onRefresh(this.state.subreddit)
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        let {onFetch, onRefresh} = this.props
        let {subreddit} = this.state
        return <Container>
            <Form onSubmit={this.handleFetch}>
            <Grid stackable fluid columns={3}>
                <Grid.Column width={8}>
                    <Form.Input name="subreddit" value={subreddit} fluid placeholder='r/aww' onChange={this.handleChange} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Button fluid primary  content="submit">Fetch</Form.Button>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button fluid secondary onClick={this.handleRefresh}>Refresh</Button>
                </Grid.Column>
            </Grid>
            </Form>
        </Container>
    }
}

ControlBar.propTypes = {
    onFetch : PropTypes.func.isRequired,
    onRefresh : PropTypes.func.isRequired
}

export default ControlBar
