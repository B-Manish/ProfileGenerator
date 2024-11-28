import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function Laptoptwo(props) {
  const { nodes, materials } = useGLTF("/models/macbookpro14.glb");

  const texture = useTexture(props.item.img);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[4.755, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[3.215, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[3.556, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[3.781, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[4.007, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[4.233, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[4.459, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[4.688, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[4.915, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[5.141, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[5.37, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[5.591, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[5.816, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[6.044, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[6.271, -0.048, -0.917]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[3.215, -0.048, -0.475]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
        position={[3.218, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={nodes.Cube018.material}
        position={[3.443, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={nodes.Cube019.material}
        position={[3.669, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={nodes.Cube020.material}
        position={[3.895, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={nodes.Cube021.material}
        position={[4.124, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={nodes.Cube022.material}
        position={[4.347, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={nodes.Cube023.material}
        position={[4.571, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={nodes.Cube024.material}
        position={[4.799, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={nodes.Cube025.material}
        position={[5.025, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={nodes.Cube026.material}
        position={[5.254, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={nodes.Cube027.material}
        position={[5.481, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={nodes.Cube028.material}
        position={[5.702, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={nodes.Cube029.material}
        position={[5.932, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={nodes.Cube030.material}
        position={[6.159, -0.048, -0.7]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={nodes.Cube031.material}
        position={[6.159, -0.048, -0.257]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={nodes.Cube032.material}
        position={[6.159, -0.048, -0.041]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={nodes.Cube033.material}
        position={[5.248, -0.048, 0.177]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={nodes.Cube034.material}
        position={[4.968, -0.048, 0.177]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={nodes.Cube035.material}
        position={[3.833, -0.048, 0.177]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={nodes.Cube036.material}
        position={[3.386, -0.048, -0.041]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={nodes.Cube037.material}
        position={[3.269, -0.048, -0.257]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={nodes.Cube038.material}
        position={[3.554, -0.048, -0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={nodes.Cube039.material}
        position={[3.782, -0.048, -0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={nodes.Cube040.material}
        position={[4.009, -0.048, -0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={nodes.Cube041.material}
        position={[4.236, -0.048, -0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={nodes.Cube042.material}
        position={[4.461, -0.048, -0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={nodes.Cube043.material}
        position={[4.687, -0.048, -0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={nodes.Cube044.material}
        position={[4.914, -0.048, -0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={nodes.Cube045.material}
        position={[5.143, -0.048, -0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={nodes.Cube046.material}
        position={[5.369, -0.048, -0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={nodes.Cube047.material}
        position={[5.594, -0.048, -0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048.geometry}
        material={nodes.Cube048.material}
        position={[5.82, -0.048, -0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049.geometry}
        material={nodes.Cube049.material}
        position={[6.044, -0.048, -0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube050.geometry}
        material={nodes.Cube050.material}
        position={[6.27, -0.048, -0.48]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube051.geometry}
        material={nodes.Cube051.material}
        position={[3.613, -0.048, -0.26]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube052.geometry}
        material={nodes.Cube052.material}
        position={[3.838, -0.048, -0.26]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube053.geometry}
        material={nodes.Cube053.material}
        position={[4.065, -0.048, -0.26]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube054.geometry}
        material={nodes.Cube054.material}
        position={[4.293, -0.048, -0.26]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube055.geometry}
        material={nodes.Cube055.material}
        position={[4.519, -0.048, -0.26]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube056.geometry}
        material={nodes.Cube056.material}
        position={[4.748, -0.048, -0.26]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube057.geometry}
        material={nodes.Cube057.material}
        position={[4.975, -0.048, -0.26]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube058.geometry}
        material={nodes.Cube058.material}
        position={[5.197, -0.048, -0.26]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube059.geometry}
        material={nodes.Cube059.material}
        position={[5.426, -0.048, -0.26]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube060.geometry}
        material={nodes.Cube060.material}
        position={[5.654, -0.048, -0.26]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube061.geometry}
        material={nodes.Cube061.material}
        position={[5.876, -0.048, -0.26]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube062.geometry}
        material={nodes.Cube062.material}
        position={[3.726, -0.048, -0.04]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube063.geometry}
        material={nodes.Cube063.material}
        position={[3.667, -0.048, 0.183]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube064.geometry}
        material={nodes.Cube064.material}
        position={[3.443, -0.048, 0.183]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube065.geometry}
        material={nodes.Cube065.material}
        position={[3.217, -0.048, 0.183]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube066.geometry}
        material={nodes.Cube066.material}
        position={[3.955, -0.048, -0.04]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube067.geometry}
        material={nodes.Cube067.material}
        position={[4.179, -0.048, -0.04]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube068.geometry}
        material={nodes.Cube068.material}
        position={[4.408, -0.048, -0.04]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube069.geometry}
        material={nodes.Cube069.material}
        position={[4.634, -0.048, -0.04]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube070.geometry}
        material={nodes.Cube070.material}
        position={[4.857, -0.048, -0.04]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube071.geometry}
        material={nodes.Cube071.material}
        position={[5.084, -0.048, -0.04]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube072.geometry}
        material={nodes.Cube072.material}
        position={[5.31, -0.048, -0.04]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube073.geometry}
        material={nodes.Cube073.material}
        position={[5.54, -0.048, -0.04]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube074.geometry}
        material={nodes.Cube074.material}
        position={[5.762, -0.048, -0.04]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube075.geometry}
        material={nodes.Cube075.material}
        position={[5.591, -0.048, 0.179]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube076.geometry}
        material={nodes.Cube076.material}
        position={[5.819, -0.048, 0.279]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube077.geometry}
        material={nodes.Cube077.material}
        position={[6.273, -0.048, 0.279]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube078.geometry}
        material={nodes.Cube078.material}
        position={[5.999, -0.009, 0.133]}
        scale={0.053}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube079.geometry}
        material={nodes.Cube079.material}
        position={[6.093, -0.009, 0.235]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.053}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube081.geometry}
        material={nodes.Cube081.material}
        position={[5.151, 0.025, -1.225]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      />
      <group
        position={[6.574, 0.009, -1.069]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={-0.011}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        position={[6.584, 0.011, -0.974]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={-0.007}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube080_1.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube080_2.geometry}
          material={materials["Material.010"]}
        />
      </group>
    </group>
  );
}

export default Laptoptwo;

useGLTF.preload("/models/macbookpro14.glb");
