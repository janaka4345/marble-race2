import { BoxGeometry, ColorManagement, MeshStandardMaterial } from "three";

import BlockSpinner from "./BlockSpinner";
import BlockLimbo from "./BlockLimbo";
import BlockAxe from "./BlockAxe";
import BlockStart from "./BlockStart";
import BlockEnd from "./BlockEnd";
import { useMemo } from "react";
import Walls from "./Walls";

ColorManagement.enabled = true;
const boxGeometry = new BoxGeometry(1, 1, 1);
const floorMaterial = [
  new MeshStandardMaterial({ color: "greenyellow" }),
  new MeshStandardMaterial({ color: "limegreen" }),
];
const obstacleMaterial = new MeshStandardMaterial({ color: "red" });
const wallMaterial = new MeshStandardMaterial({ color: "gray" });

export default function BlockLevel02({
  count = 5,
  types = [BlockSpinner, BlockLimbo, BlockAxe],
}) {
  const obstacleBlocks = useMemo(() => {
    const blocks = [];
    for (let i = 0; i < count; i++) {
      const type = Math.floor(Math.random() * types.length);

      blocks.push(types[type]);
    }
    return blocks;
  }, [count, types]);
  return (
    <>
      <BlockStart
        position={[0, 0, 0]}
        boxGeometry={boxGeometry}
        obstacleMaterial={obstacleMaterial}
        floorMaterial={floorMaterial[1]}
      />
      {obstacleBlocks.map((Block, i) => {
        return (
          <Block
            key={i}
            position={[0, 0, (i + 1) * -4]}
            boxGeometry={boxGeometry}
            obstacleMaterial={obstacleMaterial}
            floorMaterial={floorMaterial[i % 2]}
          />
        );
      })}
      <BlockEnd
        position={[0, 0.2, (count + 1) * -4]}
        boxGeometry={boxGeometry}
        obstacleMaterial={obstacleMaterial}
        floorMaterial={floorMaterial[1]}
      />
      <Walls
        // position={[0, 0, 0]}
        length={count + 2}
        boxGeometry={boxGeometry}
        wallMaterial={wallMaterial}
      />
    </>
  );
}
