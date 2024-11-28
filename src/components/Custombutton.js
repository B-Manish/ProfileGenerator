import React from "react";
import { Box } from "@mui/material";
import "../App.css";

function CustomButton({ text, padding = "20px 28px", clickHandler }) {
  return (
    <Box
      onClick={clickHandler}
      sx={{
        border: "1px solid #5BF2CE",
        padding: padding,
        color: "#5BF2CE",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="roboto"
    >
      {text}
    </Box>
  );
}

export default CustomButton;
