import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

export function MagneticButton({
  children,
  href,
  variant = "primary",
  external,
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setOffset({
          x: (e.clientX - (r.left + r.width / 2)) * 0.25,
          y: (e.clientY - (r.top + r.height / 2)) * 0.35,
        });
      }}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold transition-colors sm:text-base ${
        variant === "primary"
          ? "text-primary-foreground"
          : "glass text-foreground hover:border-primary-glow/60"
      }`}
      style={
        variant === "primary"
          ? { background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }
          : undefined
      }
    >
      {children}
    </motion.a>
  );
}