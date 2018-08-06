import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const calculateTotalRows = (length, cols) => {
    if (length === 0)
        return 0
    
    return (length % cols) + 1
}

const Gallery = ({images, cols=3}) => {
    let totalRows = calculateTotalRows(images.length, cols)

    if (totalRows === 0)
        return <p>No Images Available</p>
    
    let imagesCols = images.map(url => <Grid.Column><Image src={url} href={url} target="_blank" /></Grid.Column>)

    let imagesGrid = imagesCols.reduce((rows, key, index) => (index % cols == 0 ? rows.push([key]) 
                                                                : rows[rows.length-1].push(key)) && rows, []);

    let imagesRows = imagesGrid.map((row) => <Grid.Row>{row}</Grid.Row>)

    return <Grid rows={totalRows} columns={cols}>
        {imagesRows}
    </Grid>
}

export default Gallery