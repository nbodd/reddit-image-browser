import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, Container, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../css/index.css'

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
        let sub = this.state.subreddit
        sub = sub.trim()
        if (sub.startsWith("r/")) {
            sub = sub.replace("r/", "")
        }

        this.props.onFetch(sub)
    }

    handleRefresh = () => {
        this.props.onRefresh(this.state.subreddit)
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        let {subreddit} = this.state
        return <Container className="control-bar-container">
            <Form onSubmit={this.handleFetch}>
            <Grid stackable fluid columns={3}>
                <Grid.Column width={8}>
                    <Form.Input name="subreddit" value={subreddit} fluid placeholder='aww' onChange={this.handleChange} list='prefsubs'/>
                    <datalist id="prefsubs">
                        <option value='aww' />
                        <option value='earthporn' />
                        <option value='historyinpics' />
                        <option value='historyporn' />
                        <option value='hdpics' />
                        <option value='images' />
                        <option value='dogs' />
                        <option value='cats' />
                    </datalist>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form.Button fluid primary  content="submit">Fetch</Form.Button>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button fluid secondary type='button' onClick={this.handleRefresh}>Refresh</Button>
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
