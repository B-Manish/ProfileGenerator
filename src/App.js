import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Gg from "./components/Gg";

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
             <Gg/>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
