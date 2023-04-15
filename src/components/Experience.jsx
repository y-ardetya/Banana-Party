import React, { Suspense } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Models from "./Models";
import { LayerMaterial, Depth, Noise } from "lamina";

const Experience = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
      <Bg />
      <Suspense fallback={null}>
        <Models />
        <Caption>{`BANANA PARTY`}</Caption>
        <Rig />
        <ambientLight intensity={0.5} />
      </Suspense>
    </Canvas>
  );
};

const Caption = ({ children }) => {
  const { width } = useThree((state) => state.viewport);
  return (
    <Text
      position={[0, 0, -5]}
      lineHeight={0.8}
      font="/AyerPoster-Medium.ttf"
      fontSize={width / 4}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
    >
      {children}
    </Text>
  );
};

const Rig = ({ v3 = new THREE.Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v3.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.1
    );
  });
};

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorA="#FFA500"
          colorB="#FFD400"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[50, 50, 100]}
        />
        <Noise
          mapping="local"
          type="white"
          scale={100}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.3}
        />
      </LayerMaterial>
    </mesh>
  );
}

export default Experience;
