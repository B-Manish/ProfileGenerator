import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Gg from "./components/Gg";
import Template from "./components/Template";
import Home from "./components/Home";
import { DataContext } from "./contexts/DataContext";

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
  const { data } = useContext(DataContext);
  if (process.env.REACT_APP_BUILD_FOR_PREVIEW === "true") {
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
      </Routes>
    </ThemeProvider>;
  }
  return <ThemeProvider theme={customTheme}>
    <Routes>
      <Route
        path="/"
        element={
          <Gg />
        }
      />

    </Routes>
  </ThemeProvider>;
}

export default App;
