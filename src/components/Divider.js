import React from "react";
import { Box } from "@mui/material";
// import "../App.css";

function CustomDivider({
  width = "140px",
  margin = "0 0 0 20px",
  background = "grey",
  height = "1px",
}) {
  return (
    <Box
      sx={{
        width: width,
        margin: margin,
        height: height,
        background: background,
      }}
    ></Box>
  );
}

export default CustomDivider;
