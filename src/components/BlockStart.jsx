export default function BlockStart(props) {
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
        {/* <RigidBody type="fixed" position={[0, 1, -5]}>
          <mesh>
            <boxGeometry args={[2, 1, 2]} />
            <meshBasicMaterial color="red" />
          </mesh>
        </RigidBody> */}
      </group>
    </>
  );
}
