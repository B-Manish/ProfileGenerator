import React from 'react';
import { Box, Grid } from "@mui/material";
import Viewpreview from './Viewpreview';


function Gg() {


    return (
        <Grid
            container
            sx={{
                height: "100vh",
                background: "#0A192F",
            }}
        > <Grid item xs={5} ></Grid><Grid item xs={7} sx={{display:'grid',placeItems:'center'}}><Box sx={{
            width: '90%',        
            aspectRatio: '16 / 9', 
            bgcolor: 'lightblue', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'scroll',
            overflowX: 'hidden',

        }}></Box></Grid></Grid>
    );
}

export default Gg;
