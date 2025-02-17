import React, { useRef, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import "../App.css";
import CustomDivider from "./Divider";
import { useMediaQuery } from "@mui/material";
import Builtcard from "./Builtcard";
import Ecomm from "../static/ecomm.png";

function Built({ setBuiltRef, data ,preview}) {
  const mainRef = useRef(null);
  const [fontSize, setFontSize] = useState(32);
  const isSxScreen = useMediaQuery("(max-width:599px)");

  useEffect(() => {
    setBuiltRef(mainRef);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Increase font size gradually based on screen width
      if (width < 600) {
        setFontSize(16);
      } else if (width < 960) {
        setFontSize(20);
      } else if (width < 1280) {
        setFontSize(24);
      } else if (width < 1920) {
        setFontSize(28);
      } else {
        setFontSize(32);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial call to set the correct size on load
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Grid container sx={{ background: "#0A192F" }} ref={mainRef}>
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
            width: isSxScreen ? "100%" : "80%",
            maxWidth: "1000px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: "37px",
            }}
            className="roboto"
          >
            <Box
              sx={{
                color: "#5BF2CE",
                fontSize: `${fontSize}px`,
              }}
            >
              03.
            </Box>
            <Box
              className="customdmsans"
              sx={{
                color: "#A7C3E5",
                fontWeight: "600",
                fontSize: `${fontSize + 4}px`,
                whiteSpace: "noWrap",
              }}
            >
              Some Things I’ve Built
            </Box>
            <CustomDivider />
          </Box>
          {data?.map((item, index) => {
            return (
              <Builtcard
                margin="0 0 100px 0"
                iphone
                data={item}
                reverse={index % 2 == 0 ? false : true}
                preview={preview}
              />
            );
          })}
          {/* <Builtcard margin="0 0 100px 0" iphone data />
          <Builtcard margin="0 0 100px 0" /> */}
          {/* <Builtcard
            reverse
            margin="0 0 100px 0"
            img={Ecomm}
            technologies={["React", "Fakestore API", "Context API", "MUI"]}
            heading="Ecommerce website"
            description="Developed a e-commerce website using React, with state management handled via Context API and Redux. Integrated the FakeStore API for product data, implementing features like product listings and shopping cart functionality. This project enhanced my skills in building scalable React applications and managing dynamic state effectively."
          /> */}
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default Built;
