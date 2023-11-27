import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function BlockEnd(props) {
  const model = useGLTF("./hamburger.glb");
  model.scene.children.forEach((mesh) => (mesh.castShadow = true));
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
        <RigidBody type="fixed" restitution={0.2} friction={0}>
          <primitive object={model.scene} scale={0.25} />
        </RigidBody>
      </group>
    </>
  );
}
