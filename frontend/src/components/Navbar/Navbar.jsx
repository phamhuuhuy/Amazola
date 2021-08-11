import { AppBar, Avatar, Badge, Button, Grid, IconButton, Toolbar } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { ShoppingCart } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Link as Router } from 'react-router-dom';
import { signout } from '../../actions/userAction';
import logo from '../../assets/commerce.png';
import useStyles from './styles';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const Navbar = () => {
    const classes = useStyles();
    const cartItem = useSelector(state => state.cart)
    const userSignin = useSelector(state => state.userSignin)
    const { cartItems } = cartItem
    const { userInfo } = userSignin
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const signoutHandler = () => {
        dispatch(signout())
        setAnchorEl(null)
    }
    return (
        <AppBar position="fixed" color="primary" >
            <Toolbar>
                <Grid className={classes.huy1} container justifyContent="flex-start" spacing={1} >
                    <Grid item>
                        <img src={logo} alt="amazona" height="50px" />

                    </Grid>
                </Grid>

                <Grid className={classes.huy} container justifyContent="flex-center" spacing={5} >

                    <Grid item>
                        <Button component={Router} to="/" color="inherit" variant="outlined" >Home</Button>
                    </Grid>
                    <Grid item>
                        <Button component={Router} to="/product" color="inherit" variant="outlined" >Cart</Button>

                    </Grid>

                </Grid>

                <Grid container justifyContent="flex-end" spacing={3}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={cartItems.length} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    {
                        userInfo ? (
                            <div>
                                <Avatar onClick={handleClick} aria-controls="customized-menu"
                                    aria-haspopup="true" className={classes.pink} alt={userInfo.name}>{userInfo.name.charAt(0)}
                                </Avatar>
                                <StyledMenu
                                    id="customized-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <StyledMenuItem>
                                        <ListItemIcon>
                                            <AccountCircleIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="My Profile" />
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={signoutHandler}>
                                        <ListItemIcon>
                                            <ExitToAppIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Sign Out" />
                                    </StyledMenuItem>

                                </StyledMenu>
                            </div>

                        ) : (
                            <Button component={Link} to="/signin">Sign in</Button>
                        )
                    }

                </Grid>
            </Toolbar>
        </AppBar >
    );
}
export default Navbar
