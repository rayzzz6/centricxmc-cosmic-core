import { MessageCircle, Twitter, Youtube } from "lucide-react";
import { CopyField } from "./CopyField";
import { SERVER } from "./site-data";

export function Footer() {
  return (
    <footer className="relative border-t border-border/70 px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              className="grid h-9 w-9 place-items-center rounded-lg font-display font-bold text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              C
            </span>
            <span className="font-display text-lg font-bold">
              CENTRIC<span className="text-primary-soft">XMC</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            An Eco-Anarchy Minecraft network where raiding, economy and survival collide.
            Java &amp; Bedrock supported.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: MessageCircle, href: SERVER.discord, label: "Discord" },
              { icon: Twitter, href: SERVER.discord, label: "Twitter" },
              { icon: Youtube, href: SERVER.discord, label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition-colors hover:text-primary-soft"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <CopyField label="Java IP" value={SERVER.ip} port={SERVER.javaPort} />
          <a
            href={SERVER.discord}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            style={{ background: "var(--gradient-primary)" }}
          >
            Join Discord
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border/70 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} CentricXMC. Not affiliated with Mojang or Microsoft.
      </div>
    </footer>
  );
}