import { Routes, Route } from "react-router-dom";
import React, { useContext } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "../components/Home";
import { DataContext } from "../contexts/DataContext";

import Template from "../components/Template";




const customTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

function Preview() {
  const {data}=useContext(DataContext);

const scope = { React };
    return (
        <ThemeProvider theme={customTheme}>
            <Template
            preview={true}
                mail={data?.mail}
                page={
                    <Home
                        name={data?.name}
                        desc={data?.desc}
                        briefdesc={data?.briefdesc}
                        preview={true}
                    />
                }
            />
        </ThemeProvider>
    );
}

export default Preview;
