import { Box, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import ProfileNav from '../ProfileNav'

const BMI = () => {
    return (
        <Box mt={5.5}>
            <Box ml={6} mr={6}>
                <Grid container spacing={5}>

                    <Grid item xs={12} md={3}>
                        <ProfileNav current={2}></ProfileNav>
                    </Grid>


                    <Grid item xs={12} md={9}>
                        <Box marginBottom={3}>
                            <Paper elevation={3} style={{ padding: "10px" }}>
                                <Typography
                                    variant="h5"
                                    style={{ marginBottom: "10px", color: "#f73471" }}
                                >
                                    Account Information
                                </Typography>

                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default BMI
