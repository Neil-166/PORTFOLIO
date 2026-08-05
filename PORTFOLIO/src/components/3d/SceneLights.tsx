import { Environment, Lightformer } from '@react-three/drei';

/**
 * Lighting for the laptop scene. Directional lights carve out the metallic edges;
 * a procedural Lightformer environment (rendered offline — no network fetch) gives
 * the metal surface something to reflect, in an indigo/violet palette.
 */
export function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 6]} intensity={1.7} color="#cdd4ff" />
      <directionalLight position={[-6, 3, -4]} intensity={0.9} color="#8f7bff" />
      <directionalLight position={[2, -4, 3]} intensity={0.4} color="#4f7cff" />

      <Environment resolution={64} frames={1}>
        <Lightformer intensity={1.4} color="#ffffff" position={[0, 3, 4]} scale={[8, 4, 1]} />
        <Lightformer intensity={0.8} color="#6366f1" position={[-4, 1, -3]} scale={[4, 6, 1]} />
        <Lightformer intensity={0.6} color="#a78bfa" position={[4, -2, 3]} scale={[5, 3, 1]} />
      </Environment>
    </>
  );
}
