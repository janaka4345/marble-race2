import { CuboidCollider, RigidBody } from "@react-three/rapier";

export default function Walls(props) {
  return (
    <>
      <RigidBody type="fixed" restitution={0.2} friction={0}>
        <mesh
          geometry={props.boxGeometry}
          material={props.wallMaterial}
          position={[2.15, 0.75, -(props.length * 2) + 2]}
          scale={[0.3, 1.5, 4 * props.length]}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={props.boxGeometry}
          material={props.wallMaterial}
          position={[-2.15, 0.75, -(props.length * 2) + 2]}
          scale={[0.3, 1.5, 4 * props.length]}
          receiveShadow
        />
        <mesh
          geometry={props.boxGeometry}
          material={props.wallMaterial}
          position={[0, 0.75, 2]}
          scale={[4, 1.5, 0.3]}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={props.boxGeometry}
          material={props.wallMaterial}
          position={[0, 0.75, -(4 * props.length) + 2]}
          scale={[4, 1.5, 0.3]}
          receiveShadow
        />
        <CuboidCollider
          args={[2, 0.1, 2 * props.length]}
          position={[0, -0.1, -(2 * props.length) + 2]}
          restitution={0.2}
          friction={1}
        />
      </RigidBody>
    </>
  );
}
