import React from "react";
import { Box, TextField } from "@mui/material";
import "../App.css";

const CustomTextField = ({
    label,
    value,
    // setValue,
    password = false,
    height = "52px",
    editable = true,
    margin="0 100px 0 0",
    ...props
}) => {
    return (
        <Box
            sx={{
                borderBottom: "0.5px solid grey",
                height: height,
                padding: "7px 20px 0 0px",
                margin: margin,
            }}
        >
            <TextField
                id="standard-basic"
                label={label}
                variant="standard"
                value={value}
                {...props}
                InputLabelProps={{
                    style: { color: "#5BF2CE", fontFamily: "customdmsans !important" },
                }}
                InputProps={{
                    readOnly: !editable ? true : false,
                    sx: {
                        fontFamily: "roboto !important", // Apply customdmsans to input text
                        color: "#A7C3E5", // Custom input text color
                    },
                }}
                sx={{
                    width: "100%",
                    "& .MuiInput-underline:before": {
                        borderBottom: "none",
                    },
                    "& .MuiInput-underline:after": {
                        borderBottom: "none",
                    },
                    "& .MuiInput-root": {
                        "&:hover:not(.Mui-disabled):before": {
                            borderBottom: "none",
                        },
                    },
                }}
            />
        </Box>
    );
};

export default CustomTextField;