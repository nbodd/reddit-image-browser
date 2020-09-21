import React, {useState} from 'react'
import { Grid, Button, Container, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../css/index.css'

import {useRedditViewer} from '../providers/RedditViewerProvider'

export default function ControlBar(props) {
    const {subreddit, changeSubReddit, refreshSubReddit} = useRedditViewer();
    const [subInput, setSubInput] = useState(subreddit);

    const handleFetch = () => {
        let sub = subInput;
        if (!sub) return;

        sub = sub.trim();       

        if (sub.startsWith("r/")) {
            sub = sub.replace("r/", "")
        }

        if (sub === "") return;

        changeSubReddit(sub);
    }

    const handleRefresh = () => refreshSubReddit();

    const handleInputChange = e => setSubInput(e.target.value)

    return <>
        <Container className="control-bar-container">
            <Form onSubmit={handleFetch}>
            <Grid stackable fluid columns={3}>
                <Grid.Column width={8}>
                    <Form.Input name="subreddit" value={subInput} fluid placeholder='aww' onChange={handleInputChange} list='prefsubs'/>
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
                    <Form.Button fluid primary  type="submit">Fetch</Form.Button>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button fluid secondary type='button' onClick={handleRefresh}>Refresh</Button>
                </Grid.Column>
            </Grid>
            </Form>
        </Container>
    </>
}
