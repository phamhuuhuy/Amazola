import {
    Box,
    Button,
    ButtonGroup,
    Dialog,
    DialogActions, DialogTitle,
    Divider,
    Grid,
    IconButton, Link, Paper, Slide, Snackbar, Typography
} from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from "@material-ui/icons/Delete";
import { default as Alert, default as MuiAlert } from "@material-ui/lab/Alert";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as changeURL } from "react-router-dom";
import { removeAllCartItems, removeCartItems, updateCartItems } from "../../actions/cartAction";
import CartNav from "../CartNav/CartNav";
import useStyles from "./styles";

function Alert1(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Cart = () => {
    const classes = useStyles();
    const cartItemsOld = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const [warningQuantity, setWarningQuantity] = useState(false);
    const [confirmRemove, setConfirmRemove] = useState(false);
    const [removeItem, setRemoveItem] = useState(null)

    const handleClickOpenConfirmRemove = (item) => {
        setConfirmRemove(true);
        setRemoveItem(item)
    };

    const handleCloseConfirmRemove = () => {
        setConfirmRemove(false);
        setRemoveItem(null)
    };

    const handleCloseWarningQuantity = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setWarningQuantity(false);
    };

    const handleRemoveAllItems = () => {
        dispatch(removeAllCartItems())
    }

    const handleUpdateItem = (item, qty) => {
        dispatch(updateCartItems(item, qty));
    };

    const handleRemoveItem = (item) => {
        dispatch(removeCartItems(item))
    }

    if (cartItemsOld.length === 0) {
        return (
            <Box mt={3} m={3} >
                {/* Don't have any item in cart */}
                <Alert severity="error">
                    Your Cart is Empty!{" "}
                    <Link component={changeURL} to="/products">
                        Go back the product
                    </Link>
                </Alert>
            </Box>
        );
    } else {
        return (
            <Box mt={3}>
                {/* Confirm Remove */}
                <Dialog
                    open={confirmRemove}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseConfirmRemove}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Do you want to remove this product from your cart?"}</DialogTitle>

                    <DialogActions>
                        <Button variant="outlined" onClick={handleCloseConfirmRemove} color="primary">
                            Disagree
                        </Button>
                        <Button variant="contained" onClick={() => {
                            if (removeItem !== null) {
                                handleRemoveItem(removeItem)
                                setRemoveItem(null)
                                setConfirmRemove(false)
                            } else {
                                handleRemoveAllItems()
                            }

                        }} color="secondary">
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
                {/* Warning 0 quantity */}
                <Snackbar open={warningQuantity} autoHideDuration={3000} onClose={handleCloseWarningQuantity}>
                    <Alert1 onClose={handleCloseWarningQuantity} severity="warning">
                        Can not choose 0 quantity!
                    </Alert1>
                </Snackbar>
                <CartNav current={1} />
                <Box ml={6} mr={6}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={9}>
                            <Box marginBottom={3}>
                                <Paper elevation={3}>
                                    <Box>
                                        <Grid container alignItems="center">
                                            <Grid item xs="2"></Grid>
                                            <Grid item xs="2" container justifyContent="center">
                                                <Grid item>
                                                    <Typography
                                                        variant="h6"
                                                        style={{ color: "deepPink" }}
                                                    >
                                                        Name
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs="2" container justifyContent="center">
                                                <Grid item mx="auto">
                                                    <Typography
                                                        variant="h6"
                                                        style={{ color: "deepPink" }}
                                                    >
                                                        Unit Price
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs="3" container justifyContent="center">
                                                <Grid item mx="auto">
                                                    <Typography
                                                        variant="h6"
                                                        style={{ color: "deepPink" }}
                                                    >
                                                        Quantity
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs="2" container justifyContent="center">
                                                <Grid item mx="auto">
                                                    <Typography
                                                        variant="h6"
                                                        style={{ color: "deepPink" }}
                                                    >
                                                        Total Price
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs="1" container justifyContent="center">
                                                <Grid item mx="auto">
                                                    <Tooltip title="Remove all items">
                                                        <IconButton onClick={() => setConfirmRemove(true)} aria-label="delete">
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Tooltip>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Box>
                            {/* LIST ALL ITEMS IN CART */}
                            {cartItemsOld.map((item) => (
                                <Box marginBottom={3}>
                                    <Paper elevation={3}>
                                        <Box p={2}>
                                            <Grid container alignItems="center">
                                                <Grid item xs="2">
                                                    <img
                                                        src={item.image}
                                                        alt="hihi"
                                                        width="150px"
                                                        height="150px"
                                                    ></img>
                                                </Grid>
                                                <Grid item xs="2" container justifyContent="center">
                                                    <Grid item>
                                                        <Typography variant="h5">{item.name}</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs="2" container justifyContent="center">
                                                    <Grid item mx="auto">
                                                        <Typography variant="h5">${item.price}</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs="3" container justifyContent="center">
                                                    <Grid item mx="auto">
                                                        <ButtonGroup>
                                                            <Button
                                                                onClick={(e) => {
                                                                    if (item.qty > 1) {
                                                                        handleUpdateItem(item, +item.qty - 1)
                                                                    }
                                                                }}
                                                                style={{
                                                                    border: "1px solid pink",
                                                                    fontSize: "20px",
                                                                }}
                                                            >
                                                                -
                                                            </Button>
                                                            <input
                                                                className={classes.input}
                                                                type="number"
                                                                name="qty"
                                                                value={item.qty}
                                                                onBlur={(e) => {
                                                                    if (+e.target.value < 1) {
                                                                        handleUpdateItem(item, 1)
                                                                        setWarningQuantity(true)
                                                                    }
                                                                }}
                                                                onChange={(e) => {
                                                                    handleUpdateItem(item, +e.target.value)
                                                                }}
                                                                style={{
                                                                    width: "40px",
                                                                    border: "1px solid pink",
                                                                    fontSize: "20px",

                                                                    textAlign: "center",
                                                                }}
                                                            ></input>
                                                            <Button
                                                                onClick={(e) =>
                                                                    handleUpdateItem(item, +item.qty + 1)
                                                                }
                                                                style={{
                                                                    border: "1px solid pink",
                                                                    fontSize: "20px",
                                                                }}
                                                            >
                                                                +
                                                            </Button>
                                                        </ButtonGroup>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs="2" container justifyContent="center">
                                                    <Grid item mx="auto">
                                                        <Typography variant="h5">
                                                            ${item.price * item.qty}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs="1" container justifyContent="center">
                                                    <Grid item mx="auto">
                                                        <IconButton onClick={() => {
                                                            handleClickOpenConfirmRemove(item)
                                                        }}>
                                                            <DeleteIcon></DeleteIcon>
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>


                                            </Grid>
                                        </Box>
                                    </Paper>
                                </Box>
                            ))}
                        </Grid>

                        {/* RIGHT SIDE TOTAL PRICE */}
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
                                        CHECK OUT
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* END RIGHT SIDE */}
                    </Grid>
                </Box>
            </Box >
        );
    }
};

export default Cart;
