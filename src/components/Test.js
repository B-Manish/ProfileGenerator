import React, { useState, useRef, useEffect, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import Lights from "./Lights";
import Iphone from "./Iphone";
import * as THREE from "three";

const Test = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
  height = "calc(80vh - 150px)",
  width = "450px",
  rotationSpeed = "0.1",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const targetRotation = useRef(new THREE.Euler(0, 0, 0)); // Store target rotation

  // Handle mouse movement and update mouse position state
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({
      x: (clientX / window.innerWidth) * 2 - 1,
      y: -(clientY / window.innerHeight) * 2 + 1,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function CustomRotationControls() {
    useFrame(() => {
      // Calculate target rotation based on mouse position
      targetRotation.current.x = mousePosition.y * 0.05;
      targetRotation.current.y = mousePosition.x * 0.05;

      // Smoothly interpolate the current rotation towards the target rotation
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotation.current.x,
        rotationSpeed // Adjust lerp factor for smoother/slower or faster transition
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.current.y,
        rotationSpeed
      );
    });
  }

  return (
    <View
      index={index}
      id={gsapType}
      style={{
        height: height,
        width: width,
      }}
    >
      <CustomRotationControls />
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false} // Disable panning
        enableRotate={false} // Disable default rotation
        rotateSpeed={0.1}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1}?"small":"large"`}
        position={[0, -1.4, 0]}
        // rotation={[mousePosition.y * 0.05, mousePosition.x * 0.05, 0]} // Controls rotation intensity
      >
        <Suspense
        // fallback={
        //   <Html>
        //     <Box>loading...</Box>
        //   </Html>
        // }
        >
          <Iphone scale={[1.7, 1.7, 1.7]} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  );
};

export default Test;
