import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { heroState } from '@/lib/threeRegistry';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * A procedural premium laptop built from primitives — no external model needed.
 * Every frame it applies the scroll-driven state (rotation / scale / depth /
 * screen glow) on top of a gentle idle float and a subtle mouse parallax.
 */
export function FloatingObject() {
  const group = useRef<THREE.Group>(null);
  const screenMat = useRef<THREE.MeshStandardMaterial>(null);
  const parallax = useRef({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();

  // Generated gradient "screen" so the display reads as alive and glowing.
  const screenTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0b1026');
      gradient.addColorStop(0.5, '#1a1f3d');
      gradient.addColorStop(1, '#0d0a24');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const haze = ctx.createRadialGradient(
        canvas.width * 0.72, canvas.height * 0.35, 10,
        canvas.width * 0.72, canvas.height * 0.35, canvas.width * 0.5,
      );
      haze.addColorStop(0, 'rgba(99, 102, 241, 0.55)');
      haze.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = haze;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);

  useEffect(() => () => screenTexture.dispose(), [screenTexture]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    if (!reducedMotion) {
      const pxTarget = state.pointer.x * 0.12;
      const pyTarget = state.pointer.y * 0.08;
      parallax.current.x = THREE.MathUtils.lerp(parallax.current.x, pxTarget, 0.05);
      parallax.current.y = THREE.MathUtils.lerp(parallax.current.y, pyTarget, 0.05);
    }

    const bob = reducedMotion ? 0 : Math.sin(t * 0.7) * 0.1;
    const idleTwist = reducedMotion ? 0 : Math.sin(t * 0.4) * 0.02;

    group.current.position.set(parallax.current.x, heroState.posY + bob, heroState.posZ);
    group.current.rotation.set(
      heroState.rotX + parallax.current.y,
      heroState.rotY + parallax.current.x,
      heroState.rotZ + idleTwist,
    );
    group.current.scale.setScalar(heroState.scale);

    if (screenMat.current) screenMat.current.emissiveIntensity = heroState.glow;
  });

  return (
    <group ref={group}>
      {/* Screen assembly — lid tilted slightly back toward the camera. */}
      <group position={[0, 0.2, 0]} rotation={[-0.22, 0, 0]}>
        <RoundedBox args={[3.3, 2.25, 0.1]} radius={0.07} smoothness={4}>
          <meshStandardMaterial color="#161a2e" metalness={0.85} roughness={0.35} />
        </RoundedBox>
        <mesh position={[0, 0, 0.055]}>
          <planeGeometry args={[3.0, 1.95]} />
          <meshStandardMaterial
            ref={screenMat}
            color="#05060f"
            emissive="#8ea2ff"
            emissiveMap={screenTexture}
            emissiveIntensity={heroState.glow}
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>
      </group>

      {/* Deck assembly — keyboard slab receding toward the viewer. */}
      <group position={[0, -1, 0.6]} rotation={[-0.38, 0, 0]}>
        <RoundedBox args={[3.3, 0.18, 2.15]} radius={0.07} smoothness={4}>
          <meshStandardMaterial color="#161a2e" metalness={0.85} roughness={0.35} />
        </RoundedBox>
        <RoundedBox args={[2.75, 0.05, 1.1]} radius={0.04} smoothness={3} position={[0, 0.12, 0.1]}>
          <meshStandardMaterial color="#0b0e1c" metalness={0.6} roughness={0.55} />
        </RoundedBox>
        <RoundedBox args={[0.9, 0.05, 0.5]} radius={0.04} smoothness={3} position={[0, 0.12, -0.45]}>
          <meshStandardMaterial color="#0b0e1c" metalness={0.6} roughness={0.55} />
        </RoundedBox>
        {/* Indigo accent line along the front edge. */}
        <mesh position={[0, 0.1, 1.08]}>
          <boxGeometry args={[3.0, 0.02, 0.02]} />
          <meshBasicMaterial color="#6366f1" />
        </mesh>
      </group>

      {/* Hinge bridging screen and deck. */}
      <mesh position={[0, -0.42, 0.4]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[3.34, 0.12, 0.12]} />
        <meshStandardMaterial color="#1a1f33" metalness={0.9} roughness={0.3} />
      </mesh>
    </group>
  );
}
