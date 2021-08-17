import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';

import Rating from '@material-ui/lab/Rating';
import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';



const Product = ({ product }) => {
    const classes = useStyles()
    return (
        <Card className={classes.root} elevation={6}>
            <CardHeader
                title={product.name}
                style={{ textAlign: 'center' }}
            />
            <CardMedia
                className={classes.media}
                image={product.image}
                title="Paella dish"
            />
            <CardContent className={classes.cardContent}>
                <Box display="flex" alignItems="center" mt={1} >
                    <Box borderColor="transparent">
                        <Rating name="read-only" value={product.rating} precision={0.5} readOnly />
                    </Box>
                    <Box ml={2} borderColor="transparent">
                        | {product.numReviews} sold
                    </Box>
                </Box>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Typography variant="h6" style={{ color: '#f73471' }}>${product.price}</Typography>
                <Button component={Link} to={`/product/${product._id}`} variant="contained" style={{ borderRadius: '20px', backgroundColor: '#f73471', color: '#fff' }}>View Detail</Button>
            </CardActions>
        </Card>
    )
}

export default Product
