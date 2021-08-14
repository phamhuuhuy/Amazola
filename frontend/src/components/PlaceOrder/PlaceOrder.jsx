import { Box, Button, CircularProgress, Divider, Grid, Paper, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as changeURL, useHistory } from "react-router-dom";
import { createOrder } from '../../actions/orderAction';
import { ORDER_CREATE_RESET } from '../../constants/constantsOrder';
import CartNav from '../CartNav/CartNav';
const PlaceOrder = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const cartItemsOld = useSelector((state) => state.cart.cartItems);
    const cart = useSelector(state => state.cart)
    const { shippingAddress, paymentMethod } = useSelector((state) => state.cart)
    if (!cart.paymentMethod) {
        history.push('/payment')
    }
    const orderCreate = useSelector(state => state.orderCreate)
    const { loading, success, error, order } = orderCreate
    const subTotal = (cartItemsOld.length !== 0 ? (cartItemsOld
        .map((item) => +item.price * +item.qty)
        .reduce((a, b) => a + b)) : 0)
    const tax = (subTotal * 10) / 100
    const total = tax + subTotal
    cart.itemsPrice = subTotal;
    cart.taxPrice = tax;
    cart.totalPrice = total
    cart.shippingPrice = 0
    const placeOrderHandler = () => {
        dispatch(createOrder({ ...cart, orderItems: cart.cartItems }))
    }
    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [dispatch, history, order, success])
    return (
        <Box mt={3}>
            <CartNav current={4} />
            <Box ml={6} mr={6}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={9}>
                        <Box marginBottom={3}>
                            <Paper elevation={3}>
                                <Box>
                                    <Box ml={6} mr={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="h5">Shipping</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h5">Address: <span style={{ fontSize: "20px" }}>{shippingAddress.address}, {shippingAddress.ward}, {shippingAddress.district}, {shippingAddress.city}, {shippingAddress.country}</span>.</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                        <Box marginBottom={3}>
                            <Paper elevation={3}>
                                <Box>
                                    <Box ml={6} mr={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="h5">Payment</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h5">Method: <span style={{ fontSize: "20px" }}>{paymentMethod}</span>.</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                        <Box marginBottom={3}>
                            <Paper elevation={3}>
                                <Box>
                                    <Box ml={6} mr={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="h5">Order Items</Typography>
                                            </Grid>
                                            {cartItemsOld.map((item) => (
                                                <Grid item xs={12}>
                                                    <Grid container alignItems="center">
                                                        <Grid item xs="4">
                                                            <img
                                                                src={item.image}
                                                                alt="hihi"
                                                                width="40%"
                                                                height="40%"
                                                            ></img>
                                                        </Grid>
                                                        <Grid item xs="4" container justifyContent="center">
                                                            <Grid item>
                                                                <Typography variant="h5">{item.name}</Typography>
                                                            </Grid>
                                                        </Grid>

                                                        <Grid item xs="4" container justifyContent="flex-end">
                                                            <Grid item mx="auto">
                                                                <Typography variant="h5">
                                                                    {item.qty} x ${item.price} = ${item.price * item.qty}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>

                                                    </Grid>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Paper>
                            <Box p={2}>
                                <Grid container>
                                    <Grid item xs="6" container justifyContent="flex-start">
                                        <Grid item>
                                            <Typography variant="h6">Subtotal:</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs="6" container justifyContent="flex-end">
                                        <Grid item>
                                            <Typography variant="h6">
                                                $
                                                {subTotal}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs="6" container justifyContent="flex-start">
                                        <Grid item>
                                            <Typography variant="h6">Tax:</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs="6" container justifyContent="flex-end">
                                        <Grid item>
                                            <Typography variant="h6">
                                                $
                                                {tax}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs="6" container justifyContent="flex-start">
                                        <Grid item>
                                            <Typography variant="h6">Shipping:</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs="6" container justifyContent="flex-end">
                                        <Grid item>
                                            <Typography variant="h6">
                                                free
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Box my={2}>
                                    <Divider variant="middle"></Divider>
                                </Box>
                                <Grid container>
                                    <Grid item xs="12" container justifyContent="flex-end">
                                        <Grid item>
                                            <Typography variant="h5">
                                                $
                                                {total}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item xs="12" md="6">
                                        <Button
                                            component={changeURL}
                                            to="/payment"
                                            variant="outlined"
                                            color="secondary"
                                            style={{ width: "100%" }}
                                        >
                                            Back
                                        </Button>
                                    </Grid>
                                    <Grid item xs="12" md="6">
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            style={{ width: "100%" }}
                                            onClick={placeOrderHandler}
                                        >
                                            Place Order
                                        </Button>
                                    </Grid>
                                    {loading && <CircularProgress color="secondary" />}
                                    {error && <Alert severity="error">{error}</Alert>}
                                </Grid>

                            </Box>
                        </Paper>
                    </Grid>

                    {/* END RIGHT SIDE */}
                </Grid>
            </Box>
        </Box>
    )
}

export default PlaceOrder
