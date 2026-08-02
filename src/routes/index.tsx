import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ServerStatus } from "@/components/site/ServerStatus";
import { Features, Rules, VoteAndStore, DiscordSection, Faq } from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";
import { CursorGlow, LoadingScreen } from "@/components/site/Atmosphere";

const DESCRIPTION =
  "CentricXMC is a premium Eco-Anarchy Minecraft server. Java & Bedrock at centricxmc.ice.lol:25604 — survival, economy, raiding, crates and live server status.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CentricXMC — Eco-Anarchy Minecraft Server | Java & Bedrock" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "CentricXMC — Survive. Build. Raid. Dominate." },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative overflow-x-hidden">
      <LoadingScreen />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <ServerStatus />
        <Features />
        <Rules />
        <VoteAndStore />
        <DiscordSection />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
