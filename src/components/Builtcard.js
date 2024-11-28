import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import Vscode from "../static/vscode.png";
import Threed from "./Threed";

function Builtcard({ reverse = false, margin, iphone, img = Vscode, data }) {
  const isMdScreen = useMediaQuery("(max-width:899px)");

  const customIcon = (technology, color = "white") => {
    if (technology === "Github") {
      return <GitHubIcon style={{ color: color }} />;
    }
  };

  useEffect(() => {
    console.log("data", data);
  }, []);

  return isMdScreen ? (
    <Box
      sx={{
        mb: "30px",
        padding: "40px 20px",
        // //background: `linear-gradient(rgba(8,29,44, 0.9), rgba(8,29,44, 0.9)), url(${Vscode})`, // Custom tint + image
        // //background: `linear-gradient(rgba(8,19,36, 0.5), rgba(8,19,36, 0.5)), url(${Vscode})`, // Custom tint + image
        // background: `linear-gradient(rgba(8,42,54, 0.9), rgba(8,42,54, 0.9)), url(${Vscode})`, // Custom tint + image
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(rgba(8,42,54, 0.5), rgba(8,42,54, 0.5)), url(${img})`, // Custom tint + image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          color: "#5BF2CE",
          fontSize: "13px",
          mb: "10px",
          whiteSpace: "nowrap",
          zIndex: 1000,
          position: "relative",
        }}
        className="roboto"
      >
        Featured Project
      </Box>
      <Box
        className="customdmsans"
        sx={{
          color: "#A7C3E5",
          fontWeight: "600",
          fontSize: "24px",
          mb: "19px",
          whiteSpace: "nowrap",
        }}
      >
        {data?.name}
      </Box>
      <Box
        className="customdmsans"
        sx={{
          mb: "22px",
          borderRadius: "4px",
          color: "#8892b0",
        }}
      >
        {data?.desc}
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: reverse === true ? "row-reverse" : "row",
        margin: margin,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "50%",
          justifyContent: reverse === true && "right",
        }}
      >
        {iphone ? <Threed /> : <img src={img} style={{ width: "120%" }} />}
      </Box>
      <Box
        sx={{
          width: "50%",
          zIndex: "100",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            color: "#5BF2CE",
            textAlign: reverse === true ? "left" : "right",
            fontSize: "13px",
            mb: "10px",
            whiteSpace: "nowrap",
          }}
          className="roboto"
        >
          Featured Project
        </Box>
        <Box
          className="customdmsans"
          sx={{
            color: "#A7C3E5",
            fontWeight: "600",
            fontSize: "24px",
            textAlign: reverse === true ? "left" : "right",
            mb: "19px",
            whiteSpace: "nowrap",
          }}
        >
          {data?.name}
        </Box>
        <Box
          className="customdmsans"
          sx={{
            background: "#112240",
            mb: "22px",
            borderRadius: "4px",
            padding: "25px",
            color: "#8892b0",
          }}
        >
          {data?.desc}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: reverse === true ? "flex-start" : "flex-end",
          }}
        >
          <Box sx={{ display: "flex", mb: "10px" }}>
            {data?.technologies.map((technology, index) => (
              <Box
                key={technology}
                className="roboto"
                sx={{
                  marginRight:
                    index !== data?.technologies.length - 1 && "20px",
                  fontSize: "13px",
                }}
              >
                {technology}
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: reverse === true ? "flex-start" : "flex-end",
          }}
        >
          <Box sx={{ display: "flex" }}>
            {data?.references.map((item, index) => {
              return (
                <Box
                  sx={{
                    marginRight:
                      index !== data?.references.length - 1 && "20px",
                  }}
                >
                  {customIcon(item?.ref)}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Builtcard;
