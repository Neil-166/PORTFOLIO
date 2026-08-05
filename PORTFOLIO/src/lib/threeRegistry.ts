/**
 * Shared mutable state between the GSAP scroll timeline and the react-three-fiber
 * frame loop.
 *
 * GSAP tweens these plain numbers on scroll; the WebGL components read them every
 * frame inside `useFrame`. Keeping the values on a plain object (instead of
 * tweening THREE objects directly) means the timeline never depends on whether the
 * canvas has mounted yet, and the reduced-motion path can leave a static resting
 * pose simply by never running the timeline.
 */
export const heroState = {
  /** Horizontal rotation of the laptop group (radians). */
  rotY: 0.55,
  /** Vertical rotation of the laptop group (radians). */
  rotX: 0,
  /** Z-axis rotation (radians). */
  rotZ: 0,
  /** Uniform scale of the laptop group. */
  scale: 1,
  /** Vertical offset (world units). */
  posY: 0,
  /** Depth offset — positive pushes the laptop toward the camera. */
  posZ: 0,
  /** Camera depth (z position). */
  camZ: 8,
  /** Emissive intensity of the laptop screen. */
  glow: 1,
  /** Opacity of the fixed 3D background layer. */
  opacity: 1,
};
