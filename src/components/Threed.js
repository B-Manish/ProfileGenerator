import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box, duration } from "@mui/material";
import "../App.css";
import Test from "./Test";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import yellowImg from "../static/yellow.jpg";

const Threed = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  // camera control for the model view
  const cameraControlLarge = useRef();

  // models
  const large = useRef(new THREE.Group());

  // rotation of each model
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        background: "#0A192F",
        overflowX: "hidden",
        // border: "1px solid red",
      }}
    >
      <Box>
        <Test
          index={2}
          groupRef={large}
          gsapType="view2"
          controlRef={cameraControlLarge}
          setRotationState={setLargeRotation}
          item={model}
          size={size}
          height="600px"
        />
      </Box>

      <Canvas
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
        }}
        eventSource={document.getElementById("root")}
      >
        <View.Port />
      </Canvas>
    </Box>
  );
};

export default Threed;
