import React, { useState, useRef } from "react";
import { Box, Grid } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Navbar from "./Navbar";
import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import Aboutme from "./Aboutme";
import Built from "./Built";
import Getintouch from "./GetinTouch";
import Threed from "./Threed";
import OtherProjects from "./OtherProjects";
import Preloader from "./Preloader";
import Worked from "./Worked";

function Template({ page }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBM, setShowBM] = useState(false); // State to control 'BM' visibility

  const [aboutRef, setAboutRef] = useState(useRef(null));
  const [builtRef, setBuiltRef] = useState(useRef(null));
  const [contactRef, setContactRef] = useState(useRef(null));
  const [expRef, setExpRef] = useState(useRef(null));
  const isMdScreen = useMediaQuery("(max-width:899px)");
  const isSxScreen = useMediaQuery("(max-width:599px)");

  return !isLoaded ? (
    <Preloader
      showBM={showBM}
      setShowBM={setShowBM}
      setIsLoaded={setIsLoaded}
    />
  ) : (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        background: "#0A192F",
      }}
    >
      <Navbar
        aboutRef={aboutRef}
        builtRef={builtRef}
        contactRef={contactRef}
        expRef={expRef}
      />

      <Grid item xs={1}>
        {!isMdScreen && (
          <>
            <Box
              sx={{
                position: "fixed",
                bottom: "160px",
                left: "85px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <GitHubIcon
                sx={{ color: "#CBCBD7", mb: "15px", cursor: "pointer" }}
              />
              <LinkedInIcon
                sx={{ color: "#CBCBD7", mb: "15px", cursor: "pointer" }}
              />
              <XIcon sx={{ color: "#CBCBD7", mb: "15px", cursor: "pointer" }} />
              <InstagramIcon sx={{ color: "#CBCBD7", cursor: "pointer" }} />
            </Box>
            <Box
              sx={{
                position: "fixed",
                bottom: "0px",
                left: "95px",
                display: "flex",
                height: "140px",
                width: "2px",
                background: "grey",
              }}
            />
          </>
        )}
      </Grid>
      <Grid
        item
        xs={isSxScreen ? 12 : 10}
        sx={{ padding: isSxScreen && "0 30px" }}
      >
        <Box
          sx={{
            height: "calc(100vh - 89px)",
          }}
        >
          {page}
        </Box>
      </Grid>
      <Grid item xs={1}>
        {!isMdScreen && (
          <>
            <Box
              sx={{
                position: "fixed",
                bottom: "230px",
                right: "20px",
                color: "#A8B2D1",
                fontSize: "12px",
                rotate: "90deg",
                display: "flex",
              }}
              className="roboto"
            >
              <Box> bmanish7777@gmail.com</Box>
            </Box>
            <Box
              sx={{
                position: "fixed",
                bottom: "0px",
                right: "95px",
                display: "flex",
                height: "140px",
                width: "2px",
                background: "grey",
              }}
            />
          </>
        )}
      </Grid>
      <Aboutme setAboutRef={setAboutRef} />
      <Worked setExpRef={setExpRef} />
      <Built setBuiltRef={setBuiltRef} />
      <OtherProjects />
      <Getintouch setContactRef={setContactRef} />
      {/* <Threed /> */}
    </Grid>
  );
}

export default Template;
