import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import BlockLevel from "./BlockLevel";
import { Physics } from "@react-three/rapier";
// import { AxesHelper } from "three";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />
      <axesHelper args={[2]} />
      <color attach="background" args={["#ffffff"]} />
      <Physics debug>
        <Lights />
        <BlockLevel />
      </Physics>
    </>
  );
}
