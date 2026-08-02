import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-soft">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}