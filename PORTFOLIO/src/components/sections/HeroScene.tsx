import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three';

function Orb({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => { if (mesh.current) { mesh.current.rotation.x = state.clock.elapsedTime * 0.12; mesh.current.rotation.y = state.clock.elapsedTime * 0.1; } });
  return <mesh ref={mesh} position={position} scale={scale}><icosahedronGeometry args={[1, 3]} /><meshBasicMaterial color={color} wireframe transparent opacity={0.2} /></mesh>;
}

export function HeroScene() {
  return <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden opacity-70"><Canvas camera={{ position: [0, 0, 6] }} dpr={[1, 1.5]}><Orb position={[-2.3, 0.7, -1]} color="#5a7cff" scale={1.25} /><Orb position={[2.1, -1.1, -0.5]} color="#c066ff" scale={0.95} /><Orb position={[1.7, 1.7, -2]} color="#45e3d3" scale={0.6} /></Canvas></div>;
}
