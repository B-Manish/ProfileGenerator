import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function Iphone(props) {
  const { nodes, materials } = useGLTF("/models/iphone.glb");

  const texture = useTexture(props.item.img);

  return (
    <group {...props} dispose={null}>
      <group
        position={[0.051, 0.876, -0.29]}
        rotation={[Math.PI / 2, 0, -0.526]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_3.geometry}
          material={materials.blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_4.geometry}
          material={materials.screen}
        />
        <group position={[0.264, -0.127, -0.735]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials["cam blue"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_1.geometry}
            material={materials.glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_2.geometry}
            material={materials.mic}
          />
        </group>
        <group position={[0.347, -0.155, -0.842]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials.camera}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_2.geometry}
            material={materials.mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_3.geometry}
            material={materials.lens}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_4.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_5.geometry}
            material={materials.glass}
          />
        </group>
        <group position={[0.16, -0.147, -0.726]} scale={0.047}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={materials["cam blue"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_2.geometry}
            material={materials["flash  blue"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_3.geometry}
            material={materials["flash orange.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_4.geometry}
            material={materials.glass}
          />
        </group>
        <group position={[0.347, -0.155, -0.61]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007.geometry}
            material={materials.camera}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_1.geometry}
            material={materials.mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_2.geometry}
            material={materials.lens}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_3.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_4.geometry}
            material={materials.glass}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.logo.geometry}
          material={materials.metal}
          position={[-0.007, -0.125, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screw.geometry}
          material={materials.metal}
          position={[0.11, -0.066, 1.129]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screw001.geometry}
          material={materials.metal}
          position={[-0.099, -0.066, 1.128]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.speaker.geometry}
          material={materials.speaker}
          position={[-0.005, -0.006, -0.932]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

export default Iphone;

useGLTF.preload("/models/iphone.glb");
