import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./components/Home";
import data from "./data.json";

import Template from "./components/Template";

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
  return (
    <ThemeProvider theme={customTheme}>
      <Routes>
        <Route
          path="/"
          element={
            <Template
              mail="batchumanish@gmail.com"
              page={
                <Home
                  name={data?.name}
                  desc={data?.desc}
                  briefdesc={data?.briefdesc}
                />
              }
            ></Template>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
