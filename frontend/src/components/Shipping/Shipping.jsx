import { Box, Button, Divider, Grid, Paper, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as changeURL, useHistory } from "react-router-dom";
import { saveShippingAddress } from '../../actions/cartAction';
import CartNav from '../CartNav/CartNav';

const Shipping = () => {
    const { userInfo } = useSelector((state) => state.userSignin);
    const { shippingAddress } = useSelector((state) => state.cart);
    const [form, setForm] = useState(shippingAddress)
    const [errorForm, setErrorForm] = useState({})
    const cartItemsOld = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch()
    const history = useHistory()
    const subTotal = (cartItemsOld.length !== 0 ? (cartItemsOld
        .map((item) => +item.price * +item.qty)
        .reduce((a, b) => a + b)) : 0)
    const tax = subTotal * 0.1
    const total = tax + subTotal
    const handleDataForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    if (!userInfo) {
        history.push('/signin')
    }
    if (cartItemsOld.length === 0) {
        history.push('/cart')
    }
    const handleValidation = () => {
        let formIsValid = true;
        let errors = {}
        if (!form.name) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        } else {
            if (!form.name.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        if (!form.phone) {
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        } else {
            if (!form.phone.match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["phone"] = "Only number";
            }
        }

        if (!form.email) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        } else {
            let lastAtPos = form.email.lastIndexOf('@');
            let lastDotPos = form.email.lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && form.email.indexOf('@@') === -1 && lastDotPos > 2 && (form.email.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid (example@gmail.com)";
            }
        }

        if (!form.address) {
            formIsValid = false;
            errors["address"] = "Cannot be empty";
        }

        if (!form.ward) {
            formIsValid = false;
            errors["ward"] = "Cannot be empty";
        }

        if (!form.district) {
            formIsValid = false;
            errors["district"] = "Cannot be empty";
        }

        if (!form.city) {
            formIsValid = false;
            errors["city"] = "Cannot be empty";
        }

        if (!form.country) {
            formIsValid = false;
            errors["country"] = "Cannot be empty";
        }

        setErrorForm(errors)
        return formIsValid
    }
    const handleSubmit = () => {
        if (handleValidation()) {
            dispatch(saveShippingAddress(form))
            history.push('/payment')
        }

    }
    return (
        <Box mt={3}>
            <CartNav current={2} />
            <Box ml={6} mr={6}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={9}>
                        <Box marginBottom={3}>
                            <Paper elevation={3}>
                                <Box>
                                    <Box pt={3}>
                                        <Grid container justifyContent="center">
                                            <Grid items>
                                                <Typography style={{ color: "#f73471" }} variant="h4" gutterBottom>
                                                    Shipping address
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box ml={6} mr={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="name"
                                                    name="name"
                                                    label="Name"
                                                    value={form.name}
                                                    onChange={handleDataForm}
                                                    fullWidth
                                                    autoFocus
                                                />
                                                {errorForm.name ? (<Alert severity="warning">
                                                    {errorForm.name}
                                                </Alert>) : null}
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="phone"
                                                    name="phone"
                                                    label="Phone"
                                                    value={form.phone}
                                                    onChange={handleDataForm}
                                                    fullWidth

                                                />
                                                {errorForm.phone ? (<Alert severity="warning">
                                                    {errorForm.phone}
                                                </Alert>) : null}
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    id="email"
                                                    name="email"
                                                    label="Email"
                                                    value={form.email}
                                                    onChange={handleDataForm}
                                                    fullWidth

                                                />
                                                {errorForm.email ? (<Alert severity="warning">
                                                    {errorForm.email}
                                                </Alert>) : null}
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="address"
                                                    name="address"
                                                    label="Address"
                                                    value={form.address}
                                                    onChange={handleDataForm}
                                                    fullWidth
                                                    required
                                                />
                                                {errorForm.address ? (<Alert severity="warning">
                                                    {errorForm.address}
                                                </Alert>) : null}
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="ward"
                                                    name="ward"
                                                    label="Ward"
                                                    value={form.ward}
                                                    onChange={handleDataForm}
                                                    fullWidth

                                                />
                                                {errorForm.ward ? (<Alert severity="warning">
                                                    {errorForm.ward}
                                                </Alert>) : null}
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField required
                                                    id="district"
                                                    name="district"
                                                    label="District"
                                                    value={form.district}
                                                    onChange={handleDataForm}
                                                    fullWidth
                                                />
                                                {errorForm.district ? (<Alert severity="warning">
                                                    {errorForm.district}
                                                </Alert>) : null}
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    id="city"
                                                    name="city"
                                                    label="City"
                                                    value={form.city}
                                                    onChange={handleDataForm}
                                                    fullWidth

                                                />
                                                {errorForm.city ? (<Alert severity="warning">
                                                    {errorForm.city}
                                                </Alert>) : null}
                                            </Grid>
                                            <Grid item xs={12} sm={6} style={{ marginBottom: "30px" }}>
                                                <TextField
                                                    required
                                                    id="country"
                                                    name="country"
                                                    label="Country"
                                                    value={form.country}
                                                    onChange={handleDataForm}
                                                    fullWidth
                                                />
                                                {errorForm.country ? (<Alert severity="warning">
                                                    {errorForm.country}
                                                </Alert>) : null}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
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
                                    <Grid item xs="6">
                                        <Button
                                            component={changeURL}
                                            to="/cart"
                                            variant="outlined"
                                            color="secondary"
                                            style={{ width: "100%" }}
                                        >
                                            Back To Cart
                                        </Button>
                                    </Grid>
                                    <Grid item xs="6">
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

export default Shipping
