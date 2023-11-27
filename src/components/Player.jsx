import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody, useRapier } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";

export default function Player() {
  /*
   *player controls
   */
  const playerRef = useRef();
  const { rapier, world } = useRapier();

  const [smoothedCameraPosition] = useState(() => new Vector3(10, 10, 10));
  const [smoothedCameraTarget] = useState(() => new Vector3());

  const [subscribeKeys, getKeys] = useKeyboardControls();
  const jump = () => {
    const origin = playerRef.current.translation();
    origin.y -= 0.31;
    const direction = { x: 0, y: -1, z: 0 };
    const ray = new rapier.Ray(origin, direction);
    const hit = world.castRay(ray, 10, true);

    hit.toi < 0.15
      ? playerRef.current.applyImpulse({ x: 0, y: 0.5, z: 0 }, true)
      : null;
  };

  useEffect(() => {
    const unsubcribeJump = subscribeKeys(
      (state) => state.jump,
      (pressed) => {
        pressed && jump();
      },
    );
    return () => {
      unsubcribeJump();
    };
  }, []);

  useFrame((state, delta) => {
    /*
     *Player
     */
    const { forward, back, left, right } = getKeys();
    // console.log(forward, back, left, right, jump );
    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 0.6 * delta;
    const torqueStrength = 0.2 * delta;

    if (forward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }
    if (back) {
      impulse.z += impulseStrength;
      torque.x += torqueStrength;
    }
    if (left) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }
    if (right) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }
    // console.log(impulse);
    playerRef.current.applyImpulse(impulse, true);
    playerRef.current.applyTorqueImpulse(torque, true);

    /*
     *camera
     */
    /*
     *camera controls
     */

    const playerPosition = playerRef.current.translation();
    const cameraPosition = new Vector3();
    cameraPosition.copy(playerPosition);
    cameraPosition.z += 2.25;
    cameraPosition.y += 0.65;

    const cameraTarget = new Vector3();
    cameraTarget.copy(playerPosition);
    cameraTarget.y += 0.25;

    smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

    state.camera.position.copy(smoothedCameraPosition);
    state.camera.lookAt(smoothedCameraTarget);
  });

  return (
    <RigidBody
      ref={playerRef}
      colliders="ball"
      position={(0, 1, 0)}
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <mesh castShadow>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial flatShading color="mediumpurple" />
      </mesh>
    </RigidBody>
  );
}
