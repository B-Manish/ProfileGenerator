import React from 'react';
import { Grid } from "@mui/material";
import Viewpreview from './Viewpreview';


function Gg() {


    return (
        <Grid
            container
            sx={{
                minHeight: "100vh",
                background: "#0A192F",
            }}
        > <Grid item xs={4}></Grid><Grid item xs={8}><Viewpreview /></Grid></Grid>
    );
}

export default Gg;
