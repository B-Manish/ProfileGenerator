import React, { useEffect, useRef } from "react";
import "../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkedComponent from "./WorkedComponent";
import { Box } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

function Worked({ setExpRef, preview = false, data }) {
  const mainRef = useRef(null);

  useEffect(() => {
    setExpRef(mainRef);
  }, []);

  return (
    <Box ref={mainRef} sx={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <WorkedComponent data={data} /></Box >

  );
}

export default Worked;
