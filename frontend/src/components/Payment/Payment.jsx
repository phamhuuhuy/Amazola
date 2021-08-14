import { Box, Button, Divider, FormControl, Grid, Paper, Typography, RadioGroup, Radio } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as changeURL, useHistory } from "react-router-dom";
import CartNav from '../CartNav/CartNav';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import useStyles from './styles'
import { savePaymentMethod } from '../../actions/cartAction';
const Payment = () => {
    const classes = useStyles()
    const cartItemsOld = useSelector((state) => state.cart.cartItems);
    const { paymentMethod, shippingAddress } = useSelector((state) => state.cart)
    const [dataForm, setDataForm] = useState({ payment: paymentMethod || "COD" })
    const dispatch = useDispatch()
    const history = useHistory()
    const subTotal = (cartItemsOld.length !== 0 ? (cartItemsOld
        .map((item) => +item.price * +item.qty)
        .reduce((a, b) => a + b)) : 0)
    const tax = (subTotal * 10) / 100
    const total = tax + subTotal
    if (!shippingAddress.address) {
        history.push('/shipping')
    }
    const handleDataForm = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    }
    const handleSubmit = () => {
        dispatch(savePaymentMethod(dataForm.payment))
        history.push('/placeorder')
    }
    return (
        <Box mt={3}>
            <CartNav current={3} />
            <Box ml={6} mr={6}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={9}>
                        <Box marginBottom={3}>
                            <Paper elevation={3}>
                                <Box>
                                    <Box ml={6} mr={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <FormControl style={{ marginTop: "10px" }} component="fieldset" fullWidth>
                                                    <RadioGroup aria-label="gender" name="payment" value={dataForm.payment} onChange={handleDataForm}>
                                                        <Grid item xs={12} sm={6} >
                                                            <FormControlLabel value="COD" control={<Radio />} label="Cash On Delivery" />
                                                        </Grid>
                                                        <Box my={2} fullWidth>
                                                            <Divider light="true" variant="fullWidth"></Divider>
                                                        </Box>
                                                        <Grid item xs={12} sm={6}>
                                                            <FormControlLabel value="MoMo" control={<Radio />} label="Pay with MoMo" />
                                                        </Grid>
                                                        {dataForm.payment === "MoMo" ? (<Box display="flex" justifyContent="center">
                                                            <img className={classes.picture} src="/momo.png" alt="momo" width="40%" />
                                                        </Box>) : null}
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
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
                                            to="/shipping"
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
                                            onClick={handleSubmit}
                                        >
                                            Continue
                                        </Button>
                                    </Grid>
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

export default Payment
