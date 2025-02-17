import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "../App.css";
import CustomButton from "./Custombutton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "@mui/material";
import CustomModal from "./CustomModal";
import CustomDivider from "./Divider";
import CloseIcon from "@mui/icons-material/Close";

function Navbar({ aboutRef, builtRef, contactRef, expRef,preview=false }) {
  const navbaritems = ["About", "Experience", "Work", "Contact"];
  const [openModal, setOpenModal] = useState(false);
  const isSxScreen = useMediaQuery("(max-width:599px)");

  useGSAP(() => {
    gsap.fromTo(
      ".items",
      { opacity: 0, y: -30 }, // Start from -100px (off-screen top)
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 } // Animate to the original position
    );

    gsap.fromTo(".logo", { opacity: 0 }, { opacity: 1, delay: "0.2" });
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // To prevent multiple GSAP calls
  const [isAtTop, setIsAtTop] = useState(true); // New state to track if at top
  const [rotationDegree, setRotationDegree] = useState(0);
  const [rotationDegreeClose, setRotationDegreeClose] = useState(0);

  const handleClick = () => {
    setRotationDegree((prev) => prev + 360);
    setOpenModal(true);
  };

  const handleClickClose = () => {
    setRotationDegreeClose((prev) => prev - 360);
    setRotationDegree((prev) => prev - 360);
    setOpenModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      // Toggle shadow based on scroll position
      if (currentScrollPosition === 0) {
        setIsAtTop(true); // We're at the top of the page
      } else {
        setIsAtTop(false); // We're scrolling away from the top
      }

      if (currentScrollPosition > scrollPosition && !isAnimating) {
        // Scrolling down, hide navbar
        setIsAnimating(true);
        gsap.to(".navbar", {
          y: -100, // Move navbar off-screen
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => setIsAnimating(false),
        });
      } else if (currentScrollPosition < scrollPosition && !isAnimating) {
        // Scrolling up, show navbar
        setIsAnimating(true);
        gsap.to(".navbar", {
          y: 0, // Bring navbar back to the top position
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => setIsAnimating(false),
        });
      }

      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, isAnimating]);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getRef = (item) => {
    if (item === "About") return aboutRef;
    else if (item === "Work") return builtRef;
    else if (item === "Contact") return contactRef;
    else if (item === "Experience") return expRef;
    else return aboutRef;
  };

  return (
    <Box
      className="navbar"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "85px",
        alignItems: "center",
        position: preview==false && "fixed" ,
        fontFamily: '"Roboto Mono", monospace',
        backdropFilter: " blur(50px)",
        boxShadow: !isAtTop && "0 4px 20px rgba(0, 0, 0, 0.3)",
        zIndex: "1001",
      }}
    >
      <CustomModal open={openModal} handleClose={() => setOpenModal(false)}>
        <Box sx={{ padding: "20px 0" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "50px",
              mb: "30px",
              cursor: "pointer",
            }}
          >
            <CloseIcon
              onClick={handleClickClose}
              style={{
                color: "#5BF2CE",
                transform: `rotate(${rotationDegreeClose}deg)`,
                transition: "transform 0.5s ease",
              }}
            />
          </Box>

          {navbaritems?.map((item, index) => {
            return (
              <Box
                onClick={() => {
                  handleScroll(getRef(item));
                  setOpenModal(false);
                }}
                sx={{
                  cursor: "pointer",
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: "15px",
                }}
              >
                <Box
                  sx={{
                    color: "#5BF2CE",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="roboto"
                >
                  0{index + 1}.
                </Box>
                <Box
                  sx={{
                    color: "#A7C3E5",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: '"Roboto Mono", monospace',
                  }}
                >
                  {item}
                </Box>
              </Box>
            );
          })}
          <Box sx={{ padding: "0 20px", mt: "25px" }}>
            <CustomButton text="Resume" padding="12px 16px" />
          </Box>
        </Box>
      </CustomModal>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: isSxScreen ? "30px" : "50px",
        }}
      >
        <svg width="50" height="50" viewBox="0 0 200 200">
          <path
            d="M 100,10 L 170,55 L 170,145 L 100,190 L 30,145 L 30,55 Z"
            fill="none"
            stroke="#5BF2CE"
            strokeWidth="8"
          />
        </svg>

        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#5BF2CE",
            fontFamily: '"Roboto Mono", monospace',
          }}
        >
          BM
        </Typography>
      </Box>
      {isSxScreen ? (
        <Box
          onClick={handleClick}
          sx={{
            display: "flex",
            cursor: "pointer",
            justifyContent: "flex-end",
            flexDirection: "column",
            mr: "30px",
            mt: "10px",
            transform: `rotate(${rotationDegree}deg)`,
            transition: "transform 0.5s ease",
          }}
        >
          <CustomDivider
            background="#5BF2CE"
            margin="0 0 10px 0"
            width="35px"
            height="2.5px"
          />
          <CustomDivider
            background="#5BF2CE"
            margin="0 0 10px 10px"
            width="25px"
            height="2.5px"
          />
          <CustomDivider
            background="#5BF2CE"
            margin="0 0 10px 20px"
            width="15px"
            height="2.5px"
          />
        </Box>
      ) : (
        <Box sx={{ marginRight: "50px" }}>
          <Box sx={{ display: "flex" }}>
            {navbaritems?.map((item, index) => {
              return (
                <Box
                  onClick={() => {
                    handleScroll(getRef(item));
                  }}
                  sx={{
                    pr: "25px",
                    cursor: "pointer",
                    display: "flex",
                    fontSize: "12px",
                  }}
                  className="items"
                >
                  <Box
                    sx={{
                      color: "#5BF2CE",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    0{index + 1}.
                  </Box>
                  <Box
                    sx={{
                      color: "#A7C3E5",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item}
                  </Box>
                </Box>
              );
            })}
            <Box className="items">
              <CustomButton text="Resume" padding="12px 16px" />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
