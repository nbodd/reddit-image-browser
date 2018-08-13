import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Image, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const calculateTotalRows = (length, cols) => {
    if (length === 0)
        return 0
    
    return parseInt(length / cols) + 1
}

const sanitizeForImgur = url => {
    if (url.includes("i.imgur.com"))
        return url
    
    if (url.includes("imgur.com"))
        return url.replace("imgur.com", "i.imgur.com")
    
    return url
}

const makeImage = (url) => (
    <Image src={url} href={sanitizeForImgur(url)} target="_blank" />
)

const makeGif = (url) => {
    // gyfcat
    if (url.includes("gfycat"))
        return <div><iframe src={url} frameborder='0' scrolling='no' width='900' height='720' allowfullscreen></iframe></div>

    if (url.includes("imgur"))
        return <div><blockquote class="imgur-embed-pub" lang="en"><a href={url}></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script></div>

    return url
}

const Gallery = ({posts, cols=3}) => {
    let pics = posts.filter(image => image.hint === "image")
    let gifs = posts.filter(image => image.hint === "link")

    let totalRows = calculateTotalRows(pics.length, cols)
    
    if (totalRows === 0)
        return <Container textAlign='center' className='gallery-container'>No Images Available</Container>
    
    let imageItems = pics.map(image => <Grid.Row>{makeImage(image.url)}</Grid.Row>)

    let imagesGrid = imageItems.reduce((cols, key, index) => (index % totalRows == 0 ? cols.push([key]) 
                                                                : cols[cols.length-1].push(key)) && cols, []);
   
    let imagesCols = imagesGrid.map((row) => <Grid.Column>{row}</Grid.Column>)
    // let gifRows = gifs.map(gif => <Grid.Row>{makeGif(gif.url)}</Grid.Row>)
    
    return <div class="gallery-container">
        <Container fluid>
        <Grid columns={cols} stackable>
            {imagesCols}
            {/* {gifRows} */}
        </Grid>
    </Container></div>
}

Gallery.propTypes = {
    posts : PropTypes.object.isRequired,
    cols : PropTypes.number
}

export default Gallery