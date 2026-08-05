import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FloatingObject } from '@/components/3d/FloatingObject';
import { SceneLights } from '@/components/3d/SceneLights';
import { heroState } from '@/lib/threeRegistry';

/** Keeps the camera depth in step with the scroll state, looking at the laptop. */
function SceneCamera() {
  useFrame((state) => {
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, heroState.camZ, 0.08);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function DeviceScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, heroState.camZ], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <SceneCamera />
      <SceneLights />
      <FloatingObject />
    </Canvas>
  );
}

/**
 * Fixed, full-viewport WebGL background layer. Lazy-loaded by Home so the
 * three/fiber/drei bundle only ships to desktop screens; the mobile fallback
 * lives in `StaticBackground.tsx` (no WebGL imports).
 * Scroll fades the whole layer via `heroState.opacity`.
 */
export default function HeroCanvas() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const apply = () => {
      if (layerRef.current) layerRef.current.style.opacity = String(heroState.opacity);
      frame = requestAnimationFrame(apply);
    };
    frame = requestAnimationFrame(apply);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={layerRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(42%_42%_at_50%_38%,rgb(99_102_241/.22),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_85%,rgb(168_85_247/.10),transparent_70%)]" />
      <DeviceScene />
    </div>
  );
}
