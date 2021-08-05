import { Box, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import React from 'react'

const Rate = ({ rate, review }) => {
    return (

        <Box display="flex" component="fieldset" borderColor="transparent">
            <Box>
                <Rating name="read-only" value={rate} precision={0.5} readOnly />
            </Box>

            <Box ml={1} borderLeft={1}></Box>
            <Box ml={1} display="flex">
                <Typography>
                    {review}
                </Typography>
            </Box>

        </Box>

    )
}

export default Rate
