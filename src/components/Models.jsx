import * as THREE from "three";
import { useState, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Banana } from "./Banana";
const Mori20 = () => {
  const { viewport, camera } = useThree();

  const models = Array.from({ length: 200 }, (_, index) => {
    const [speed] = useState(() => 0.05 + Math.random() / 100);
 
    
    const position = useMemo(() => {
      const x = Math.random() * 20;
      const y = Math.random() * 20;
      const z = Math.random() * 20;
      const bounds = viewport.getCurrentViewport(camera, [x, y, z]);
      return [
        THREE.MathUtils.randFloatSpread(bounds.width),
        THREE.MathUtils.randFloatSpread(bounds.height * 0.75),
        x + index * -0.2,
        y + index * -0.2,
        z + index * -0.2,
      ];
    }, [viewport]);
    const scale = useMemo(() => THREE.MathUtils.randFloat(1.5, 3), []);

    return (
      <Float
        key={index}
        position={position}
        speed={speed}
        rotationIntensity={20}
        floatIntensity={40}
        scale={scale}
        dispose={null}
      >
        
          <Banana />
    
      </Float>
    );
  });

  return <>{models}</>; // Render all 50 clones
};

export default Mori20;
