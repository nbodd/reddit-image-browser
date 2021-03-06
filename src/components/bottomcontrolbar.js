import React from 'react'
import { Container, Button, List } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../css/index.css'

import { useRedditViewer } from '../providers/RedditViewerProvider'

export default function BottomControlBar(props) {

    const {fetchMoreImages} = useRedditViewer();

    return <>
    <Container textAlign='center' className='bottom-control-bar-container'>
        <Button primary onClick={(e) => fetchMoreImages()}>Fetch More Images</Button>
        <Button secondary onClick={(e) => window.scrollTo(0, 0)}>Back To Top</Button>
        <Container text textAlign='left' className="guide-notes-container">
            <List bulleted as='ol'>
                <List.Item as='li' value="*">Notes...
                    <List.Item as='ol'>
                        <List.Item as='li' value="-">No tracking, no cookies, no cache, no ads.... (Reddit might still track you)</List.Item>
                        <List.Item as='li' value="-">Firefox private mode - Need to disable tracking / blocking (Green lock symbol on left of address bar)</List.Item>
                    </List.Item>
                </List.Item>
                <List.Item as='li' value="*">Warning...
                    <List.Item as='ol'>
                        <List.Item as='li' value='-'>NSFW content is not filtered automatically. Sorry!!</List.Item>
                    </List.Item>
                </List.Item>
            </List>
        </Container>
    </Container>
    </>
}
