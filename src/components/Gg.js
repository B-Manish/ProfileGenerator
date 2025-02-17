import React from 'react';
import { Box, Grid } from "@mui/material";
import Viewpreview from './Viewpreview';
import Dataform from './Dataform';


function Gg() {


    return (
        <Grid
            container
            sx={{
                height: "100vh",
                background: "#0A192F",
            }}
        > 
         <Grid item xs={4.5}><Dataform/></Grid>
         <Grid item xs={7.5} >
            <Box 
             sx={{
             width: '90%',
             aspectRatio: '16 / 9',
             border:'1px solid white',
             display: 'flex',
            //   alignItems: 'center',
             justifyContent: 'center',
             overflowY: 'scroll',
             overflowX: 'hidden',

            }}><Viewpreview/></Box>
         </Grid>
        </Grid>
    );
}

export default Gg;
