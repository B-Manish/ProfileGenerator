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
            <Grid item xs={7.5} sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
                < Box
                    sx={{
                        height: '70%',
                        aspectRatio: '16 / 9',
                        border: '1px solid white',
                        overflowY: 'scroll',
                        position: 'fixed'

                    }}><Viewpreview /></Box>
            </Grid>
        </Grid >
    );
}

export default Gg;
