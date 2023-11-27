import { BoxGeometry, ColorManagement, MeshStandardMaterial } from "three";

import BlockSpinner from "./BlockSpinner";
import BlockLimbo from "./BlockLimbo";
import BlockAxe from "./BlockAxe";
import BlockStart from "./BlockStart";
import BlockEnd from "./BlockEnd";

ColorManagement.enabled = true;
const boxGeometry = new BoxGeometry(1, 1, 1);
const floorMaterial01 = new MeshStandardMaterial({ color: "limegreen" });
const floorMaterial02 = new MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new MeshStandardMaterial({ color: "red" });
const wallMaterial01 = new MeshStandardMaterial({ color: "gray" });

export default function BlockLevel(props) {
  return (
    <>
      <BlockStart
        position={[0, 0, 0]}
        boxGeometry={boxGeometry}
        obstacleMaterial={obstacleMaterial}
        floorMaterial={floorMaterial01}
      />
      <BlockSpinner
        position={[0, 0, -4]}
        boxGeometry={boxGeometry}
        obstacleMaterial={obstacleMaterial}
        floorMaterial={floorMaterial02}
      />
      <BlockLimbo
        position={[0, 0, -8]}
        boxGeometry={boxGeometry}
        obstacleMaterial={obstacleMaterial}
        floorMaterial={floorMaterial01}
      />
      <BlockAxe
        position={[0, 0, -12]}
        boxGeometry={boxGeometry}
        obstacleMaterial={obstacleMaterial}
        floorMaterial={floorMaterial02}
      />
      <BlockEnd
        position={[0, 0.2, -16]}
        boxGeometry={boxGeometry}
        obstacleMaterial={obstacleMaterial}
        floorMaterial={floorMaterial01}
      />
    </>
  );
}
