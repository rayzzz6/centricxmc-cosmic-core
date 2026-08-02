import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  delay: (i % 11) * 1.3,
  duration: 12 + (i % 7) * 2,
  size: 2 + (i % 3),
}));

export function Particles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-primary-soft/70 blur-[1px]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-30 hidden h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[110px] md:block"
      style={{
        left: pos.x,
        top: pos.y,
        background: "radial-gradient(circle, var(--primary-glow), transparent 65%)",
        transition: "left 180ms ease-out, top 180ms ease-out",
      }}
    />
  );
}

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ pointerEvents: done ? "none" : "auto" }}
      className="fixed inset-0 z-[60] grid place-items-center bg-background"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
          className="mx-auto h-14 w-14 rounded-xl border-2 border-primary-glow/70 border-t-transparent"
        />
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="mt-6 font-display text-sm font-bold uppercase tracking-[0.45em] text-primary-soft"
        >
          CentricXMC
        </motion.p>
      </div>
    </motion.div>
  );
}