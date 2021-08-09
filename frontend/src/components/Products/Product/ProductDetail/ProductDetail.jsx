import { Box, Button, CircularProgress, Container, Grid, Snackbar, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Alert from '@material-ui/lab/Alert';
import { useParams } from 'react-router-dom'
import useStyles from './Styles'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { detailsProduct } from '../../../../actions/productActions';
import { addToCart } from '../../../../actions/cartAction';

function Alert1(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ProductDetail = () => {
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const [quantity, setQuantity] = useState(1)
    const { loading, error, product } = productDetails
    const { id } = useParams()
    const classes = useStyles()
    const [open, setOpen] = useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product, quantity))
        setOpen(true)
    }



    useEffect(() => {
        dispatch(detailsProduct(id))
    }, [dispatch, id])

    return (
        <div>
            <Snackbar style={{ marginTop: "40px" }} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert1 onClose={handleClose} severity="success">
                    Your products is added in cart!
                </Alert1>
            </Snackbar>
            <Container style={{ marginTop: "20px" }}>
                {loading ? (
                    <CircularProgress color="secondary" />
                ) : error ? (
                    <Alert severity="error">{error}</Alert>
                ) : (<Grid container
                    spacing={2}
                >
                    <Grid className={classes.root} container item xs={12} md={6}>
                        <img src="https://picsum.photos/500/500" alt="hello" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className={classes.sub}>
                            <Typography variant="h3">{product.name}</Typography>

                            <Box mt={1} mb={1} display="flex">
                                <Rating size="small" name="read-only" value={product.rating} precision={0.5} readOnly />
                                <Typography variant="body2" >({product.numReviews})</Typography>
                            </Box>
                            <Box mt={2} mb={2}>
                                <Typography variant="h4" color="error">${product.price}</Typography>
                            </Box>

                            <Typography variant="body1" color="textSecondary">{product.description}</Typography>
                            <Box display="flex">
                                <Box display="flex" justifyContent="center" mt={3} style={{ backgroundColor: "#e0e0e0", width: "140px", border: "1px solid" }}>
                                    <Box my="auto" style={{ borderRight: "1px solid" }}>
                                        <Button onClick={() => {
                                            if (quantity > 1) {
                                                setQuantity(quantity - 1)
                                            }
                                        }}
                                            style={{ maxWidth: '50px', maxHeight: '40px', minWidth: '50px', minHeight: '40px' }}
                                            type="button"
                                            size="large"
                                        >
                                            -
                                        </Button>
                                    </Box>
                                    <Box my="auto">
                                        {/* <Typography>&nbsp;1&nbsp;</Typography> */}
                                        <input
                                            className={classes.input}
                                            type="number"
                                            style={{
                                                width: "40px", border: "none",
                                                backgroundColor: "#e0e0e0",
                                                height: "20px",
                                                fontSize: "20px",
                                                textAlign: "center"
                                            }} value={quantity} onChange={(e) => { setQuantity(+e.target.value) }}></input>
                                    </Box>
                                    <Box my="auto" style={{ borderLeft: "1px solid" }}>
                                        <Button onClick={() => { setQuantity(quantity + 1) }} style={{ maxWidth: '50px', maxHeight: '40px', minWidth: '50px', minHeight: '40px' }} type="button" size="large" >+</Button>
                                    </Box>

                                </Box>
                                <Box mt={3} ml={3}>
                                    <Button onClick={() => handleAddToCart(product)} variant="contained" color="secondary" style={{ color: "#f73471", height: "40px" }}>
                                        <Typography style={{ color: "white" }}>ADD TO CART</Typography>
                                    </Button>
                                </Box>
                                <Box display="flex" mt={3} ml={3} style={{ backgroundColor: "#e0e0e0", width: "50px", height: "40px" }}>
                                    <Box m="auto">
                                        <Button style={{ maxWidth: '50px', maxHeight: '40px', minWidth: '50px', minHeight: '40px' }} type="button" size="large"><FavoriteBorderIcon variant="contained" color="secondary" style={{ color: "#f73471" }}>
                                        </FavoriteBorderIcon></Button>

                                    </Box>
                                </Box>


                            </Box>
                            <Box mt={3} style={{ borderBottom: "2px solid #e0e0e0" }}>

                            </Box>
                            <Box mt={2}>
                                <Grid container spacing={5}>
                                    <Grid item style={{ fontSize: "20px" }}>
                                        <b>Availability</b>
                                    </Grid>
                                    <Grid item style={{ fontSize: "20px", marginLeft: "60px" }}>
                                        In stock
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box mt={2}>
                                <Grid container spacing={5}>
                                    <Grid item style={{ fontSize: "20px" }}>
                                        <b>Availability</b>
                                    </Grid>
                                    <Grid item style={{ fontSize: "20px", marginLeft: "60px" }}>
                                        In stock
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box mt={2}>
                                <Grid container spacing={5}>
                                    <Grid item style={{ fontSize: "20px" }}>
                                        <b>Availability</b>
                                    </Grid>
                                    <Grid item style={{ fontSize: "20px", marginLeft: "60px" }}>
                                        In stock
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box mt={2}>
                                <Grid container spacing={5}>
                                    <Grid item style={{ fontSize: "20px" }}>
                                        <b>Availability</b>
                                    </Grid>
                                    <Grid item style={{ fontSize: "20px", marginLeft: "60px" }}>
                                        In stock
                                    </Grid>
                                </Grid>
                            </Box>



                        </Box>


                    </Grid>
                </Grid>
                )}

            </Container>
        </div>
    )
}

export default ProductDetail
