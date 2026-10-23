import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Ban,
  Gift,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  Swords,
  Trophy,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { SERVER } from "./site-data";

const FEATURES = [
  { emoji: "⚔", title: "Survival", text: "Hardcore vanilla-plus survival with a living, player-shaped world." },
  { emoji: "💰", title: "Economy", text: "A real player economy: shops, trading and market-driven prices." },
  { emoji: "🏴", title: "Anarchy", text: "Almost no rules. Raid, betray, conquer — the world is yours." },
  { emoji: "🏹", title: "PvP", text: "Tuned combat, no safe zones and rewarding kill streaks." },
  { emoji: "🏡", title: "Base Building", text: "Build hidden bunkers or towering fortresses that survive the raids." },
  { emoji: "🎁", title: "Vote Rewards", text: "Vote daily for keys, currency and exclusive cosmetic drops." },
  { emoji: "📦", title: "Crates", text: "Tiered crates packed with gear, loot tables and rare items." },
  { emoji: "⚡", title: "Daily Rewards", text: "Log in every day and stack escalating streak bonuses." },
  { emoji: "🎉", title: "Community Events", text: "Weekly events, tournaments and world-wide server drops." },
];

const BANNED = [
  "Hacked clients",
  "Cheats",
  "Exploits",
  "Any unfair gameplay advantage",
  "Excessive harassment",
  "Threats",
  "Hate speech",
  "Disrespect toward players or staff",
  "Offensive language or slurs",
  "Adult jokes or sexual content",
  "Advertising other servers or communities without permission",
  "Attempting to crash, lag, damage, or disrupt the server",
];

const FAQS = [
  {
    q: "How do I join CentricXMC?",
    a: `Add the server with IP ${SERVER.ip} and port ${SERVER.javaPort} for Java Edition, or ${SERVER.ip}:${SERVER.bedrockPort} for Bedrock. Both editions are fully supported.`,
  },
  {
    q: "Can Bedrock players join?",
    a: `Yes. Bedrock players connect to ${SERVER.ip} on port ${SERVER.bedrockPort} — crossplay is fully supported.`,
  },
  {
    q: "Is griefing and raiding allowed?",
    a: "Yes. CentricXMC is an Eco-Anarchy server, so griefing, raiding, stealing, trapping and base hunting are all part of normal gameplay.",
  },
  {
    q: "What happens if I cheat?",
    a: "Hacked clients, exploits and any unfair advantage lead to an immediate ban. Staff decisions are final.",
  },
  {
    q: "When does the store open?",
    a: "The store is in the final stages of setup. Join our Discord to be notified the moment ranks and crates go live.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Gameplay"
        title="Built for players who want it all"
        subtitle="Nine handcrafted systems that make every session on CentricXMC different."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.05}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className="glass-card group h-full rounded-3xl p-6 transition-colors hover:border-primary-glow/50"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/20 text-2xl transition-shadow group-hover:glow-ring">
                {f.emoji}
              </span>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Rules() {
  return (
    <section id="rules" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Fair Play"
        title="CentricXMC Rules"
        subtitle="An Eco-Anarchy world still needs a floor. Here is exactly where the line sits."
      />
      <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="glass-card h-full rounded-3xl p-6 sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/20 text-primary-soft">
              <Swords className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-xl font-bold">Allowed gameplay</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              CentricXMC is an Eco-Anarchy server. Griefing, raiding, PvP, stealing, trapping,
              and base hunting are all allowed as part of normal gameplay.
            </p>
            <div className="mt-6 rounded-2xl bg-primary/10 p-4 text-sm text-primary-soft">
              Staff decisions are final. By joining CentricXMC, every player agrees to follow
              these rules and help maintain a fair and respectful community.
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-card h-full rounded-3xl p-6 sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-destructive/15 text-destructive">
              <Ban className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-xl font-bold">Strictly prohibited</h3>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {BANNED.map((r) => (
                <li
                  key={r}
                  className="glass flex items-start gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-muted-foreground"
                >
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary-soft" />
                  <span className="min-w-0">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function VoteAndStore() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div id="vote" className="glass-card h-full scroll-mt-24 rounded-3xl p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/20 text-primary-soft">
              <Trophy className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-2xl font-bold">Vote &amp; Earn</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Vote once a day to climb the reward ladder — crate keys, in-game currency and
              streak bonuses land in your inventory instantly.
            </p>
            <div className="mt-7">
              <MagneticButton href={SERVER.discord} external>
                Vote Now <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div id="store" className="glass-card relative h-full scroll-mt-24 overflow-hidden rounded-3xl p-8">
            <span className="glass absolute right-6 top-6 rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary-soft">
              Coming Soon
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/20 text-primary-soft">
              <ShoppingBag className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-2xl font-bold">Store</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Ranks, cosmetics and crate bundles are being finalised. Join the Discord to get
              notified the second the store opens.
            </p>
            <div className="mt-7">
              <MagneticButton href={SERVER.discord} variant="ghost" external>
                Notify Me
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function DiscordSection() {
  return (
    <section id="discord" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <Reveal>
        <div className="glass-card relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto grid h-16 w-16 place-items-center rounded-3xl text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            <MessageCircle className="h-7 w-7" />
          </motion.span>
          <h2 className="relative mt-7 text-3xl font-bold sm:text-5xl">Discord Community</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Join thousands of players and stay updated with events and announcements.
          </p>
          <div className="relative mt-9 flex justify-center">
            <MagneticButton href={SERVER.discord} external>
              <Gift className="mr-2 h-4 w-4" /> Join Discord
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow="FAQ" title="Questions, answered" />
      <div className="mt-12 grid gap-3">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.05}>
            <details className="glass-card group rounded-2xl px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="grid cursor-pointer grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-sm font-semibold sm:text-base">
                <span className="min-w-0">{f.q}</span>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/20 text-primary-soft transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}