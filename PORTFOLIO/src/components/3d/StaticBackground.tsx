/**
 * Mobile (<768px) fallback background — a static gradient laptop illustration.
 * Deliberately free of any WebGL imports so the heavy 3D bundle never downloads
 * on small screens.
 */
export function StaticBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(42%_42%_at_50%_38%,rgb(99_102_241/.22),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_85%,rgb(168_85_247/.10),transparent_70%)]" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[44%] w-[min(80vw,22rem)] -translate-x-1/2 -translate-y-1/2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] border border-brand/25 bg-gradient-to-br from-[#0b1026] via-[#161b3d] to-[#0d0a24] shadow-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgb(99_102_241/.5),transparent_55%)]" />
            <div className="absolute inset-x-6 top-6 h-2 rounded-full bg-brand/25" />
            <div className="absolute inset-x-6 bottom-5 h-14 rounded-xl border border-white/5 bg-white/5" />
          </div>
          <div className="mx-auto mt-3 h-2.5 w-3/4 rounded-full bg-gradient-to-r from-[#1c2340] via-[#262e55] to-[#1c2340] shadow-lg" />
        </div>
      </div>
    </div>
  );
}
