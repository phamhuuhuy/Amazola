import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import React from 'react'
// import { useParams } from 'react-router-dom'
import useStyles from './Styles'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const ProductDetail = () => {
    // const { id } = useParams()
    const classes = useStyles()
    return (
        <Container style={{ marginTop: "20px" }}>
            <Grid container
                spacing={2}
            >
                <Grid className={classes.root} container item xs={12} md={6}>
                    <img src="https://picsum.photos/500/500" alt="hello" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className={classes.sub}>
                        <Typography variant="h3">Nike Slim Pant</Typography>

                        <Box mt={1} mb={1} display="flex">
                            <Rating size="small" name="read-only" value={3} precision={0.5} readOnly />
                            <Typography variant="body2" >(18 Reviews)</Typography>
                        </Box>
                        <Box mt={2} mb={2}>
                            <Typography variant="h4" color="error">$50.00</Typography>
                        </Box>

                        <Typography variant="body1" color="textSecondary">high quality product high quality product high quality product high quality product high quality product</Typography>
                        <Box display="flex">
                            <Box display="flex" justifyContent="center" mt={3} style={{ backgroundColor: "#e0e0e0", width: "140px", border: "1px solid" }}>
                                <Box my="auto" style={{ borderRight: "1px solid" }}>
                                    <Button style={{ maxWidth: '50px', maxHeight: '40px', minWidth: '50px', minHeight: '40px' }} type="button" size="large">-</Button>
                                </Box>
                                <Box my="auto">
                                    {/* <Typography>&nbsp;1&nbsp;</Typography> */}
                                    <input style={{
                                        width: "40px", border: "none",
                                        backgroundColor: "#e0e0e0",
                                        height: "20px",
                                        fontSize: "20px",
                                        textAlign: "center"
                                    }} value="1"></input>
                                </Box>
                                <Box my="auto" style={{ borderLeft: "1px solid" }}>
                                    <Button style={{ maxWidth: '50px', maxHeight: '40px', minWidth: '50px', minHeight: '40px' }} type="button" size="large" >+</Button>
                                </Box>

                            </Box>
                            <Box mt={3} ml={3}>
                                <Button variant="contained" color="secondary" style={{ color: "#f73471", height: "40px" }}>
                                    <Typography style={{ color: "white" }}>ADD TO CART</Typography>
                                </Button>
                            </Box>
                            <Box display="flex" mt={3} ml={3} style={{ backgroundColor: "#e0e0e0", width: "50px", height: "40px" }}>
                                <Box m="auto">
                                    <Button style={{ maxWidth: '50px', maxHeight: '40px', minWidth: '50px', minHeight: '40px' }} type="button" size="large"><FavoriteBorderIcon variant="contained" color="secondary" style={{ color: "#f73471" }}>
                                    </FavoriteBorderIcon></Button>

                                </Box>
                            </Box>


                        </Box>
                        <Box mt={3} style={{ borderBottom: "2px solid #e0e0e0" }}>

                        </Box>
                        <Box mt={2}>
                            <Grid container spacing={5}>
                                <Grid item style={{ fontSize: "20px" }}>
                                    <b>Availability</b>
                                </Grid>
                                <Grid item style={{ fontSize: "20px", marginLeft: "60px" }}>
                                    In stock
                                </Grid>
                            </Grid>
                        </Box>
                        <Box mt={2}>
                            <Grid container spacing={5}>
                                <Grid item style={{ fontSize: "20px" }}>
                                    <b>Availability</b>
                                </Grid>
                                <Grid item style={{ fontSize: "20px", marginLeft: "60px" }}>
                                    In stock
                                </Grid>
                            </Grid>
                        </Box>
                        <Box mt={2}>
                            <Grid container spacing={5}>
                                <Grid item style={{ fontSize: "20px" }}>
                                    <b>Availability</b>
                                </Grid>
                                <Grid item style={{ fontSize: "20px", marginLeft: "60px" }}>
                                    In stock
                                </Grid>
                            </Grid>
                        </Box>
                        <Box mt={2}>
                            <Grid container spacing={5}>
                                <Grid item style={{ fontSize: "20px" }}>
                                    <b>Availability</b>
                                </Grid>
                                <Grid item style={{ fontSize: "20px", marginLeft: "60px" }}>
                                    In stock
                                </Grid>
                            </Grid>
                        </Box>



                    </Box>


                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductDetail
