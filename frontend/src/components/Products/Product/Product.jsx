import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography, CardActions } from '@material-ui/core'
import useStyles from './styles';
import logo from '../../../assets/IMG_3692.jpg'
import Rate from './Rating/Rate';
import { Link } from 'react-router-dom';



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
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
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
