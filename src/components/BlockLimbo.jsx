import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { Euler, Quaternion } from "three";

export default function BlockLimbo(props) {
  //   console.log(props);
  const spinerRef = useRef();
  const [spin] = useState(
    () => (Math.random() + 0.2) * (Math.random() > 0.5 ? 1 : -1),
  );
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // const rotation = new Quaternion();
    // rotation.setFromEuler(new Euler(0, time * spin, 0));
    spinerRef.current.setNextKinematicTranslation({
      x: 0,
      y: Math.abs(Math.sin(time * spin)) + 0.2,
      z: props.position[2],
    });
  });
  return (
    <>
      <group position={props.position}>
        {/* Floor  */}
        <mesh
          geometry={props.boxGeometry}
          material={props.floorMaterial}
          position={[0, -0.1, 0]}
          scale={[4, 0.2, 4]}
          receiveShadow
        />
        <RigidBody
          ref={spinerRef}
          type="kinematicPosition"
          restitution={0.5}
          friction={0}
          position={[0, 0.2, 0]}
        >
          <mesh
            geometry={props.boxGeometry}
            material={props.obstacleMaterial}
            scale={[3.5, 0.2, 0.2]}
            castShadow
          />
        </RigidBody>
      </group>
    </>
  );
}
