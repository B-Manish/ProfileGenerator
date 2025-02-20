import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Gg from "./components/Gg";
import Template from "./components/Template";
import Home from "./components/Home";
import { DataContext } from "./contexts/DataContext";
import data from "./data.json";

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


function App() {



  return <ThemeProvider theme={customTheme}>
    <Routes>
      <Route
        path="/"
        element={
          <Template
            preview={false}
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
        }
      />
      <Route
        path="/preview"
        element={
          <Gg />
        }
      />
    </Routes>
  </ThemeProvider>;
}


export default App;
