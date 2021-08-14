import { Box, CircularProgress } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { signin } from "../../actions/userAction";
import useStyles from './styles';
import { Link as Register } from 'react-router-dom'

export default function SignIn() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [dataForm, setDataForm] = useState({ email: "", password: "" });
    const handleDataForm = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    };
    const { userInfo, loading, error } = useSelector((state) => state.userSignin);
    const history = useHistory();
    const location = useLocation()
    const redirect = location.search ? location.search.split("=")[1] : "/"

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(dataForm.email, dataForm.password));
    };

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, redirect, userInfo]);
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {loading && <CircularProgress />}
                {error && <Box mt={3} m={3} >
                    {/* Don't have any item in cart */}
                    <Alert severity="error">
                        {error}
                    </Alert>
                </Box>}

                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"

                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={dataForm.email}
                        autoComplete="email"
                        autoFocus
                        onChange={handleDataForm}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        value={dataForm.password}
                        id="password"
                        onChange={handleDataForm}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component={Register} to={`/register?redirect=${redirect}`} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
