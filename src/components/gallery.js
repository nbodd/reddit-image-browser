import React from 'react'
import { Grid, Image, Container, Card, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import {useRedditViewer} from "../providers/RedditViewerProvider"

const calculateTotalRows = (length, cols) => {
    if (length === 0)
        return 0
    
    return parseInt(length / cols, 10) + 1
}

const sanitizeForImgur = url => {
    if (url.includes("i.imgur.com"))
        return url
    
    if (url.includes("imgur.com"))
        return url.replace("imgur.com", "i.imgur.com")
    
    return url
}

const makeImage = ({image, style={}}) => (
    <div style={style}>
        <Card fluid>
            <Card.Content textAlign='center'>
                <Card.Header>{image.title}</Card.Header>
            </Card.Content>
            <Image src={image.url} href={sanitizeForImgur(image.url)} target="_blank" />
            <Card.Content textAlign='center' extra>
                <a href={"https://reddit.com" + image.permalink} target="_blank"><Icon name='reddit' size='huge'></Icon></a>
            </Card.Content>
        </Card>
    </div>
)

// const makeGif = (url) => {
//     // gyfcat
//     if (url.includes("gfycat"))
//         return <div><iframe src={url} frameborder='0' scrolling='no' width='900' height='720' allowfullscreen></iframe></div>

//     if (url.includes("imgur"))
//         return <div><blockquote class="imgur-embed-pub" lang="en"><a href={url}></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script></div>

//     return url
// }

const isImageDomain = domain => domain.includes("imgur") || domain.includes("i.redd");

const filterImagesByDomains = (imagePosts) => {
    return imagePosts.filter(imagePost => isImageDomain(imagePost.domain));
}

const ImagesRow = (props) => {
    return <Grid.Row>{props.row}</Grid.Row>
}

const Gallery = ({cols=3}) => {
    const {posts} = useRedditViewer();

    let pics = filterImagesByDomains(posts);
    if (pics.length === 0)
        return <Container textAlign='center' className='gallery-container'>No Images Available</Container>

    // let totalRows = calculateTotalRows(pics.length, cols)
    
    let imageItems = pics.map((image, index) => <Grid.Column key={index}>{makeImage({image})}</Grid.Column>)

    let imagesGrid = imageItems.reduce((rows, key, index) => (index % cols === 0 ? rows.push([key]) 
                                                                : rows[rows.length-1].push(key)) && rows, []);
   
    let imagesRows = imagesGrid.map((row, index) => <Grid.Row key={index}>{row}</Grid.Row>)
    
    // let gifRows = gifs.map(gif => <Grid.Row>{makeGif(gif.url)}</Grid.Row>)
    
    return <div className="gallery-container">
        <Container fluid>
        <Grid columns={cols} stackable>
            {imagesRows}
            {/* {gifRows} */}
        </Grid>
    </Container>
    </div>
}

export default Gallery
