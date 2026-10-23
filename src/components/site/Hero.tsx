import { motion } from "framer-motion";
import heroWorld from "@/assets/hero-world.jpg";
import { CopyField } from "./CopyField";
import { MagneticButton } from "./MagneticButton";
import { AuroraLayer, Particles, StarField } from "./Atmosphere";
import { SERVER } from "./site-data";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroWorld}
        alt="CentricXMC Minecraft world at sunset with floating islands and purple nebula sky"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="animate-ken-burns absolute inset-0 h-full w-full object-cover will-change-transform"
      />
      <AuroraLayer />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-background/30" />
      <StarField />
      <Particles />

      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-4 pt-28 pb-16 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-primary-soft uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-ring" />
          Eco-Anarchy Network
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-[clamp(2.6rem,11vw,7rem)] font-bold leading-[0.95] text-gradient"
        >
          CENTRICXMC
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mt-5 max-w-xl text-base tracking-wide text-muted-foreground sm:text-lg"
        >
          Survive. Build. Raid. Dominate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.85, duration: 0.8 }}
          className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <MagneticButton href="#status">Join Server</MagneticButton>
          <MagneticButton href={SERVER.discord} variant="ghost" external>
            Join Discord
          </MagneticButton>
          <MagneticButton href="#status" variant="ghost">
            View Server Status
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-10 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <CopyField label="Java IP" value={SERVER.ip} port={SERVER.javaPort} />
          <CopyField label="Bedrock IP" value={SERVER.ip} port={SERVER.bedrockPort} />
        </motion.div>
      </div>
    </section>
  );
}