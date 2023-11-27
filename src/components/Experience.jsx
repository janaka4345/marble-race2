import Lights from "./Lights";
// import BlockLevel from "./BlockLevel";
import { Physics } from "@react-three/rapier";
import BlockLevel02 from "./BlockLevel02";
import Player from "./Player";

export default function Experience() {
  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      {/* <axesHelper args={[2]} /> */}
      <color attach="background" args={["#ffffff"]} />
      <Physics>
        <Lights />
        {/* <BlockLevel /> */}
        <BlockLevel02 count={5} />
        <Player />
      </Physics>
    </>
  );
}
