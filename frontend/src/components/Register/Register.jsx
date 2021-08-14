import { Box, CircularProgress, FormControl, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
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
import useStyles from './styles'
import { Link as Signin } from 'react-router-dom'
import { register } from "../../actions/userAction";

export default function Register() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [dataForm, setDataForm] = useState({ name: "", email: "", password: "", confirmPassword: "", gender: "" });
    const handleDataForm = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    };
    const { loading, error } = useSelector((state) => state.userRegister);
    const { userInfo } = useSelector((state) => state.userSignin);
    const [alert, setAlert] = useState(false)
    const history = useHistory();
    const location = useLocation()
    const redirect = location.search ? location.search.split("=")[1] : "/"

    function changeGender(value) {
        switch (value) {
            case "true":
                return true
            case "false":
                return false
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dataForm.password !== dataForm.confirmPassword || dataForm.password === "") {
            setAlert(true)
        } else {
            dispatch(register(dataForm.name, changeGender(dataForm.gender), dataForm.email, dataForm.password))
        }
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
                    Register
                </Typography>
                {loading && <CircularProgress />}
                {error && <Box mt={3} m={3} >
                    {/* Don't have any item in cart */}
                    <Alert severity="error">
                        {error}
                    </Alert>
                </Box>}
                {alert && <Box mt={3} m={3} >
                    <Alert severity="error">
                        Password is empty or not correct!!
                    </Alert>
                </Box>}
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        label="Name"
                        value={dataForm.name}
                        id="name"
                        autoFocus
                        onChange={handleDataForm}
                        autoComplete="name"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={dataForm.email}
                        autoComplete="email"
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
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        value={dataForm.confirmPassword}
                        id="confirmPassword"
                        onChange={handleDataForm}
                        autoComplete="current-password"
                    />
                    <FormControl style={{ marginTop: "10px" }} component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" value={dataForm.gender} onChange={handleDataForm}>
                            <FormControlLabel value="false" control={<Radio />} label="Female" />
                            <FormControlLabel value="true" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Register
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link component={Signin} to="/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
