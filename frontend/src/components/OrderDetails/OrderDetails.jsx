import { Box, Button, CircularProgress, Divider, Grid, Paper, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as changeURL, useParams } from "react-router-dom";
import { detailsOrder } from '../../actions/orderAction';

const OrderDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { order, loading, error } = useSelector((state) => state.orderDetails)
    useEffect(() => {
        dispatch(detailsOrder(id))
    }, [dispatch, id])
    return loading ? (
        <CircularProgress color="secondary" />
    ) : error ? (
        <Alert severity="error">{error}</Alert>
    ) : (
        <Box mt={3}>
            <Box Box ml={6} mr={6} >
                <Grid container spacing={5}>
                    <Grid item xs={12} md={9}>
                        <Box marginBottom={3}>
                            <Paper elevation={3} style={{ padding: "30px" }}>
                                <Box>
                                    <Box ml={6} mr={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="h5">Shipping</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h5">Address: <span style={{ fontSize: "20px" }}>{order.shippingAddress.address}, {order.shippingAddress.ward}, {order.shippingAddress.district}, {order.shippingAddress.city}, {order.shippingAddress.country}</span>.</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                {order.isDelivered ? (<Alert severity="success">Delivered at {order.deliveriedAt}</Alert>) : (<Alert severity="error">Not Deliveried</Alert>)}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                        <Box marginBottom={3}>
                            <Paper elevation={3} style={{ padding: "30px" }}>
                                <Box>
                                    <Box ml={6} mr={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="h5">Payment</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h5">Method: <span style={{ fontSize: "20px" }}>{order.paymentMethod}</span>.</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                {order.isPaid ? (<Alert severity="success">Delivered at {order.paidAt}</Alert>) : (<Alert severity="error">Not Paid</Alert>)}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                        <Box marginBottom={3}>
                            <Paper elevation={3} style={{ padding: "30px" }}>
                                <Box>
                                    <Box ml={6} mr={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="h5">Order Items</Typography>
                                            </Grid>
                                            {order.orderItems.map((item) => (
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
                                                {order.itemsPrice}
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
                                                {order.taxPrice}
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
                                                {order.totalPrice}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item xs="12">
                                        <Button
                                            component={changeURL}
                                            to="/orderhistory"
                                            variant="outlined"
                                            color="secondary"
                                            style={{ width: "100%" }}
                                        >
                                            Back to history
                                        </Button>
                                    </Grid>
                                </Grid>

                            </Box>
                        </Paper>
                    </Grid>

                    {/* END RIGHT SIDE */}
                </Grid>
            </Box>
        </Box >
    )
}

export default OrderDetails
