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
      </group>
    </>
  );
}
