import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, Gauge, RefreshCw, Server, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { SERVER } from "./site-data";

type Status = {
  online: boolean;
  players?: { online: number; max: number };
  version?: string;
  icon?: string;
  motd?: { clean?: string[] };
};

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        <span className="text-primary-soft">{icon}</span>
        <span className="truncate">{label}</span>
      </div>
      <p className="mt-2 truncate font-display text-xl font-bold sm:text-2xl">{value}</p>
    </div>
  );
}

export function ServerStatus() {
  const [status, setStatus] = useState<Status | null>(null);
  const [loading, setLoading] = useState(true);
  const [ping, setPing] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  const load = useCallback(async () => {
    const started = performance.now();
    try {
      const res = await fetch(SERVER.statusApi, { cache: "no-store" });
      const data = (await res.json()) as Status;
      setStatus(data);
      setPing(Math.round(performance.now() - started));
      setFailed(false);
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
    const id = setInterval(() => void load(), 30000);
    return () => clearInterval(id);
  }, [load]);

  const online = Boolean(status?.online);
  const motd = status?.motd?.clean?.join(" ") ?? "Eco-Anarchy • Survival • PvP • Economy";

  return (
    <section id="status" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Live Status"
        title="Server Status"
        subtitle="Real-time network health, refreshed automatically every 30 seconds."
      />

      <Reveal delay={0.1} className="mt-12">
        <div className="glass-card relative overflow-hidden rounded-3xl p-5 sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between">
            <div className="flex min-w-0 items-center gap-4">
              {status?.icon ? (
                <img
                  src={status.icon}
                  alt="CentricXMC server icon"
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-14 w-14 shrink-0 rounded-2xl border border-border sm:h-16 sm:w-16"
                />
              ) : (
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/25 sm:h-16 sm:w-16">
                  <Server className="h-6 w-6 text-primary-soft" />
                </div>
              )}
              <div className="min-w-0">
                <h3 className="truncate text-lg font-bold sm:text-2xl">{SERVER.ip}</h3>
                <p className="truncate text-sm text-muted-foreground">{motd}</p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                  online ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${online ? "bg-success animate-pulse-ring" : "bg-destructive"}`}
                />
                {loading ? "Checking" : online ? "Online" : "Offline"}
              </span>
              <button
                type="button"
                onClick={() => void load()}
                aria-label="Refresh server status"
                className="glass grid h-9 w-9 place-items-center rounded-xl text-muted-foreground transition-colors hover:text-foreground"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={loading ? "loading" : online ? "on" : "off"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="relative mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4"
            >
              <Stat
                icon={<Users className="h-4 w-4" />}
                label="Players"
                value={loading ? "—" : String(status?.players?.online ?? 0)}
              />
              <Stat
                icon={<Activity className="h-4 w-4" />}
                label="Max Players"
                value={loading ? "—" : String(status?.players?.max ?? 0)}
              />
              <Stat
                icon={<Server className="h-4 w-4" />}
                label="Version"
                value={loading ? "—" : (status?.version ?? "1.20+")}
              />
              <Stat
                icon={<Gauge className="h-4 w-4" />}
                label="Ping"
                value={ping === null ? "—" : `${ping} ms`}
              />
            </motion.div>
          </AnimatePresence>

          {failed ? (
            <p className="relative mt-4 text-xs text-muted-foreground">
              Live status is temporarily unavailable — the server address is still valid.
            </p>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}