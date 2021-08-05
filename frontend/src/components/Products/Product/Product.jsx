import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';
import { Link } from 'react-router-dom';
import Rate from './Rating/Rate';
import useStyles from './styles';



const Product = ({ product }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} elevation={3}>
            <CardHeader

                title={product.name}

            />
            <CardMedia
                className={classes.media}
                image={product.image}
                title="Paella dish"
            />
            <CardContent>

                <Rate rate={product.rating} review={product.numReviews} />
            </CardContent>
            <CardActions disableSpacing>
                <Typography>
                    {product.price}$
                </Typography>
                <IconButton component={Link} to={`/product/${product._id}`} style={{ marginLeft: "auto" }} aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>

            </CardActions>

        </Card >
    )
}

export default Product
