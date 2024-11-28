import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function Laptop(props) {
  const { nodes, materials } = useGLTF("/models/laptop.glb");

  const texture = useTexture(props.item.img);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_ComputerFrame_0.geometry}
        material={materials.ComputerFrame}
        position={[0, 0.976, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen_ComputerScreen_0.geometry}
        material={materials.ComputerScreen}
        position={[0, 0.65, -10.3]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={[100, 100, 88.235]}
      />
    </group>
  );
}

export default Laptop;

useGLTF.preload("/models/laptop.glb");
