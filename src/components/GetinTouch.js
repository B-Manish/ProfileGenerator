import React, { useRef, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import CustomButton from "./Custombutton";
import { useMediaQuery } from "@mui/material";

function Getintouch({ setContactRef ,name="name" }) {
  const isSxScreen = useMediaQuery("(max-width:599px)");
  const mainRef = useRef(null);

  useEffect(() => {
    setContactRef(mainRef);
  }, []);

  const handleContactClick = () => {
    window.location.href = "mailto:bmanish7777@gmail.com?subject=Contact%20Me";
  };

  return (
    <Grid
      container
      ref={mainRef}
      sx={{
        background: "#0A192F",
        padding: "100px 0 20px 0",
      }}
    >
      <Grid item xs={1}></Grid>
      <Grid
        item
        xs={isSxScreen ? 12 : 10}
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: isSxScreen && "0 30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: "600px",
            cursor: "pointer",
          }}
        >
          <Box
            className="roboto"
            sx={{
              color: "#5BF2CE",
              display: "flex",
              justifyContent: "center",
              margin: "0 0 19px 0",
            }}
          >
            04. What's Next?
          </Box>
          <Box
            className="customdmsans"
            sx={{
              color: "#A7C3E5",
              fontSize: "60px",
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              margin: "0 0 10px 0",
              whiteSpace: "noWrap",
              fontSize: {
                xs: "40px", // small screens
                sm: "45px", // medium screens
                md: "50px", // larger screens
                lg: "60px",
              },
            }}
          >
            Get In Touch
          </Box>
          <Box
            sx={{ textAlign: "center", margin: "0 0 48px 0" }}
            className="customdmsans"
          >
            I’m currently open to new opportunities! Whether you have a question
            or want to discuss potential roles, feel free to reach out.
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "100px",
            }}
          >
            <CustomButton text="Say Hello" clickHandler={handleContactClick} />
          </Box>
          <Box
            className="roboto"
            sx={{
              color: "grey",
              display: "flex",
              justifyContent: "center",
              fontSize: "12px",
              // margin: "0 0 19px 0",
            }}
          >
            Built by {name}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default Getintouch;
