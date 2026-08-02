import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

export function CopyField({
  label,
  value,
  port,
}: {
  label: string;
  value: string;
  port?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(port ? `${value}:${port}` : value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <motion.button
      type="button"
      onClick={copy}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Copy ${label} address`}
      className="glass-card group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-4 py-3 text-left transition-colors hover:border-primary-glow/50 sm:w-auto sm:min-w-[19rem]"
    >
      <span className="min-w-0">
        <span className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success animate-pulse-ring" />
          {label}
        </span>
        <span className="mt-1 block truncate font-display text-sm font-semibold sm:text-base">
          {value}
        </span>
        {port ? (
          <span className="text-xs text-primary-soft">Port {port}</span>
        ) : null}
      </span>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/25 text-primary-soft transition-colors group-hover:bg-primary/40">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="ok"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <Check className="h-4 w-4 text-success" />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <Copy className="h-4 w-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </motion.button>
  );
}