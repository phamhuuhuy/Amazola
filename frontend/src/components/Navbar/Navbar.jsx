
import { AppBar, Badge, Button, Grid, IconButton, Toolbar } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/commerce.png';
import useStyles from './styles';
import { ShoppingCart } from '@material-ui/icons';
import { Link as Router } from 'react-router-dom'

const Navbar = () => {
    const classes = useStyles();


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
                    {/* <Grid item>
                        <Link color="inherit" variant="outlined" >Login</Link>
                    </Grid>
                    <Grid item>
                        <Link color="inherit" variant="outlined" >Login</Link>
                    </Grid>
                    <Grid item>
                        <Link color="inherit" variant="outlined" >Login</Link>
                    </Grid>
                    <Grid item>
                        <Link color="inherit" variant="outlined" >Login</Link>
                    </Grid> */}
                </Grid>

                <Grid container justifyContent="flex-end" spacing={3}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={3} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar >
    );
}
export default Navbar
