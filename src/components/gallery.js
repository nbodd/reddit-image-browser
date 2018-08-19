import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Image, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

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

const makeImage = (url) => (
    <Image src={url} href={sanitizeForImgur(url)} target="_blank" />
)

// const makeGif = (url) => {
//     // gyfcat
//     if (url.includes("gfycat"))
//         return <div><iframe src={url} frameborder='0' scrolling='no' width='900' height='720' allowfullscreen></iframe></div>

//     if (url.includes("imgur"))
//         return <div><blockquote class="imgur-embed-pub" lang="en"><a href={url}></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script></div>

//     return url
// }

const Gallery = ({posts, cols=3}) => {
    let pics = posts.filter(image => image.hint === "image")
    // let gifs = posts.filter(image => image.hint === "link")

    let totalRows = calculateTotalRows(pics.length, cols)
    
    if (totalRows === 0)
        return <Container textAlign='center' className='gallery-container'>No Images Available</Container>
    
    let imageItems = pics.map(image => <Grid.Column>{makeImage(image.url)}</Grid.Column>)

    let imagesGrid = imageItems.reduce((rows, key, index) => (index % cols === 0 ? rows.push([key]) 
                                                                : rows[rows.length-1].push(key)) && rows, []);
   
    let imagesRows = imagesGrid.map((row) => <Grid.Row>{row}</Grid.Row>)
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

Gallery.propTypes = {
    posts : PropTypes.array.isRequired,
    cols : PropTypes.number
}

export default Gallery