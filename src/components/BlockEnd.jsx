import { useGLTF } from "@react-three/drei";

export default function BlockEnd(props) {
  const model = useGLTF("./hamburger.glb");
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
        <primitive object={model.scene} scale={0.25} />
      </group>
    </>
  );
}
