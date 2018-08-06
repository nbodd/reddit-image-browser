import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


const Gallery = ({images}) => {
    let imageRows = images.map(url => <Grid.Row><Image src={url} /></Grid.Row>)
 
    return <Grid rows={images.length}>
        {imageRows}
    </Grid>
}

export default Gallery