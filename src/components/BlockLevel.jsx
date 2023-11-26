import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import {
  BoxGeometry,
  ColorManagement,
  Euler,
  MeshStandardMaterial,
  Quaternion,
} from "three";
import BlockSpinner from "./BlockSpinner";
import BlockLimbo from "./BlockLimbo";

ColorManagement.enabled = true;
const boxGeometry = new BoxGeometry(1, 1, 1);
const floorMaterial01 = new MeshStandardMaterial({ color: "limegreen" });
const floorMaterial02 = new MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new MeshStandardMaterial({ color: "red" });
const wallMaterial01 = new MeshStandardMaterial({ color: "gray" });

function BlockLevel01(props) {
  return (
    <>
      <group position={props.position}>
        {/* Floor  */}
        <mesh
          geometry={boxGeometry}
          material={floorMaterial01}
          position={[0, -0.1, 0]}
          scale={[4, 0.2, 4]}
          receiveShadow
        />
      </group>
    </>
  );
}

export default function BlockLevel() {
  return (
    <>
      <BlockLevel01 position={[0, 0, 0]} />
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
      <BlockSpinner
        position={[0, 0, -12]}
        boxGeometry={boxGeometry}
        obstacleMaterial={obstacleMaterial}
        floorMaterial={floorMaterial02}
      />
      <BlockLimbo
        position={[0, 0, -16]}
        boxGeometry={boxGeometry}
        obstacleMaterial={obstacleMaterial}
        floorMaterial={floorMaterial01}
      />
    </>
  );
}
