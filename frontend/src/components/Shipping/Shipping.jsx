import { Box, Button, Divider, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link as changeURL } from "react-router-dom";
import CartNav from '../CartNav/CartNav';

const Shipping = () => {
    const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", ward: "", district: "", city: "", country: "" })
    const cartItemsOld = useSelector((state) => state.cart.cartItems);
    const handleDataForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
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
                                                <Typography variant="h4" gutterBottom>
                                                    Shipping address
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box ml={6} mr={6}>
                                        <Grid container spacing={3}>
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
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField required
                                                    id="district"
                                                    name="district"
                                                    label="District"
                                                    value={form.district}
                                                    onChange={handleDataForm}
                                                    fullWidth />
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
                                            <Typography variant="h5">Total</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs="6" container justifyContent="flex-end">
                                        <Grid item>
                                            <Typography variant="h5">
                                                $
                                                {cartItemsOld
                                                    .map((item) => +item.price * +item.qty)
                                                    .reduce((a, b) => a + b)}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Box my={2}>
                                    <Divider variant="middle"></Divider>
                                </Box>
                                <Button
                                    component={changeURL}
                                    to="/signin?redirect=shipping"
                                    variant="contained"
                                    color="secondary"
                                    style={{ width: "100%" }}
                                >
                                    PROCESS TO PAYMENT
                                </Button>
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
