import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Image } from 'semantic-ui-react'
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

const Gallery = ({images, cols=3}) => {
    let pics = images.filter(image => image.hint === "image")
    let gifs = images.filter(image => image.hint === "link")

    let totalRows = calculateTotalRows(pics.length, cols)
    
    if (totalRows === 0)
        return <p>No Images Available</p>
    
    let imagesBlocks = pics.map(image => <Grid.Row>{makeImage(image.url)}</Grid.Row>)

    let imagesGrid = imagesBlocks.reduce((rows, key, index) => (index % totalRows == 0 ? rows.push([key]) 
                                                                : rows[rows.length-1].push(key)) && rows, []);
   
    let imagesRows = imagesGrid.map((row) => <Grid.Column>{row}</Grid.Column>)
    // let gifRows = gifs.map(gif => <Grid.Row>{makeGif(gif.url)}</Grid.Row>)
    
    return <Grid rows={totalRows} columns={cols}>
        {imagesRows}
        {/* {gifRows} */}
    </Grid>
}

export default Gallery