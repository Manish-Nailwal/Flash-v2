import { Terminal, Github, Twitter, Instagram, Linkedin } from "lucide-react";

const socials = [
  { Icon: Twitter, href: "https://x.com/ManishNailwal_", label: "X" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/manish-nailwal/",
    label: "LinkedIn",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/manishnailwal_/",
    label: "Instagram",
  },
  {
    Icon: Github,
    href: "https://github.com/Manish-Nailwal/Flash-Challenge",
    label: "GitHub",
  },
];

function Footer() {
  return (
    <footer className="border-t border-card-border mt-20">
      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="grid place-items-center h-8 w-8 rounded-lg bg-accent/15 border border-accent/30 text-accent">
                <Terminal className="h-4 w-4" />
              </span>
              <span className="text-lg font-bold">
                Manish<span className="text-muted font-normal">Labs</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Flash is a Manish Labs experiment. A fast, minimal
              color-sequence memory game. No account, no server; your best run
              lives in your browser.
            </p>
            <a
              href="https://manishlabs.com"
              className="inline-block mt-4 text-sm text-accent hover:underline"
            >
              ← Back to Manish Labs
            </a>
          </div>

          <div className="flex flex-col md:items-end justify-between gap-6">
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid place-items-center h-10 w-10 rounded-xl border border-card-border text-muted hover:text-accent hover:border-accent transition-colors"
                >
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-muted text-xs font-mono">
              © 2026 Manish Labs. Built for the love of the game.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
