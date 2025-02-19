import React from 'react';
import { Box, Grid } from "@mui/material";
import Viewpreview from './Viewpreview';
import Dataform from './Dataform';


function Gg() {


    return (
        <Grid
            container
            sx={{
                background: "#0A192F",
            }}
        >
            <Grid item xs={4.5}><Dataform /></Grid>
            <Grid item xs={7.5} >
                <Box
                    sx={{
                        width: '70%',
                        aspectRatio: '16 / 9',
                        border: '1px solid white',
                        // display: 'flex',
                        // alignItems: 'center',
                        // justifyContent: 'center',
                        overflowY: 'scroll',
                        // overflowX: 'scroll',
                        position:'fixed'

                    }}><Viewpreview /></Box>
            </Grid>
        </Grid>
    );
}

export default Gg;
