import React from "react";
import { Box } from "@mui/material";
import "../App.css";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

function OtherProjectsCard({ heading, description, skills }) {
  return (
    <Box
      sx={{
        background: "#112240",
        padding: "30px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "20px" }}
      >
        <FolderOutlinedIcon style={{ fontSize: "50px", color: "#5BF2CE" }} />
      </Box>

      <Box
        className="customdmsans"
        sx={{
          color: "#A7C3E5",
          fontWeight: "600",
          fontSize: "22px",
          mb: "12px",
        }}
      >
        {heading}
      </Box>

      <Box
        className="customdmsans"
        sx={{
          color: "#99ACC3",
          fontSize: "16px",
          mb: "16px",
        }}
      >
        {description}
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", mt: "auto" }}>
        {skills?.map((skill, index) => {
          return (
            <Box
              key={skill}
              className="roboto"
              sx={{
                marginRight: index !== skills.length - 1 && "20px",
                fontSize: "13px",
                padding: "3px 0",
              }}
            >
              {skill}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default OtherProjectsCard;
