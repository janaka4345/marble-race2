import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

export default function MarbleRace() {
  return (
    <Canvas
      shadows={true}
      camera={{
        fov: 40,
        near: 0.2,
        far: 200,
        position: [5, 5, 5],
      }}
    >
      <Experience />
    </Canvas>
  );
}
